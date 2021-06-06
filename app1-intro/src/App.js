import React, { Component } from "react";
import { Col, Container, Row } from "reactstrap";
import CategoryList from "./CategoryList";
import Navi from "./Navi";
import ProductList from "./ProductList";

export default class App extends Component {
  state = { currentCategory: "", products: [], cart:[] };

  componentDidMount() {
    this.getProducts();
  }
  changeCategory = (category) => {
    this.setState({ currentCategory: category.categoryName });
    this.getProducts(category.id);
  };


  addToCart = (product) => {
    var newCart=this.state.cart;
    var addedItem=newCart.find(c=>c.product.id===product.id);
    if(addedItem){
      addedItem.quantity+=1;
    }
    else{
      newCart.push({product:product,quantity:1});
    }
    this.setState({cart:newCart});
  }

  removeFromCart=(product)=>{
var newCart=this.state.cart.filter(c=>c.product.id!==product.id);
this.setState({cart:newCart});
  }

  getProducts = (categoryId) => {
    let url = "http://localhost:3000/products";
    if (categoryId) {
      url += "?categoryId=" + categoryId;
    }  fetch(url)
      .then((response) => response.json())
      .then((response) => this.setState({ products: response }));
  }

  render() {
    let productInfo = { title: "Product List" };
    let categoryInfo = { title: "Category List", content: "Content" };

    return (
      <div className="App">
        <header className="App-header">
          <Container>
            <Row>
              <Navi cart={this.state.cart}
                    removeFromCart={this.removeFromCart}/>
            </Row>
            <Row>
              <Col xs="3">
                <CategoryList
                  info={categoryInfo}
                  changeCategory={this.changeCategory}
                  currentCategory={this.state.currentCategory}
                />
              </Col>
              <Col xs="9">
                <ProductList
                  info={productInfo}
                  currentCategory={this.state.currentCategory}
                  products={this.state.products}
                  addToCart={this.addToCart}
                />
              </Col>
            </Row>
          </Container>
        </header>
      </div>
    );
  }
}
//export default App;
