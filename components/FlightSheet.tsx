import { Clock } from "lucide-react";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
} from "@/components/ui/sheet";
import { Separator } from "./ui/separator";
import { useEffect, useState } from "react";
import { Skeleton } from "./ui/skeleton";

export function FlightDetails() {
  return (
    <>
      <div id="main">
        <div className="space-y-[9px] relative">
          <svg
            className="absolute h-[calc(100%+10px)] translate-y-6 translate-x-2"
            viewBox="0 0 1 100"
            xmlns="http://www.w3.org/2000/svg"
            id="line"
          >
            <line
              x1="0"
              y1="0"
              x2="0"
              y2="100%"
              strokeWidth={2}
              stroke="black"
            />
          </svg>
          <div className="flex items-center relative">
            <span>
              <div
                id="ball"
                className="w-4 h-4 border-2 border-black rounded-full"
              ></div>
            </span>
            <span className="ml-3 text-xs font-normal text-[#787B80]">
              Sat 28 Sept • 2:15
            </span>
          </div>
          <div className="flex items-center">
            <span className="ml-7 text-sm">
              DXB • Dubai International Airport
            </span>
          </div>
        </div>
        <div className="flex justify-end -mt-2">
          <div className="flex gap-x-[14px]">
            <div className="border h-fit p-1 rounded-md">
              <img
                className="max-w-full w-[28px]"
                src="https://s3-alpha-sig.figma.com/img/ea70/b280/dfe3360521722410b57f9f5917445a6f?Expires=1729468800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=SNGYlBMh3nww5FNvKrNg5~L32TsVlY9Ko9hiAIjgBQuFr~g2Kot7W17x6HlKLKqNg2rXLd6NGafMaTlPz-UyQnE0W8ribMAbhAQB6ABL7rce2wIuJpFP3kSesPxeaVoKiV8cygczQVI2UbgZRrPBLDBCX8JRpPWVHB4~Ig6-4hlF~u3-g~P6ZyTSn1gzg2nRyzGU0-KyCunskcCRmZISjbcgCIHBezhzcAEGZpTkBzntlGqGpUMaUpqtw0r0EKYOQ1XO~o1Cse~S9ZPIcgHdFv5X20SX7v8n6CypsYIa-JfeP3ZJYIDdqPWCCW0eEEizdNOr-UViG~~4ivjwlhMlHQ__"
                alt=""
              />
            </div>
            <div className="flex flex-col text-[#484A4D] text-xs">
              <span>Saudi Arabian Airlines • SV553</span>
              <span>Economy • A330</span>
              <span>Flight time 3h 45m</span>
            </div>
          </div>
        </div>
        <div className="space-y-[9px]">
          <div className="flex items-center">
            <span>
              <div
                id="ball"
                className="w-4 h-4 border-2 border-black rounded-full"
              ></div>
            </span>
            <span className="ml-3 text-xs font-normal text-[#787B80]">
              Sat 28 Sept • 2:15
            </span>
          </div>
          <div className="flex items-center">
            <span className="ml-7 text-sm">
              DXB • Dubai International Airport
            </span>
          </div>
        </div>
        {/* Layout Over */}
        <div className="h-28 w-full relative text-sm text-[#787B80] font-normal flex gap-x-[9px] items-center px-8jkd">
          <svg
            className="h-[calc(100%+20px)] -translate-y-[8px] translate-x-2"
            viewBox="0 0 1 100"
            xmlns="http://www.w3.org/2000/svg"
            id="line"
          >
            <line
              strokeDasharray="2"
              x1="0"
              y1="0"
              x2="0"
              y2="100"
              stroke="black"
            />
          </svg>
          <Clock className="ml-8" size={14} />
          <span>Layover 2h 25m</span>
        </div>
        <div className="space-y-[9px] relative">
          <svg
            className="absolute h-[calc(100%+10px)] translate-y-6 translate-x-2"
            viewBox="0 0 1 100"
            xmlns="http://www.w3.org/2000/svg"
            id="line"
          >
            <line
              x1="0"
              y1="0"
              x2="0"
              y2="100%"
              strokeWidth={2}
              stroke="black"
            />
          </svg>
          <div className="flex items-center">
            <span>
              <div className="w-4 h-4 border-2 border-black rounded-full"></div>
            </span>
            <span className="ml-3 text-xs font-normal text-[#787B80]">
              Sat 28 Sept • 2:15
            </span>
          </div>
          <div className="flex items-center">
            <span className="ml-7 text-sm">
              DXB • Dubai International Airport
            </span>
          </div>
        </div>
        <div className="flex justify-end -mt-2">
          <div className="flex gap-x-[14px]">
            <div className="border h-fit p-1 rounded-md">
              <img
                className="max-w-full w-[28px]"
                src="https://s3-alpha-sig.figma.com/img/ea70/b280/dfe3360521722410b57f9f5917445a6f?Expires=1729468800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=SNGYlBMh3nww5FNvKrNg5~L32TsVlY9Ko9hiAIjgBQuFr~g2Kot7W17x6HlKLKqNg2rXLd6NGafMaTlPz-UyQnE0W8ribMAbhAQB6ABL7rce2wIuJpFP3kSesPxeaVoKiV8cygczQVI2UbgZRrPBLDBCX8JRpPWVHB4~Ig6-4hlF~u3-g~P6ZyTSn1gzg2nRyzGU0-KyCunskcCRmZISjbcgCIHBezhzcAEGZpTkBzntlGqGpUMaUpqtw0r0EKYOQ1XO~o1Cse~S9ZPIcgHdFv5X20SX7v8n6CypsYIa-JfeP3ZJYIDdqPWCCW0eEEizdNOr-UViG~~4ivjwlhMlHQ__"
                alt=""
              />
            </div>
            <div className="flex flex-col text-[#484A4D] text-xs">
              <span>Saudi Arabian Airlines • SV553</span>
              <span>Economy • A330</span>
              <span>Flight time 3h 45m</span>
            </div>
          </div>
        </div>
        <div className="space-y-[9px]">
          <div className="flex items-center">
            <span>
              <div className="w-4 h-4 border-2 border-black rounded-full"></div>
            </span>
            <span className="ml-3 text-xs font-normal text-[#787B80]">
              Sat 28 Sept • 2:15
            </span>
          </div>
          <div className="flex items-center">
            <span className="ml-7 text-sm">
              DXB • Dubai International Airport
            </span>
          </div>
        </div>
      </div>
    </>
  );
}

export function FlightDetailsLoading() {
  return (
    <div id="main">
      <div className="space-y-[9px] relative">
        <svg
          className="absolute h-[calc(100%+10px)] translate-y-6 translate-x-2"
          viewBox="0 0 1 100"
          xmlns="http://www.w3.org/2000/svg"
          id="line"
        >
          <line x1="0" y1="0" x2="0" y2="100%" strokeWidth={2} stroke="black" />
        </svg>
        <div className="flex items-center relative">
          <span>
            <div
              id="ball"
              className="w-4 h-4 border-2 border-black rounded-full"
            ></div>
          </span>
          <span className="ml-3 text-xs font-normal text-[#787B80]">
            <Skeleton className="h-4 w-[250px]" />
          </span>
        </div>
        <div className="flex items-center">
          <span className="ml-7 text-sm">
            <Skeleton className="h-4 w-[180px]" />
          </span>
        </div>
      </div>
      <div className="flex justify-end -mt-2">
        <div className="flex gap-x-[14px]">
          <div className="">
            <Skeleton className="h-[28px] w-[28px]" />
          </div>
          <div className="flex flex-col text-[#484A4D] text-xs gap-y-2">
            <span>
              <Skeleton className="h-4 w-[100px]" />
            </span>
            <span>
              <Skeleton className="h-4 w-[70px]" />
            </span>
            <span>
              <Skeleton className="h-4 w-[50px]" />
            </span>
          </div>
        </div>
      </div>
      <div className="space-y-[9px] relative">
        <svg
          className="absolute h-[calc(100%+10px)] translate-y-6 translate-x-2"
          viewBox="0 0 1 100"
          xmlns="http://www.w3.org/2000/svg"
          id="line"
        >
          <line x1="0" y1="0" x2="0" y2="100%" strokeWidth={2} stroke="black" />
        </svg>
        <div className="flex items-center relative">
          <span>
            <div
              id="ball"
              className="w-4 h-4 border-2 border-black rounded-full"
            ></div>
          </span>
          <span className="ml-3 text-xs font-normal text-[#787B80]">
            <Skeleton className="h-4 w-[250px]" />
          </span>
        </div>
        <div className="flex items-center">
          <span className="ml-7 text-sm">
            <Skeleton className="h-4 w-[180px]" />
          </span>
        </div>
      </div>
      {/* Layout Over */}
      <div className="h-28 w-full relative text-sm text-[#787B80] font-normal flex gap-x-[9px] items-center px-8jkd">
        <svg
          className="h-[calc(100%+20px)] -translate-y-[8px] translate-x-2"
          viewBox="0 0 1 100"
          xmlns="http://www.w3.org/2000/svg"
          id="line"
        >
          <line
            strokeDasharray="2"
            x1="0"
            y1="0"
            x2="0"
            y2="100"
            stroke="black"
          />
        </svg>
        <Clock className="ml-8" size={14} />
        <span>
          <Skeleton className="h-4 w-[250px]" />
        </span>
      </div>
      <div className="mt-3 space-y-3">
        <Skeleton className="h-12 w-full" />
        <Skeleton className="h-12 w-full" />
        <Skeleton className="h-12 w-full" />
      </div>
    </div>
  );
}

export function FlightDetailsSheet({
  flight_id,
  isOpened,
  setOpen,
}: {
  flight_id: string;
  isOpened: boolean;
  setOpen: (e: boolean) => void;
}) {
  const [isLoading, setLoading] = useState(true);

  useEffect(() => {
    let timer;
    if (isLoading === true) {
      timer = setTimeout(() => setLoading(false), 1000);
    }
    if (timer) return () => clearTimeout(timer);
  });

  useEffect(() => {
    if (isLoading === false) setLoading(true);
  }, [flight_id]);

  return (
    <Sheet open={isOpened} onOpenChange={setOpen}>
      <SheetContent
        aria-describedby="flight details sheet"
        className="md:m-5 rounded-xl overflow-x-scroll md:overflow-x-clip overflow-y-auto h-[calc(100%-2.5rem)] min-w-full md:min-w-[50vw] box-border space-y-7"
      >
        <SheetHeader>
          <SheetTitle className="text-xl font-medium">
            Flight details
          </SheetTitle>
        </SheetHeader>
        <Separator />
        {isLoading ? <FlightDetailsLoading /> : <FlightDetails />}
      </SheetContent>
    </Sheet>
  );
}
