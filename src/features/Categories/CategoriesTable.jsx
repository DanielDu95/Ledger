import { IconContext } from "react-icons";
import { HiArchive } from "react-icons/hi";
import { IoCarOutline, IoFastFoodOutline } from "react-icons/io5";
import { LiaMoneyCheckAltSolid } from "react-icons/lia";
import { PiHouseLine, PiShoppingCartSimple } from "react-icons/pi";

function CategoriesTable() {
  return (
    <IconContext.Provider
      value={{
        color: "#868e96",
        size: "40px",
      }}
    >
      <ul className="grid grid-cols-4 content-center justify-center gap-y-14">
        <li className="flex cursor-pointer flex-col items-center justify-center gap-3">
          <p>
            <IoFastFoodOutline />
          </p>
          <p className="font-bold text-gray-400">Food</p>
        </li>
        <li className="flex cursor-pointer flex-col items-center justify-center gap-3">
          <PiShoppingCartSimple />
          <p className="font-bold text-gray-400">Shopping</p>
        </li>
        <li className="flex cursor-pointer flex-col items-center justify-center gap-3">
          <LiaMoneyCheckAltSolid />
          <p className="font-bold text-gray-400">Transfer</p>
        </li>
        <li className="flex cursor-pointer flex-col items-center justify-center gap-3">
          <PiHouseLine />
          <p className="font-bold text-gray-400">House</p>
        </li>
        <li className="flex cursor-pointer flex-col items-center justify-center gap-3">
          <IoCarOutline />
          <p className="font-bold text-gray-400">Car</p>
        </li>
        <li className="flex cursor-pointer flex-col items-center justify-center gap-3">
          <HiArchive />
          <p className="font-bold text-gray-400">Food</p>
        </li>
        <li className="flex cursor-pointer flex-col items-center justify-center gap-3">
          <p>
            <IoFastFoodOutline />
          </p>
          <p className="font-bold text-gray-400">Food</p>
        </li>
        <li className="flex cursor-pointer flex-col items-center justify-center gap-3">
          <PiShoppingCartSimple />
          <p className="font-bold text-gray-400">Shopping</p>
        </li>
        <li className="flex cursor-pointer flex-col items-center justify-center gap-3">
          <LiaMoneyCheckAltSolid />
          <p className="font-bold text-gray-400">Transfer</p>
        </li>
        <li className="flex cursor-pointer flex-col items-center justify-center gap-3">
          <PiHouseLine />
          <p className="font-bold text-gray-400">House</p>
        </li>
        <li className="flex cursor-pointer flex-col items-center justify-center gap-3">
          <IoCarOutline />
          <p className="font-bold text-gray-400">Car</p>
        </li>
        <li className="flex cursor-pointer flex-col items-center justify-center gap-3">
          <HiArchive />
          <p className="font-bold text-gray-400">Food</p>
        </li>
        <li className="flex cursor-pointer flex-col items-center justify-center gap-3">
          <LiaMoneyCheckAltSolid />
          <p className="font-bold text-gray-400">Transfer</p>
        </li>
        <li className="flex cursor-pointer flex-col items-center justify-center gap-3">
          <PiHouseLine />
          <p className="font-bold text-gray-400">House</p>
        </li>
        <li className="flex cursor-pointer flex-col items-center justify-center gap-3">
          <IoCarOutline />
          <p className="font-bold text-gray-400">Car</p>
        </li>
        <li className="flex cursor-pointer flex-col items-center justify-center gap-3">
          <HiArchive />
          <p className="font-bold text-gray-400">Food</p>
        </li>
      </ul>
    </IconContext.Provider>
  );
}

export default CategoriesTable;
