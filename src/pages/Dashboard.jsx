import CategoriesTable from "../features/Categories/CategoriesTable";
import CreateRecordForm from "../features/Records/CreateRecordForm";
import { RecordFormContextProvider } from "../features/Records/RecordFormContextProvider";

import SubmmitButton from "../features/Records/SubmmitButton";
import AmountAndRemark from "../ui/AmountAndRemark";
import CategoriesContainer from "../ui/CategoriesContainer";
import Header from "../ui/Header";
import Row from "../ui/Row";

function Dashboard() {
  return (
    <RecordFormContextProvider>
      <div className="flex h-lvh justify-center bg-cyan-100">
        <CreateRecordForm>
          <Header />
          <CategoriesContainer>
            <CategoriesTable />
          </CategoriesContainer>
          <AmountAndRemark />

          <Row>
            <SubmmitButton />
          </Row>
        </CreateRecordForm>
      </div>
    </RecordFormContextProvider>
  );
}

export default Dashboard;
