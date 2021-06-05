import React, { Component } from "react";
import { Col, Container, Row } from "reactstrap";
import CategoryList from "./CategoryList";
import Navi from "./Navi";
import ProductList from "./ProductList";

export default class App extends Component {
  state={currentCategory: ""}
  changeCategory=(category)=>{
    this.setState({ currentCategory: category.categoryName })
  }
 
  render() {
    let productInfo = { title: "Product List" };
    let categoryInfo = { title: "Category List", content: "Content" };
    
    return (
      <div className="App">
        <header className="App-header">
          <Container>
            <Row>
              <Navi />
            </Row>
            <Row>
              <Col xs="3">
                <CategoryList info={categoryInfo} changeCategory={this.changeCategory} currentCategory={this.state.currentCategory} />
              </Col>
              <Col xs="3">
                <ProductList info={productInfo} currentCategory={this.state.currentCategory}/>
              </Col>
            </Row>
          </Container>
        </header>
      </div>
    );
  }
}
// export default App;
