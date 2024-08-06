import { CiMenuBurger } from "react-icons/ci";
import HeaderButtons from "../features/Records/HeaderButtons";

function Header() {
  return (
    <div className="relative flex justify-center py-8 shadow-md">
      <button type="button" className="absolute left-4 self-center">
        <CiMenuBurger style={{ fontSize: "2.4rem" }} />
      </button>
      <div className="flex gap-0 rounded-full border-[0.2rem] border-black text-2xl">
        <HeaderButtons />
      </div>
    </div>
  );
}

export default Header;
