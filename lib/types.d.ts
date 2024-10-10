export interface formDataType {
  from: string,
  to: string,
  departure: string,
  arrival: string,
}

export type flight_info = {
  name: string;
  duration: string;
  route: string;
  stop_count: string;
  stops: string;
  flight_image: string;
  departure_time: string;
  arrival_time: string;
  date?: string;
  badge?: string;
  flight_number: string;
  price: string;
};