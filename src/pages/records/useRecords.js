import { useQuery } from "@tanstack/react-query";
import { getRecords } from "../../services/apiRecords";

export function useRecords() {
  const {
    data: records,
    error,
    isLoading,
  } = useQuery({
    queryKey: ["records"],
    queryFn: getRecords,
  });
  return { records, error, isLoading };
}
