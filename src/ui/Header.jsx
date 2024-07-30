import HeaderButtons from "../features/Records/HeaderButtons";

function Header() {
  return (
    <header className="relative flex justify-center py-8 shadow-md">
      <button className="absolute left-4 self-center">ham</button>
      <ul className="flex gap-0 rounded-full border-[0.2rem] border-black text-2xl">
        <HeaderButtons />
      </ul>
    </header>
  );
}

export default Header;
