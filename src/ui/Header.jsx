import { CiMenuBurger } from "react-icons/ci";

function Header({ children }) {
  return (
    <div className="relative flex h-[9.4rem] justify-center py-8 shadow-md">
      <button type="button" className="absolute left-4 self-center">
        <CiMenuBurger style={{ fontSize: "2.4rem" }} />
      </button>
      {children}
    </div>
  );
}

export default Header;
