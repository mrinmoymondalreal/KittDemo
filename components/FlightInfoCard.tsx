import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { flight_info } from "@/lib/types";
import { cn } from "@/lib/utils";

interface FilghtInfoProps {
  flight1: flight_info;
  flight2: flight_info;
  currency: string;
  price: string;
  onClick: (e?: boolean) => void;
}

export default function FlightsInfoCard({
  flight1,
  flight2,
  currency,
  price,
  onClick,
}: FilghtInfoProps) {
  return (
    <div
      onClick={() => onClick()}
      className="w-full border rounded-[7px] flex bg-white hover:bg-[#F5F7FA]"
    >
      <div
        className={cn(
          "px-8 py-[25px] space-y-10 flex-[5] border-r",
          [flight1, flight2].every((e) => e.date) && "space-y-4"
        )}
      >
        {[flight1, flight2].map(
          (
            {
              name,
              duration,
              route,
              stop_count,
              stops,
              departure_time,
              arrival_time,
              date,
              badge,
              flight_image,
            },
            i
          ) => {
            return (
              <div className="space-y-2" key={i}>
                {date && (
                  <span className="text-[#787B80] text-[13px]">{date}</span>
                )}
                <div className="flex items-center text-lg">
                  <div className="logo">
                    {Array.isArray(flight_image) ? (
                      <div className="space-y-[-50%] -translate-x-2">
                        <div className="border box-border bg-white p-1 rounded-md">
                          <img
                            src={flight_image[0]}
                            className="max-w-full w-[30px]"
                            alt=""
                          />
                        </div>
                        <div className="border box-border bg-white p-1 rounded-md translate-x-1/2">
                          <img
                            src={flight_image[1]}
                            className="max-w-full w-[30px]"
                            alt=""
                          />
                        </div>
                      </div>
                    ) : (
                      <img
                        src={flight_image}
                        className="max-w-full w-[42px]"
                        alt=""
                      />
                    )}
                  </div>
                  <div className="name ml-6 flex flex-col justify-between flex-[2]">
                    <span className="text-sm font-normal text-[#787B80]">
                      {name}
                    </span>
                    <span className="flex items-start">
                      {departure_time} - {arrival_time}
                      <Badge
                        variant="outline"
                        className="border-none font-medium text-[#962828]"
                      >
                        {badge}
                      </Badge>
                    </span>
                  </div>
                  <div className="time flex-1 flex flex-col justify-between">
                    <span className="text-sm font-normal text-[#787B80]">
                      {route}
                    </span>
                    <span>{duration}</span>
                  </div>
                  <div className="stop flex-[0.5] flex flex-col justify-between">
                    <span className="text-sm font-normal text-[#787B80] whitespace line-clamp-1">
                      {stops}
                    </span>
                    <span>{stop_count}</span>
                  </div>
                </div>
              </div>
            );
          }
        )}
      </div>
      <div className="p-4 flex-1 flex flex-col justify-end">
        <span className="text-sm text-[#787B80] font-normal">from</span>
        <span className="text-[#001F1D] mt-1 text-xl">
          {currency} {price}
        </span>
        <Button className="w-full mt-4 bg-[#003E39] text-white">Select</Button>
      </div>
    </div>
  );
}
