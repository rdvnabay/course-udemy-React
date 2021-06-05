import { Col, Container, Row } from "reactstrap";
import CategoryList from "./CategoryList";
import Navi from "./Navi";
import ProductList from "./ProductList";

function App() {
  let titleProduct="Product List"
  let titleCategory="Category List"
  return (
    <div className="App">
      <header className="App-header">
        <Container>
          <Row>
            <Navi />
          </Row>
          <Row>
            <Col xs="3">
              <CategoryList title={titleCategory}/>
            </Col>
            <Col xs="3">
              <ProductList title={titleProduct}/>
            </Col>
          </Row>
        </Container>
      </header>
    </div>
  );
}

export default App;
