import { NavLink } from "react-router-dom";
import { useOutsideClick } from "../hooks/useOutsideClick";

function Nav({ isOpen, setIsOpen }) {
  const ref = useOutsideClick(() => setIsOpen(false));

  if (!isOpen) return null;
  return (
    <nav
      ref={ref}
      className="absolute left-0 top-[9rem] z-10 flex w-[12rem] flex-col items-center justify-center rounded-lg border-2 border-gray-200 bg-white text-3xl font-semibold text-gray-500"
    >
      <NavLink
        className="w-[100%] border-b-2 py-6 text-center active:text-gray-700"
        to="/dashboard"
      >
        <div>Dashboard</div>
      </NavLink>
      <NavLink
        className="w-[100%] border-b-2 px-10 py-6 text-center active:text-gray-700"
        to="/monthly"
      >
        <div>Monthly</div>
      </NavLink>
      <NavLink
        className="w-[100%] border-b-2 px-10 py-6 text-center active:text-gray-700"
        to="/annual"
      >
        <div>Annual</div>
      </NavLink>
    </nav>
  );
}

export default Nav;
