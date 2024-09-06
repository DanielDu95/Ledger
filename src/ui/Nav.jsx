import { NavLink } from "react-router-dom";
import { useOutsideClick } from "../hooks/useOutsideClick";
import { useLogout } from "../pages/login/useLogout";
import SpinnerMini from "./SpinnerMini";

function Nav({ isOpen, setIsOpen }) {
  const ref = useOutsideClick(() => setIsOpen(false));
  const { logout, isPending } = useLogout();

  const linkStyle =
    "w-[100%] border-b-2 flex justify-center py-6 text-center active:text-gray-700";

  if (!isOpen) return null;
  return (
    <nav
      ref={ref}
      className="absolute left-0 top-[9rem] z-10 flex w-[12rem] flex-col items-center justify-center rounded-lg border-2 border-gray-200 bg-white text-2xl font-semibold text-gray-500"
    >
      <NavLink className={linkStyle} to="/dashboard">
        <div>Dashboard</div>
      </NavLink>
      <NavLink className={linkStyle} to="/monthly">
        <div>Monthly</div>
      </NavLink>
      <NavLink className={linkStyle} to="/annual">
        <div>Annual</div>
      </NavLink>

      <button
        type="button"
        disabled={isPending}
        className={linkStyle}
        onClick={logout}
      >
        {isPending ? <SpinnerMini /> : "Logout"}
      </button>
    </nav>
  );
}

export default Nav;
