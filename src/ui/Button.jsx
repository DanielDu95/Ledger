function Button({ children, type }) {
  let className = "border-red-700 border";
  if (type === "primary") className = className + " text-5xl";
  return <button className={className}>{children}</button>;
}

export default Button;
