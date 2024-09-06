import { useMutation, useQueryClient } from "@tanstack/react-query";
import { createCategory as createCategoryApi } from "../../services/apiCategories";
import toast from "react-hot-toast";

export function useCreateCategory() {
  const queryClient = useQueryClient();
  const { mutate: createCategory, isPending: isCreatingCategory } = useMutation(
    {
      mutationFn: (newCategory) => createCategoryApi(newCategory),
      onSuccess: () => {
        toast.success("New category successfully created");
        queryClient.invalidateQueries({
          queryKey: ["categories"],
        });
      },
      onError: (err) => toast.error(err.message),
    },
  );
  return { createCategory, isCreatingCategory };
}
