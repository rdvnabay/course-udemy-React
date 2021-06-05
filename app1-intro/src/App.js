import { Col, Container, Row } from "reactstrap";
import CategoryList from "./CategoryList";
import Navi from "./Navi";
import ProductList from "./ProductList";

function App() {
  return (
    <div className="App">
      <header className="App-header">
      <Container>
      <Row>
      <Navi/>
      </Row>
      <Row>
      <Col xs="3">
      <CategoryList/>
      </Col>
      <Col xs="3">
      <ProductList/>
        </Col>
      </Row>
      </Container>
      </header>
    </div>
  );
}

export default App;
