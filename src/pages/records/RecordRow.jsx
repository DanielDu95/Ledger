import { HiOutlineDotsVertical } from "react-icons/hi";
import { formatCurrency } from "../../utils/helper";
import Modal from "../../ui/Modal";
import RecordDetail from "./RecordDetail";

function RecordRow({ record }) {
  const month = new Date(record.created_at).getMonth() + 1;
  const date = new Date(record.created_at).getDate();
  return (
    <>
      <li className="grid w-[100%] grid-cols-[1fr_2fr_3fr_0.5fr] py-5 text-center shadow">
        <div>{`${month}/${date}`}</div>
        <div>
          <span>icon</span>
          <span>{record.category.toUpperCase()}</span>
        </div>

        <div>{`${record.moneyType === "income" ? "+" : "-"}${formatCurrency(record.amount)}`}</div>
        <Modal>
          <Modal.Open opens="something">
            <button>
              <HiOutlineDotsVertical />
            </button>
          </Modal.Open>
          <Modal.Window name="something">
            <RecordDetail remark={record.remark} />
          </Modal.Window>
        </Modal>
      </li>
      <Modal></Modal>
    </>
  );
}

export default RecordRow;
