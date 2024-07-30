function HeaderButtons() {
  const style =
    "w-40 h-20 text-center hover:bg-yellow-300  font-bold flex justify-center items-center";
  function handleOutcome(e) {
    e.preventDefault();
  }
  function handleIncome(e) {
    e.preventDefault();
  }
  return (
    <>
      <li className={style + " rounded-l-full"}>
        <button onClick={handleOutcome}>Outcome</button>
      </li>
      <li className={style + " rounded-r-full"}>
        <button onClick={handleIncome}>Income</button>
      </li>
    </>
  );
}

export default HeaderButtons;
