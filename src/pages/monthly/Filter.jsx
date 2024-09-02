function Filter({ sortBy, setSortBy }) {
  return (
    <div className="flex h-[3rem] w-[16rem] justify-center gap-0 rounded-full border-[0.1rem] border-black text-2xl font-normal">
      <button
        className={`w-[9rem] rounded-l-full ${sortBy === "recent" ? "bg-yellow-300" : ""} `}
        onClick={() => setSortBy("recent")}
      >
        Rencent
      </button>
      <button
        className={`w-[9rem] rounded-r-full ${sortBy === "amount" ? "bg-yellow-300" : ""}`}
        onClick={() => setSortBy("amount")}
      >
        Amount
      </button>
    </div>
  );
}

export default Filter;
