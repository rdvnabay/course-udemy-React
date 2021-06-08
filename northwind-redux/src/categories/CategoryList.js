import React, { Component } from "react";
import { connect } from "react-redux";
import { ListGroup, ListGroupItem } from "reactstrap";
import { bindActionCreators } from "redux";
import * as categoryActions from "../redux/actions/categoryActions";

class CategoryList extends Component {
  componentDidMount() {
    this.props.actions.getCategories();
  }
  render() {
    return (
      <div>
        Category list {this.props.categories.length}
        <ListGroup>
          {this.props.categories.map((category) => (
            <ListGroupItem key={category.id}>
              {category.categoryName}
            </ListGroupItem>
          ))}
        </ListGroup>
        <h4>Seçili Kategori: {this.props.currentCategory.categoryName}</h4>
      </div>
    );
  }
}

function mapDispatchToProps(dispatch) {
  return {
    actions: {
      getCategories: bindActionCreators(
        categoryActions.getCategories,
        dispatch
      ),
    },
  };
}

function mapStateToProps(state) {
  return {
    currentCategory: state.changeCategoryReducer,
    categories: state.categoryListReducer,
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(CategoryList);
