"use client";

import { FlightDetailsSheet } from "@/components/FlightSheet";
import LoadingPage from "@/components/LoadingPage";
import FlightsInfoCard from "@/components/FlightInfoCard";
import { useEffect, useRef, useState } from "react";
import { Separator } from "./ui/separator";
import { ArrowUpDown, LocateFixed, Search, SearchIcon, X } from "lucide-react";
import { Button } from "./ui/button";

import { Sheet, SheetContent, SheetTitle, SheetTrigger } from "./ui/sheet";
import SearchDropDown from "./SearchDropDown";
import SearchCaledar from "./SearchCalendar";
import { flight_info, formDataType } from "@/lib/types";
import useSWR from "swr";
import Link from "next/link";

const fetcher = (input: RequestInfo | URL, init?: RequestInit) =>
  fetch(input, init).then((res) => res.json());

export function FlightPageCards() {
  const [isOpened, setOpen] = useState(false);
  const flight = useRef<{ id: string }>();
  const [stopLoading, setLoading] = useState(false);

  const {
    data: flights,
    error,
    isLoading,
  } = useSWR<[flight_info, flight_info][]>("/api/flights", fetcher);

  function handleFlightCardClick(name: string) {
    return (e = true) => {
      flight.current = {
        id: name,
      };
      setOpen(e);
    };
  }

  useEffect(() => {
    let timeout;
    if (stopLoading == false) {
      timeout = setTimeout(() => {
        setLoading(true);
      }, 4000);
    }
    if (timeout) return () => clearTimeout(timeout);
  });

  return (
    <>
      {(!stopLoading || isLoading) && (
        <div className="w-full h-1 overflow-x-hidden bg-[#E5EBEB]">
          <div className="w-8 h-full inside-loader"></div>
        </div>
      )}
      <div className="flex min-h-screen px-[120px] pt-4">
        <div className="px-[72px] w-full space-y-6">
          <h1 className="text-[#787B80] text-lg font-normal ">
            Showing 356 of 767 results
          </h1>
          {!stopLoading || isLoading ? (
            <LoadingPage />
          ) : (
            <div className="space-y-5 pb-6">
              {flights!.map((result, index) => (
                <FlightsInfoCard
                  key={index}
                  onClick={handleFlightCardClick(index.toString())}
                  flight1={{
                    ...result[0],
                    name: result[0].name + " • " + result[0].flight_number,
                  }}
                  currency="AED"
                  price={result[0].price}
                  flight2={{
                    ...result[1],
                    name: result[1].name + " • " + result[1].flight_number,
                  }}
                />
              ))}
            </div>
          )}
        </div>
      </div>
      {flight.current && (
        <FlightDetailsSheet
          flight_id={flight.current?.id}
          isOpened={isOpened}
          setOpen={setOpen}
        />
      )}
    </>
  );
}

export function FlightPageSearch({ params }: { params: formDataType }) {
  const [formdata, setFormData] = useState<formDataType>(params);

  const { data, error, isLoading } = useSWR("/api/airport_list", fetcher);

  function setInfo(key: string) {
    return function <T>(info: T) {
      setFormData((formdata) => ({ ...formdata, [key]: info }));
    };
  }

  function handleInterChange() {
    setFormData((fdata) => ({ ...fdata, from: fdata.to, to: fdata.from }));
  }

  function handleDate() {
    let [year, month, day] = formdata.departure
      .split("/")
      .reverse()
      .map(Number);
    let d1 = new Date(year, month, day);
    let [year2, month2, day2] = formdata.arrival
      .split("/")
      .reverse()
      .map(Number);
    let d2 = new Date(year2, month2, day2);

    return `${new Intl.DateTimeFormat("en-IN", {
      month: "short",
      day: "numeric",
    }).format(d1)} - ${new Intl.DateTimeFormat("en-IN", {
      month: "short",
      day: "numeric",
    }).format(d2)}`;
  }

  function checkValidation() {
    if (data) {
      if (
        formdata.to !== formdata.from &&
        formdata.arrival !== formdata.departure
      ) {
        if (
          data.airports.find(
            ({ code }: { code: string }) => code == formdata.to
          ) &&
          data.airports.find(
            ({ code }: { code: string }) => code == formdata.from
          )
        )
          return true;
      }
    }

    return false;
  }

  return (
    <>
      <Sheet>
        <header className="flex px-[120px]">
          <div className="px-[72px] py-7 w-full flex">
            <SheetTrigger asChild>
              <div className="border rounded-full cursor-pointer px-6 pr-2 py-2 flex items-center h-full gap-x-4 w-fit">
                <div className="flex gap-2">
                  {params.from}{" "}
                  <span className="text-[#787B80] w-auto max-w-48 line-clamp-1 ">
                    {!isLoading
                      ? data.airports.find(
                          ({ code }: { code: string }) => code == params.from
                        ).name
                      : "Loading..."}
                  </span>
                </div>
                <Separator orientation="vertical" />
                <div className="flex gap-2">
                  {params.to}{" "}
                  <span className="text-[#787B80] w-auto max-w-48 line-clamp-1">
                    {!isLoading
                      ? data.airports.find(
                          ({ code }: { code: string }) => code == params.to
                        ).name
                      : "Loading..."}
                  </span>
                </div>
                <Separator orientation="vertical" />
                <div>{handleDate()}</div>
                <Separator orientation="vertical" />
                <button className="bg-[#E5EBEB] w-10 h-10 flex justify-center items-center rounded-full">
                  <SearchIcon size={16} />
                </button>
              </div>
            </SheetTrigger>
            <div className="flex items-center justify-end flex-1">
              <Link href={"/"}>
                <Button
                  variant={"outline"}
                  size={"icon"}
                  className="w-12 h-12 rounded-full"
                >
                  <X size={20} />
                </Button>
              </Link>
            </div>
          </div>
        </header>

        <SheetContent side={"top"} aria-describedby="">
          <SheetTitle />
          <div className="px-[200px] py-6 space-y-9">
            <div className="wrapper space-y-6">
              <div className="flex gap-x-6 ">
                <div className="flex flex-1 gap-x-3 items-center">
                  <SearchDropDown
                    data={data}
                    setInfo={setInfo("from")}
                    label="Where from?"
                    defaultValue={formdata.from}
                    icon={
                      <LocateFixed color="#C9CACC" size={20} className="mb-1" />
                    }
                  />
                  <div
                    onClick={handleInterChange}
                    className="bg-[#F5F7FA] w-16 h-16 rounded-full flex justify-center items-center cursor-pointer"
                  >
                    <ArrowUpDown size={20} className="rotate-90" />
                  </div>
                  <SearchDropDown
                    data={data}
                    setInfo={setInfo("to")}
                    label="Where to?"
                    defaultValue={() => formdata.to}
                    icon={
                      <LocateFixed color="#C9CACC" size={20} className="mb-1" />
                    }
                  />
                </div>
                <div className="flex gap-x-3 items-center flex-1 h-fit">
                  <SearchCaledar
                    defaultValue={formdata.departure}
                    setInfo={setInfo("departure")}
                    label="Departure"
                  />
                  <SearchCaledar
                    defaultValue={formdata.arrival}
                    setInfo={setInfo("departure")}
                    label="Arrival"
                  />
                </div>
              </div>
            </div>
            <div className="footer flex justify-end">
              <Link
                aria-disabled={!checkValidation()}
                href={`/search_flights?${Object.keys(formdata)
                  .map(
                    (key) =>
                      `${key}=${encodeURIComponent(formdata[key as keyof typeof formdata])}`
                  )
                  .join("&")}`}
              >
                <button
                  disabled={!checkValidation()}
                  onClick={() => setTimeout(() => location.reload(), 1000)}
                  className="bg-[rgb(0,62,57)] hover:bg-[#003E39] text-white px-14 py-4 flex gap-x-3 rounded-[7px]"
                >
                  <Search className="mt-1 h-4 w-4" />
                  <div>Search flights</div>
                </button>
              </Link>
            </div>
          </div>
        </SheetContent>
      </Sheet>
    </>
  );
}
