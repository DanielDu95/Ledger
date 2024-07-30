import CategoriesTable from "../features/Categories/CategoriesTable";
import CreateRecordForm from "../features/Records/CreateRecordForm";
import SubmmitButton from "../features/Records/SubmmitButton";
import AmountAndRemark from "../ui/AmountAndRemark";
import CategoriesContainer from "../ui/CategoriesContainer";
import Header from "../ui/Header";
import Row from "../ui/Row";

function Dashboard() {
  return (
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
  );
}

export default Dashboard;
