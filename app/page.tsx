"use client";

import SearchCaledar from "@/components/SearchCalendar";
import SearchDropDown from "@/components/SearchDropDown";
import { ArrowUpDown, LocateFixed, Search } from "lucide-react";
import Link from "next/link";
import { useState } from "react";

const data = {
  airports: [
    {
      name: "Indira Gandhi International Airport",
      code: "DEL",
      city: "New Delhi",
      country: "India",
    },
    {
      name: "Chhatrapati Shivaji Maharaj International Airport",
      code: "BOM",
      city: "Mumbai",
      country: "India",
    },
    {
      name: "John F. Kennedy International Airport",
      code: "JFK",
      city: "New York",
      country: "United States",
    },
    {
      name: "Dubai International Airport",
      code: "DXB",
      city: "Dubai",
      country: "United Arab Emirates",
    },
    {
      name: "Heathrow Airport",
      code: "LHR",
      city: "London",
      country: "United Kingdom",
    },
    {
      name: "Singapore Changi Airport",
      code: "SIN",
      city: "Singapore",
      country: "Singapore",
    },
    {
      name: "Los Angeles International Airport",
      code: "LAX",
      city: "Los Angeles",
      country: "United States",
    },
    {
      name: "Beijing Capital International Airport",
      code: "PEK",
      city: "Beijing",
      country: "China",
    },
    {
      name: "Sydney Kingsford Smith International Airport",
      code: "SYD",
      city: "Sydney",
      country: "Australia",
    },
    {
      name: "Tokyo Haneda Airport",
      code: "HND",
      city: "Tokyo",
      country: "Japan",
    },
  ],
};

export default function Home() {
  const [formdata, setFormData] = useState({
    from: "HND",
    to: "DXB",
    departure: "23/9/2024",
    arrival: "31/9/2024",
  });

  function setInfo(key: string) {
    return function <T>(info: T) {
      setFormData((formdata) => ({ ...formdata, [key]: info }));
    };
  }

  function handleInterChange() {
    setFormData((fdata) => ({ ...fdata, from: fdata.to, to: fdata.from }));
  }

  return (
    <div className="flex min-h-screen px-[120px]">
      <div className="relative px-[72px] pt-[106px] w-full space-y-8 h-fit flex flex-col items-center">
        <svg
          className="absolute w-fit h-full top-0 right-0 -translate-x-[68px]"
          viewBox="0 0 1 100"
          xmlns="http://www.w3.org/2000/svg"
          id="line"
        >
          <line
            strokeDasharray="2"
            strokeWidth={0.5}
            x1="0"
            y1="0"
            x2="0"
            y2="100"
            stroke="#E6E8EB"
          />
        </svg>
        <svg
          className="absolute w-fit h-full top-0 left-0 -translate-y-8 translate-x-[72px]"
          viewBox="0 0 1 100"
          xmlns="http://www.w3.org/2000/svg"
          id="line"
        >
          <line
            strokeDasharray="2"
            strokeWidth={0.5}
            x1="0"
            y1="0"
            x2="0"
            y2="100"
            stroke="#E6E8EB"
          />
        </svg>
        <h1 className="text-3xl w-fit text-[#000C0B] text-center relative">
          <svg
            className="absolute w-fit h-[400px] top-0 left-0 -translate-y-[calc(75%+25px)] -translate-x-6"
            viewBox="0 0 1 100"
            xmlns="http://www.w3.org/2000/svg"
            id="line"
          >
            <line
              strokeDasharray="2"
              strokeWidth={0.5}
              x1="0"
              y1="0"
              x2="0"
              y2="100"
              stroke="#E6E8EB"
            />
          </svg>
          <svg
            className="absolute w-fit h-[400px] top-0 left-0 -translate-y-[calc(75%+25px)] -translate-x-1"
            viewBox="0 0 1 100"
            xmlns="http://www.w3.org/2000/svg"
            id="line"
          >
            <line
              strokeDasharray="2"
              strokeWidth={0.5}
              x1="0"
              y1="0"
              x2="0"
              y2="100"
              stroke="#E6E8EB5E"
            />
          </svg>
          <svg
            className="absolute w-fit h-[400px] top-0 right-0 -translate-y-[calc(75%+25px)] translate-x-1"
            viewBox="0 0 1 100"
            xmlns="http://www.w3.org/2000/svg"
            id="line"
          >
            <line
              strokeDasharray="2"
              strokeWidth={0.5}
              x1="0"
              y1="0"
              x2="0"
              y2="100"
              stroke="#E6E8EB"
            />
          </svg>
          <svg
            className="absolute w-fit h-[400px] top-0 right-0 -translate-y-[calc(75%+25px)] translate-x-6"
            viewBox="0 0 1 100"
            xmlns="http://www.w3.org/2000/svg"
            id="line"
          >
            <line
              strokeDasharray="2"
              strokeWidth={0.5}
              x1="0"
              y1="0"
              x2="0"
              y2="100"
              stroke="#E6E8EB5E"
            />
          </svg>
          Good afternoon, Brian
        </h1>
        <div className="shadow-md rounded-xl w-full min-h-64 border px-7 py-6 space-y-9">
          <div className="wrapper space-y-6">
            <div className="heading">
              <div className="w-32 h-9 bg-[#F5F7FA] rounded-md text-center leading-[36px] font-">
                Flights
              </div>
            </div>
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
                  label="Departure"
                  setInfo={setInfo("departure")}
                  defaultValue={formdata.departure}
                />
                <SearchCaledar
                  defaultValue={formdata.arrival}
                  label="Arrival"
                  setInfo={setInfo("arrival")}
                />
              </div>
            </div>
          </div>
          <div className="footer flex justify-end">
            <Link
              href={`/search_flights?${Object.keys(formdata)
                .map(
                  (key) =>
                    `${key}=${encodeURIComponent(formdata[key as keyof typeof formdata])}`
                )
                .join("&")}`}
            >
              <button className="bg-[rgb(0,62,57)] hover:bg-[#003E39] text-white px-14 py-4 flex gap-x-3 rounded-[7px]">
                <Search className="mt-1 h-4 w-4" />
                <div>Search flights</div>
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
