import CategoriesTable from "../../features/categories/CategoriesTable";
import AmountAndRemark from "../../ui/AmountAndRemark";
import CategoriesContainer from "../../ui/CategoriesContainer";
import Header from "../../ui/Header";
import Row from "../../ui/Row";
import CreateRecordForm from "./CreateRecordForm";
import HeaderButtons from "./HeaderButtons";
import { RecordFormContextProvider } from "./RecordFormContextProvider";
import SubmmitButton from "./SubmmitButton";

function Dashboard() {
  return (
    <RecordFormContextProvider>
      <div className="flex h-lvh justify-center bg-cyan-100">
        <CreateRecordForm>
          <Header>
            <HeaderButtons />
          </Header>
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
