"use client";

import LoadingKite from "@/assets/loading_kite.gif";
import LoadingCircle from "@/assets/loading_circle.gif";
import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";
import { Skeleton } from "@/components/ui/skeleton";
import { CircleCheckIcon } from "lucide-react";

function Loading() {
  const [count, setCount] = useState(0);
  useEffect(() => {
    let time = setTimeout(() => setCount((c) => (c + 1 < 3 ? c + 1 : c)), 1000);
    return () => clearTimeout(time);
  }, [count]);

  return (
    <div className="w-[323px] bg-white rounded-2xl border flex flex-col justify-center items-center pb-7 shadow-lg">
      <img src={LoadingKite.src} />
      <div className="flex flex-col gap-y-4">
        <div className="flex gap-x-4 items-center">
          <span>
            {count > 0 ? (
              <CircleCheckIcon size={18} color="#096B2B" />
            ) : (
              <img
                src={LoadingCircle.src}
                className={cn(
                  "opacity-0 max-w-full w-[18px]",
                  count == 0 && "opacity-100"
                )}
              />
            )}
          </span>
          <span
            className={cn(
              "text-[#C9CACC] text-lg",
              count >= 0 && "text-[#787B80]"
            )}
          >
            Searching 400+ flights
          </span>
        </div>
        <div className="flex gap-x-4 items-center">
          <span>
            {count > 1 ? (
              <CircleCheckIcon size={18} color="#096B2B" />
            ) : (
              <img
                src={LoadingCircle.src}
                className={cn(
                  "opacity-0 max-w-full w-[18px]",
                  count == 1 && "opacity-100"
                )}
              />
            )}
          </span>
          <span
            className={cn(
              "text-[#C9CACC] text-lg",
              count >= 1 && "text-[#787B80]"
            )}
          >
            Attaching Company Rules
          </span>
        </div>
        <div className="flex gap-x-4 items-center">
          <span>
            {count > 2 ? (
              <CircleCheckIcon size={18} color="#096B2B" />
            ) : (
              <img
                src={LoadingCircle.src}
                className={cn(
                  "opacity-0 max-w-full w-[18px]",
                  count == 2 && "opacity-100"
                )}
              />
            )}
          </span>
          <span
            className={cn(
              "text-[#C9CACC] text-lg",
              count >= 2 && "text-[#787B80]"
            )}
          >
            Serving best results
          </span>
        </div>
      </div>
    </div>
  );
}

function SkeletonLoading() {
  return (
    <div className="w-full border rounded-[7px] px-8 py-[25px] space-y-10">
      <div className="flex gap-x-6">
        <Skeleton className="h-[42px] w-[42px] rounded-sm" />
        <div className="space-y-2">
          <Skeleton className="h-4 w-[250px]" />
          <Skeleton className="h-4 w-[200px]" />
        </div>
      </div>
      <div className="flex gap-x-6">
        <Skeleton className="h-[42px] w-[42px] rounded-sm" />
        <div className="space-y-2">
          <Skeleton className="h-4 w-[250px]" />
          <div className="flex gap-x-2">
            <Skeleton className="h-4 w-[200px]" />
            <Skeleton className="h-4 w-[200px]" />
            <Skeleton className="h-4 w-[200px]" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default function LoadingPage() {
  return (
    <>
      <div className="absolute pt-12 z-50 left-1/2 -translate-x-1/2">
        <Loading />
      </div>
      <SkeletonLoading />
      <SkeletonLoading />
      <SkeletonLoading />
    </>
  );
}
