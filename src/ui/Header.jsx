import { CiMenuBurger } from "react-icons/ci";
import Nav from "./Nav";
import { useState } from "react";

function Header({ children }) {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="relative flex h-[9.4rem] justify-center py-8 shadow-md">
      <button
        onClick={() => setIsOpen((isOpen) => !isOpen)}
        type="button"
        className="absolute left-4 self-center"
      >
        <CiMenuBurger style={{ fontSize: "2.4rem" }} />
      </button>
      {children}
      <Nav isOpen={isOpen} setIsOpen={setIsOpen} />
    </div>
  );
}

export default Header;
