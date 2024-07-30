function HeaderButtons() {
  const style = "w-40 text-center hover:bg-yellow-300 rounded-full font-bold";
  function handleOutcome(e) {
    e.preventDefault();
  }
  function handleIncome(e) {
    e.preventDefault();
  }
  return (
    <>
      <li className={style}>
        <button onClick={handleOutcome}>Outcome</button>
      </li>
      <li className={style}>
        <button onClick={handleIncome}>Income</button>
      </li>
    </>
  );
}

export default HeaderButtons;
