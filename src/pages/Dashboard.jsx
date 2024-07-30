import CategoriesTable from "../features/Categories/CategoriesTable";
import CreateRecordForm from "../features/Records/CreateRecordForm";
import SubmmitButton from "../features/Records/SubmmitButton";
import AmountInput from "../ui/AmountInput";
import CategoriesContainer from "../ui/CategoriesContainer";
import Header from "../ui/Header";
import RemarkInput from "../ui/RemarkInput";
import Row from "../ui/Row";

function Dashboard() {
  return (
    <div className="flex h-lvh justify-center bg-cyan-100">
      <CreateRecordForm>
        <Header />
        <CategoriesContainer>
          <CategoriesTable />
        </CategoriesContainer>
        <Row>
          <AmountInput />
        </Row>
        <Row>
          <RemarkInput />
        </Row>

        <Row>
          <SubmmitButton />
        </Row>
      </CreateRecordForm>
    </div>
  );
}

export default Dashboard;
