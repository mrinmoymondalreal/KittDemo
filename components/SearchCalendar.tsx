"use client";

import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { CalendarIcon } from "lucide-react";
import { Button } from "./ui/button";
import { cn } from "@/lib/utils";
import { Calendar } from "@/components/ui/calendar";
import { SetStateAction, useState } from "react";

export default function SearchCaledar({
  label,
  setInfo,
  defaultValue,
}: {
  label: string;
  setInfo: <T>(info: T) => void;
  defaultValue?: string;
}) {
  const [date, _setDate] = useState<Date | undefined>(() => {
    if (defaultValue) {
      const [year, month, day] = defaultValue.split("/").reverse().map(Number);
      return new Date(year, month, day);
    }

    return;
  });

  function setDate(args: SetStateAction<Date | undefined>) {
    if (typeof args == "function")
      _setDate((e) => {
        let g = args(e);
        setInfo(handleDate(g));
        return g;
      });

    let g = args;
    setInfo(handleDate(g as Date));
    _setDate(g);
  }

  function handleDate(_date = date): string {
    if (_date) {
      return `${_date.getDate()}/${_date.getMonth()}/${_date.getFullYear()}`;
    }
    return "";
  }

  return (
    <Popover>
      <PopoverTrigger className="w-full" asChild>
        <Button
          variant={"outline"}
          className={cn(
            "justify-start py-5 px-3 pr-[59px] h-fit w-full text-[#484A4D]",
            handleDate() != "" && "py-3"
          )}
        >
          <CalendarIcon
            color="#C9CACC"
            className="mr-[10px] -mt-0.5 h-4 w-4"
            size={20}
          />
          <div>
            <span
              className={cn(
                "text-xs text-primary-gray text-left top-[2px] hidden",
                handleDate() != "" && "block"
              )}
            >
              {label}
            </span>
            <div className="text-base text-left">
              {handleDate() == "" ? label : handleDate()}
            </div>
          </div>
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-auto p-0" align="start">
        <Calendar
          mode="single"
          selected={date}
          onSelect={setDate}
          className="rounded-md aria-selected:text-white border"
        />
      </PopoverContent>
    </Popover>
  );
}
