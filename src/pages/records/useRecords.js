import { useQuery } from "@tanstack/react-query";
import { getRecordsByMonth } from "../../services/apiRecords";

export function useRecords({ month, year }) {
  const {
    data: records,
    error,
    isLoading,
  } = useQuery({
    queryKey: ["records"],
    queryFn: () => getRecordsByMonth({ month, year }),
  });
  return { records, error, isLoading };
}
