import { createContext, useContext, useState } from "react";

const RecordFormContext = createContext();

function RecordFormContextProvider({ children }) {
  const [type, setType] = useState("outcome");

  return (
    <RecordFormContext.Provider value={{ type: type, setType: setType }}>
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
