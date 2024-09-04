import { HiOutlineDotsVertical } from "react-icons/hi";
import { formatCurrency } from "../../utils/helper";
import Modal from "../../ui/Modal";
import RecordDetail from "./RecordDetail";
import { format } from "date-fns";

function RecordRow({ record }) {
  const formatedDate = format(record.created_at, "MM/dd");

  return (
    <>
      <li className="grid w-[100%] grid-cols-[1fr_2fr_3fr_0.5fr] px-3 py-5 text-center shadow">
        <div>{formatedDate}</div>
        <div>
          {/* <span>icon</span> */}
          <span>{record.category.toUpperCase()}</span>
        </div>

        <div>{`${record.moneyType === "income" ? "+" : "-"}${formatCurrency(record.amount)}`}</div>
        <Modal>
          <Modal.Open opens="detail">
            <button>
              <HiOutlineDotsVertical />
            </button>
          </Modal.Open>
          <Modal.Window name="detail">
            <RecordDetail remark={record.remark} id={record.id} />
          </Modal.Window>
        </Modal>
      </li>
      <Modal></Modal>
    </>
  );
}

export default RecordRow;
