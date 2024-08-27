import { useQuery } from "@tanstack/react-query";
import { getRecordsByTimePeriod } from "../../services/apiRecords";

export function useRecords(timePeriod) {
  const {
    data: records,
    error,
    isLoading,
  } = useQuery({
    queryKey: ["records", timePeriod],
    queryFn: () => getRecordsByTimePeriod(timePeriod),
  });
  return { records, error, isLoading };
}
