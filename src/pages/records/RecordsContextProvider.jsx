import { createContext, useContext, useState } from "react";

const RecordsContext = createContext();

function RecordsContextProvider({ children }) {
  const [selectedMonthData, setSelectedMonthData] = useState({
    month: new Date().getMonth() + 1,
    year: new Date().getFullYear(),
  });
  return (
    <RecordsContext.Provider
      value={{ selectedMonthData, setSelectedMonthData }}
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
