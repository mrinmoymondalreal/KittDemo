"use client";

import { ChevronDown } from "lucide-react";
import { Input } from "./ui/input";
import {
  Dispatch,
  ReactNode,
  SetStateAction,
  useEffect,
  useRef,
  useState,
} from "react";
import { cn } from "@/lib/utils";

interface ItemProps {
  city: string;
  country: string;
  code: string;
  onSelect: Dispatch<SetStateAction<string>>;
}

interface SearchDropDownProps {
  label: string;
  icon?: ReactNode;
  data: {
    airports: {
      name: string;
      code: string;
      city: string;
      country: string;
    }[];
  };
  setInfo: <T>(info: T) => void;
  defaultValue?: string | (() => string);
}

function SearchDropDownItem({ city, country, code, onSelect }: ItemProps) {
  return (
    <div
      onClick={() => onSelect(code)}
      className="item text-sm text-secondary-foreground flex w-full px-4 py-[6px] cursor-pointer hover:bg-[#F5F7FA]"
    >
      <div className="name text-left">
        <div>{city}</div>
        <div className="text-xs text-primary-gray">{country}</div>
      </div>
      <div className="flex-1 uppercase text-right flex justify-end items-center">
        {code}
      </div>
    </div>
  );
}

export default function SearchDropDown({
  label,
  icon,
  data,
  setInfo,
  defaultValue,
}: SearchDropDownProps) {
  let [selectedItem, _setSelectItem] = useState<string>(defaultValue || "");
  const [isFocused, setFocused] = useState<boolean>(false);
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    defaultValue && _setSelectItem(defaultValue);
  }, [defaultValue]);

  function setSelectItem(args: any) {
    if (typeof args == "function")
      _setSelectItem((e) => {
        let g = args(e);
        if (data.airports.find((e) => e.code == g)?.name) setInfo(g);
        return g;
      });

    _setSelectItem(args);
    if (data.airports.find((e) => e.code == args)?.name) {
      setInfo(args);
    }
  }

  function renderItems() {
    const items = data.airports.filter(
      (e) =>
        JSON.stringify(e)
          .toLowerCase()
          .indexOf(selectedItem.toLowerCase() || "") > -1
    );

    if (items.length <= 0) return "Not Data Found";

    return items.map(({ city, code, country }) => (
      <SearchDropDownItem
        key={code}
        city={city}
        code={code}
        country={country}
        onSelect={setSelectItem}
      />
    ));
  }

  return (
    <button
      className={
        "rounded-md border border-inactive-border flex items-end px-3 relative group" +
        (!isFocused ? " py-5" : " py-3")
      }
      onFocus={() => {
        setFocused(true);
        inputRef.current?.focus();
      }}
      onBlur={() => selectedItem.trim() == "" && setFocused(false)}
    >
      <div className="mr-[10px]">{icon}</div>
      <div className="*space-y-2 peer relative">
        <span
          className={cn(
            "text-xs text-primary-gray text-left top-[2px] hidden",
            isFocused && "block"
          )}
        >
          {label}
        </span>
        <span>
          <Input
            ref={inputRef}
            onFocus={() => setFocused(true)}
            onBlur={() => selectedItem.trim() == "" && setFocused(false)}
            className="p-0 h-6 text-[#001F1D] border-none shadow-none focus-visible:ring-0 placeholder:text-[#484A4D] placeholder:text-base"
            value={
              data.airports.find((e) => e.code == selectedItem)?.name ||
              selectedItem
            }
            placeholder={isFocused ? "" : label}
            onChange={(e) => setSelectItem(e.target.value)}
          />
        </span>
      </div>
      <div className="text-primary-gray ml-3 mb-[3px] transition-transform origin-center peer-has-[:focus]:rotate-180 group-focus:rotate-180">
        <ChevronDown size={16} />
      </div>
      <div className="absolute shadow-md bg-white z-50 hidden space-y-1 w-full top-full left-0 mt-[6px] rounded-md border border-inactive-border peer-has-[:focus]:flex group-focus:flex flex-col py-1 max-h-[200px] overflow-y-auto">
        {renderItems()}
      </div>
    </button>
  );
}
