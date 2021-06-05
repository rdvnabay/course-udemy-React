import React, { Component } from "react";
import { ListGroup, ListGroupItem } from "reactstrap";

export default class CategoryList extends Component {
  //eski react sürümlerinde tanımlı olması gereken constructor yapısı
  // constructor(props){
  //   super(props)
  //   this.state:{}
  state = {
    categories: [ ]
  };
 componentDidMount(){
   this.getCategories()
 }
  getCategories=()=>{
    fetch("http://localhost:3000/categories")
    .then(response=>response.json())
    .then(response=>this.setState({categories:response}))
  }
  render() {
    return (
      <div>
        <h3>{this.props.info.title}</h3>
        <ListGroup>
          {this.state.categories.map((category) => (
            <ListGroupItem
              key={category.categoryId}
              onClick={() =>this.props.changeCategory(category)}>
              {category.categoryName}
            </ListGroupItem>
          ))}
        </ListGroup>
        <h4>{this.props.currentCategory}</h4>
      </div>
    );
  }
}
