function AmountAndRemark() {
  return (
    <div className="mt-32 flex flex-col items-center justify-center gap-4 p-8">
      <div className="relative">
        <input
          className="h-20 rounded-full border-2 border-yellow-500 p-2 text-center text-3xl"
          defaultValue="amount"
        />
        <span className="absolute right-[-15%] top-[50%] translate-y-[-50%] justify-self-center p-3 text-4xl">
          💰
        </span>
      </div>
      <div className="relative">
        <input
          className="h-20 rounded-full border-2 border-yellow-500 p-2 text-center text-3xl"
          defaultValue="remark"
          maxLength={40}
        />
        <span className="absolute right-[-15%] top-[50%] translate-y-[-50%] justify-self-center p-3 text-4xl">
          📒
        </span>
      </div>
    </div>
  );
}

export default AmountAndRemark;
