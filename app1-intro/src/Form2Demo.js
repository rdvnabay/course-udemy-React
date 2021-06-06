import React, { Component } from "react";
import { Form, FormGroup, Label, Input, Button } from "reactstrap";
import alertify from "alertifyjs";

export default class Form2Demo extends Component {
  state = { email: "", description: "", password: "", city: "" };
  handleChange = (event) => {
    let name=event.target.name;
    let value=event.target.value;
    this.setState({[name]:value});
  };
  handleSubmit = (event) => {
    event.preventDefault();
    alertify.success(this.state.email + " added to db");
    alertify.success(this.state.password + " added to db");
    alertify.success(this.state.description + " added to db");
    alertify.success(this.state.city + " added to db");
  };
  render() {
    return (
      <div>
        <Form onSubmit={this.handleSubmit}>
          <FormGroup>
            <Label for="email"></Label>
            <Input
              type="email"
              name="email"
              id="email"
              onChange={this.handleChange}
              placeholder="email address"
            ></Input>
            <h3>{this.state.email}</h3>
          </FormGroup>
          <FormGroup>
            <Label for="password"></Label>
            <Input
              type="password"
              name="password"
              id="password"
              onChange={this.handleChange}
              placeholder="password"
            ></Input>
            <h3>{this.state.password}</h3>
          </FormGroup>
          <FormGroup>
            <Label for="description"></Label>
            <Input
              type="textarea"
              name="description"
              id="description"
              onChange={this.handleChange}
              placeholder="description"
            ></Input>
            <h3>{this.state.description}</h3>
          </FormGroup>
          <FormGroup>
            <Label for="city"></Label>
            <Input
              type="select"
              name="city"
              id="city"
              onChange={this.handleChange}
            >
              <option>Bitlis</option>
              <option>İstanbul</option>
              <option>Aydın</option>
              <option>Ordu</option>
              <option>Düzce</option>
            </Input>
            <h3>{this.state.city}</h3>
          </FormGroup>
          <Button>Save</Button>
        </Form>
      </div>
    );
  }
}
