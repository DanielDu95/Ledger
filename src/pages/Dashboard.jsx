import CategoriesTable from "../features/Categories/CategoriesTable";
import CreateRecordForm from "../features/Records/CreateRecordForm";
import AmountInput from "../ui/AmountInput";
import Button from "../ui/Button";
import CategoriesContainer from "../ui/CategoriesContainer";
import Header from "../ui/Header";
import RemarkInput from "../ui/RemarkInput";
import Row from "../ui/Row";

function Dashboard() {
  return (
    <CreateRecordForm>
      <Header>
        <Button type="primary">Income</Button>
        <Button>Outcome</Button>
      </Header>
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
        <Button>Button</Button>
      </Row>
    </CreateRecordForm>
  );
}

export default Dashboard;
