import * as Icons from "react-icons/io5";
function AddCategory() {
  return (
    <div>
      <input />
      <ul className="grid h-[24rem] grid-cols-4 overflow-y-auto">
        <li>
          <Icons.IoAccessibility />
        </li>
        <li>
          <Icons.IoAccessibility />
        </li>
        <li>
          <Icons.IoAccessibility />
        </li>
      </ul>
    </div>
  );
}

export default AddCategory;
