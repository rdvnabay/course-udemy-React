import { Col, Container, Row } from "reactstrap";
import CategoryList from "./CategoryList";
import Navi from "./Navi";
import ProductList from "./ProductList";

function App() {
  let productInfo={title:"Product List"}
  let categoryInfo={title:"Category List",content:"Content"}
  return (
    <div className="App">
      <header className="App-header">
        <Container>
          <Row>
            <Navi />
          </Row>
          <Row>
            <Col xs="3">
              <CategoryList info={categoryInfo}/>
            </Col>
            <Col xs="3">
              <ProductList info={productInfo}/>
            </Col>
          </Row>
        </Container>
      </header>
    </div>
  );
}

export default App;
