import React, { Component } from "react";
import {
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  Badge,
  NavLink,
  NavItem,
} from "reactstrap";

export default class CartSummary extends Component {
  cartDetail() {
    return (
      <UncontrolledDropdown nav inNavbar>
        <DropdownToggle nav caret>
          Options {this.props.cart.length}
        </DropdownToggle>
        <DropdownMenu right>
          {this.props.cart.map((cartItem) => (
            <DropdownItem key={cartItem.product.id}>
              {cartItem.product.productName}
              <Badge color="success">{cartItem.quantity}</Badge>
            </DropdownItem>
          ))}
          <DropdownItem divider />
          <DropdownItem>Reset</DropdownItem>
        </DropdownMenu>
      </UncontrolledDropdown>
    );
  }

  emptyCart() {
    return (
      <NavLink>
        <NavItem>Empty Cart</NavItem>
      </NavLink>
    );
  }
  render() {
    return (
      <div>{this.props.cart.length > 0 ? this.cartDetail() : this.emptyCart()}</div>
    );
  }
}
