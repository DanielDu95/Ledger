import { createContext, useContext, useState } from "react";

const RecordsContext = createContext();

function RecordsContextProvider({ children }) {
  const [timePeriod, setTimePeriod] = useState({
    month: new Date().getMonth() + 1,
    year: new Date().getFullYear(),
  });
  const [visibleLine, setVisibleLine] = useState({
    income: true,
    outcome: true,
    balance: true,
  });
  return (
    <RecordsContext.Provider
      value={{ timePeriod, setTimePeriod, visibleLine, setVisibleLine }}
    >
      {children}
    </RecordsContext.Provider>
  );
}

function useRecordsContext() {
  const context = useContext(RecordsContext);
  if (context === undefined || null)
    throw new Error("RecordsContext was used outside the Provider");
  return context;
}

// eslint-disable-next-line react-refresh/only-export-components
export { RecordsContextProvider, useRecordsContext };
