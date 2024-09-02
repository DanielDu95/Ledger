import { useRecordFormContext } from "../../pages/dashboard/RecordFormContextProvider";

function Category({ Icon, label }) {
  const { state, dispatch } = useRecordFormContext();

  return (
    <li
      className={`$ flex cursor-pointer flex-col items-center justify-center gap-3`}
      onClick={() => dispatch({ type: "set_category", payload: label })}
    >
      <Icon
        style={{
          color: `${state.category === label ? "rgb(250 204 21 )" : ""}`,
        }}
      />
      <p
        className={`text-sm font-semibold text-gray-400 ${state.category === label ? "text-yellow-400" : ""}`}
      >
        {label[0].toUpperCase() + label.slice(1)}
      </p>
    </li>
  );
}

export default Category;
