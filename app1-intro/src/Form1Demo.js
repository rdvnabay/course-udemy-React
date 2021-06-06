import React, { Component } from "react";

export default class Form1Demo extends Component {
  state = { userName: "", city:"" };
  onChangeHandler = (event) => {
    //this.setState({ userName: event.target.value });
    let name=event.target.name;
    let value=event.target.value;
    this.setState({[name]:value});
  };
  onSubmitHandler = (event) => {
    event.preventDefault();
    alert(this.state.userName);
  };
  render() {
    return (
      <div>
        <form onSubmit={this.onSubmitHandler}>
          <h3>Username</h3>
          <input name="userName" type="text" onChange={this.onChangeHandler}></input>
          <h3>{this.state.userName}</h3>

          <h3>City</h3>
          <input name="city" type="text" onChange={this.onChangeHandler}></input>
          <h3>{this.state.city}</h3>
          <input type="submit" value="Save"></input>
        </form>
      </div>
    );
  }
}
