import { useDeleteRecord } from "./useDeleteRecord";

function RecordDetail({ remark, id }) {
  const { deleteRecord, isDeletingRecord } = useDeleteRecord();

  return (
    <div className="w-[24rem]">
      <h2 className="my-1 text-3xl font-semibold text-blue-500">Remark</h2>
      <div className="p-4 text-3xl">{remark}</div>
      <div className="flex justify-end">
        <button
          disabled={isDeletingRecord}
          className="rounded-lg bg-red-500 px-8 py-4 font-semibold text-gray-50"
          onClick={() => deleteRecord(id)}
        >
          Delete
        </button>
      </div>
    </div>
  );
}

export default RecordDetail;
