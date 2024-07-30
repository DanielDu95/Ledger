import { IconContext } from "react-icons";
import { HiArchive } from "react-icons/hi";
import { IoCarOutline, IoFastFoodOutline } from "react-icons/io5";
import { LiaMoneyCheckAltSolid } from "react-icons/lia";
import { PiHouseLine, PiShoppingCartSimple } from "react-icons/pi";

function CategoriesTable() {
  return (
    <IconContext.Provider value={{ color: "#868e96", size: "50px" }}>
      <ul className="grid grid-cols-4 content-center justify-center gap-y-14">
        <li>
          <IoFastFoodOutline />
        </li>
        <li>
          <PiShoppingCartSimple />
        </li>
        <li>
          <LiaMoneyCheckAltSolid />
        </li>
        <li>
          <PiHouseLine />
        </li>
        <li>
          <IoCarOutline />
        </li>
        <li>
          <HiArchive />
        </li>
      </ul>
    </IconContext.Provider>
  );
}

export default CategoriesTable;
