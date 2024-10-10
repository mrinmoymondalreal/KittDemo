import {
  FlightPageCards,
  FlightPageSearch,
} from "@/components/FlightPageComponent";
import { formDataType } from "@/lib/types";

export default function Page({ searchParams }: { searchParams: formDataType }) {
  if (JSON.stringify(searchParams).trim() == "{}")
    searchParams = {
      from: "HND",
      to: "DXB",
      departure: "23/9/2024",
      arrival: "31/9/2024",
    };

  return (
    <>
      <FlightPageSearch params={searchParams} />
      <FlightPageCards />
    </>
  );
}
