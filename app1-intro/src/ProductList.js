import React, { Component } from "react";
import {Table,Button} from "reactstrap";

export default class ProductList extends Component {

  render() {
    return (
      <div>
        <h3>{this.props.info.title}</h3>
        <h3>{this.props.currentCategory}</h3>
        <Table>
          <thead>
            <tr>
              <th>#</th>
              <th>Product Name</th>
              <th>Units In Stock</th>
              <th>Unit Price</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {this.props.products.map((product) => (
              <tr key={product.id}>
                <th scope="row">{product.id}</th>
                <td>{product.productName}</td>
                <td>{product.unitsInStock}</td>
                <td>{product.unitPrice}</td>
                <td><Button color="success" onClick={()=>this.props.addToCart(product)}>AddToCart</Button></td>
              </tr>
            ))}
          </tbody>
        </Table>
      </div>
    );
  }
}
