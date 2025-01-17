import { useQuery } from "@tanstack/react-query";
import { getBookings } from "../../services/apiBookings";
import { useSearchParams } from "react-router-dom";
export function useBookings() {
  const [searchParams] = useSearchParams();
  const statusValue = searchParams.get("status");

  const filter =
    !statusValue || statusValue === "all"
      ? null
      : { field: "status", value: statusValue };

  const {
    isLoading,
    data: bookings,
    error,
  } = useQuery({
    queryKey: ["bookings", filter],
    queryFn: () => getBookings({ filter }),
  });
  return { isLoading, bookings, error };
}
