import { createContext, useContext, useReducer } from "react";

const RecordFormContext = createContext();
const initialState = {
  moneyType: "outcome",
  category: "",
  amount: null,
  remark: "",
};

function reducer(state, action) {
  switch (action.type) {
    case "set_moneyType":
      return { ...state, moneyType: action.payload };
    case "set_category":
      return { ...state, category: action.payload };
    case "set_amount":
      return { ...state, amount: action.payload };
    case "set_remark":
      return { ...state, remark: action.payload };
    default:
      throw new Error("Unknow type");
  }
}

function RecordFormContextProvider({ children }) {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <RecordFormContext.Provider
      value={{
        state,
        dispatch,
      }}
    >
      {children}
    </RecordFormContext.Provider>
  );
}

function useRecordFormContext() {
  const context = useContext(RecordFormContext);
  if (context === undefined || null)
    throw new Error("FormContext was used outside the Provider");
  return context;
}

// eslint-disable-next-line react-refresh/only-export-components
export { RecordFormContextProvider, useRecordFormContext };
