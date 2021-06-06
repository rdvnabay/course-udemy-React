import React, { Component } from "react";
import { Route, Switch } from "react-router";
import { Col, Container, Row } from "reactstrap";
import alertify from "alertifyjs";

import Navi from "./Navi";
import CategoryList from "./CategoryList";
import ProductList from "./ProductList";
import CartList from "./CartList";
import NotFound from "./NotFound";
import Form1Demo from "./Form1Demo";
import Form2Demo from "./Form2Demo";

export default class App extends Component {
  state = { currentCategory: "", products: [], cart: [] };

  componentDidMount() {
    this.getProducts();
  }
  changeCategory = (category) => {
    this.setState({ currentCategory: category.categoryName });
    this.getProducts(category.id);
  };

  addToCart = (product) => {
    var newCart = this.state.cart;
    var addedItem = newCart.find((c) => c.product.id === product.id);
    if (addedItem) {
      addedItem.quantity += 1;
    } else {
      newCart.push({ product: product, quantity: 1 });
    }
    this.setState({ cart: newCart });
    alertify.success(product.productName + " added to cart");
  };

  removeFromCart = (product) => {
    var newCart = this.state.cart.filter((c) => c.product.id !== product.id);
    this.setState({ cart: newCart });
    alertify.error(product.productName + " removed from cart");
  };

  getProducts = (categoryId) => {
    let url = "http://localhost:3000/products";
    if (categoryId) {
      url += "?categoryId=" + categoryId;
    }
    fetch(url)
      .then((response) => response.json())
      .then((response) => this.setState({ products: response }));
  };

  render() {
    let productInfo = { title: "Product List" };
    let categoryInfo = { title: "Category List", content: "Content" };

    return (
      <div className="App">
        <header className="App-header">
          <Container>
            <Row>
              <Navi
                cart={this.state.cart}
                removeFromCart={this.removeFromCart}
              />
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
                <Switch>
                  <Route
                    exact
                    path="/"
                    render={(props) => (
                      <ProductList
                        {...props}
                        info={productInfo}
                        currentCategory={this.state.currentCategory}
                        products={this.state.products}
                        addToCart={this.addToCart}
                      />
                    )}
                  />
                  <Route
                    exact
                    path="/cart"
                    render={(props) => (
                      <CartList
                        {...props}
                        cart={this.state.cart}
                        removeFromCart={this.removeFromCart}
                      />
                    )}
                  />
                   <Route path="/formDemo1" component={Form1Demo} />
                   <Route path="/formDemo2" component={Form2Demo} />
                  <Route component={NotFound} />
                </Switch>
              </Col>
            </Row>
          </Container>
        </header>
      </div>
    );
  }
}
//export default App;
