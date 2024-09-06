import { useMutation, useQueryClient } from "@tanstack/react-query";
import { addRecord as addRecordApi } from "../../services/apiRecords";
import toast from "react-hot-toast";

export function useAddRecord() {
  const queryClient = useQueryClient();
  const { mutate: addRecord, isPending } = useMutation({
    mutationFn: addRecordApi,
    onSuccess: () => {
      toast.success("New record successfully added");
      queryClient.invalidateQueries({
        queryKey: ["records"],
      });
    },
    onError: (err) => toast.error(err.message),
  });
  return { addRecord, isPending };
}
