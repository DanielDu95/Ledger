import { useMutation, useQueryClient } from "@tanstack/react-query";
import { deleteRecord as apiDeleteRecord } from "../../services/apiRecords";
import toast from "react-hot-toast";

export function useDeleteRecord() {
  const queryClient = useQueryClient();
  const { mutate: deleteRecord, isLoading: isDeletingRecord } = useMutation({
    mutationFn: apiDeleteRecord,
    onSuccess: () => {
      toast.success("Record is successfully deleted");
      queryClient.invalidateQueries("records");
    },
    onError: () => {
      toast.error("There was an error while deleting the booking");
    },
  });
  return { deleteRecord, isDeletingRecord };
}
