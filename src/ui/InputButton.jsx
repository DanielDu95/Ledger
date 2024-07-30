function InputButton({ type, defaultValue }) {
  let className =
    " px-2 py-3 w-40 hover:bg-yellow-300 avtive:hover:bg-orange-700";
  if (type === "headerButton") className = className + " text-2xl";
  return (
    <input type="button" defaultValue={defaultValue} className={className} />
  );
}

export default InputButton;
