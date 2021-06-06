import React, { Component } from "react";

export default class Form1Demo extends Component {
  state = { userName: "" };
  onChangeHandler = (event) => {
    this.setState({ userName: event.target.value });
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
          <input type="text" onChange={this.onChangeHandler}></input>
          <h3>{this.state.userName}</h3>
          <input type="submit" value="Save"></input>
        </form>
      </div>
    );
  }
}
