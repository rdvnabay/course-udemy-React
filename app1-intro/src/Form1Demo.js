import React, { Component } from "react";

export default class Form1Demo extends Component {
  state = { userName: "" };
  onChangeHandler = (event) => {
    this.setState({ userName: event.target.value })
  }
  render() {
    return (
      <div>
        <form>
          <h3>Username</h3>
          <input type="text" onChange={this.onChangeHandler}></input>
          <h3>{this.state.userName}</h3>
        </form>
      </div>
    );
  }
}
