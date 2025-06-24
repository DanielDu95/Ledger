import { IconContext } from "react-icons";
// import { GiShuttlecock } from "react-icons/gi";
import * as Icons from "react-icons/io5";
import Category from "./Category";
import { useCategories } from "./useCategories";
import { useRecordFormContext } from "../../pages/dashboard/RecordFormContextProvider";
import { CiCirclePlus } from "react-icons/ci";
import Modal from "../../ui/Modal";
// import AddCategory from "./AddCategory";
import Spinner from "../../ui/Spinner";

// const fakeCategories = [
//   { id: 1, name: "food" },
//   { id: 2, name: "car" },
//   { id: 3, name: "house" },
//   { id: 4, name: "transfer" },
//   { id: 5, name: "shopping" },
//   { id: 6, name: "badminton" },
//   { id: 7, name: "social" },
//   { id: 8, name: "others" },
// ];
function CategoriesTable() {
  const { categories, isLoading } = useCategories();
  const { state } = useRecordFormContext();

  if (isLoading) return <Spinner />;
  // console.log(categories);

  // filter
  const filteredCategories = categories.filter(
    (category) => category.categoryType === state.moneyType,
  );

  // const categoryIcons = {
  //   food: IoFastFoodOutline,
  //   car: IoCarOutline,
  //   house: IoHomeOutline,
  //   transfer: IoCardOutline,
  //   transferFrom: IoCardOutline,
  //   shopping: IoCartOutline,
  //   badminton: GiShuttlecock,
  //   social: IoPeopleOutline,
  //   others: IoBookmarkOutline,
  //   salary: IoCashOutline,
  // };

  return (
    <IconContext.Provider
      value={{
        color: "#868e96",
        size: "45px",
      }}
    >
      <ul className="grid grid-cols-4 content-center justify-center gap-x-10 gap-y-20">
        {filteredCategories.map((category) => (
          <Category
            Icon={Icons[category.icon] || Icons.IoBookmarkOutline}
            key={category.id}
            label={category.name}
          />
        ))}

        <Modal.Open>
          <li
            className={`$ flex cursor-pointer flex-col items-center justify-center gap-3`}
            // onClick={() => dispatch({ type: "set_category", payload: label })}
          >
            <CiCirclePlus />
          </li>
        </Modal.Open>
      </ul>
    </IconContext.Provider>
  );
}

export default CategoriesTable;
