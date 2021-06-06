import React, { Component } from "react";
import { Table,Button } from "reactstrap";

export default class CartList extends Component {
  renderCart() {
    return (
      <div>
        <Table>
          <thead>
            <tr>
              <th>#</th>
              <th>CategoryId</th>
              <th>Product Name</th>
              <th>Product Price</th>
              <th>Product Units In Stock</th>
              <th>Quantity</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {this.props.cart.map((cartItem) => (
              <tr key={cartItem.product.id}>
                <td>{cartItem.product.id}</td>
                <td>{cartItem.product.categoryId}</td>
                <td>{cartItem.product.productName}</td>
                <td>{cartItem.product.unitPrice}</td>
                <td>{cartItem.product.unitsInStock}</td>
                <td>{cartItem.quantity}</td>
                <td><Button color="danger" onClick={()=>this.props.removeFromCart(cartItem.product)}>Remove</Button></td>
              </tr>
            ))}
          </tbody>
        </Table>
      </div>
    );
  }
  render() {
    return <div>{this.renderCart()}</div>;
  }
}
