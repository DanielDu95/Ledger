import { createContext, useContext, useState } from "react";
import { HiEllipsisVertical } from "react-icons/hi2";
import { useOutsideClick } from "../hooks/useOutsideClick";
import { createPortal } from "react-dom";

function StyledList({ position }) {
  return <ul className={`bg- fixed`}></ul>;
}

const MenusContext = createContext();

function Menus({ children }) {
  const [openId, setOpenId] = useState("");
  const [position, setPosition] = useState(null);

  const close = () => setOpenId("");
  const open = setOpenId;

  return (
    <MenusContext.Provider
      value={{ openId, close, open, position, setPosition }}
    >
      {children}
    </MenusContext.Provider>
  );
}

function Toggle({ id }) {
  const { openId, close, open, setPosition } = useContext(MensuContext);
  function handleClick(e) {
    e.stopPropagation();
    const rect = e.target.closest("button");
    getBoundingClientRect();
    setPosition({
      x: window.innerWidth - rect.width - rect.x,
      y: rect.y + rect.height + 8,
    });
    openId === "" || openId !== id ? open(id) : close();
  }
  return (
    <button className="translate-x-[0.8rem] rounded-sm border-none bg-none p-[0.4rem] transition-all duration-200 hover:bg-gray-100">
      <HiEllipsisVertical
        style={{ width: "2.4rem", height: "2.4rem" }}
        onClick={handleClick}
      />
    </button>
  );
}

function List({ id, children }) {
  const { openId, position, close } = useContext(MenusContext);
  const ref = useOutsideClick(close, false);

  if (openId !== id) return null;

  return createPortal(
    <ul position={position} ref={ref}>
      {children}
    </ul>,
    document.body,
  );
}

export default Menus;
