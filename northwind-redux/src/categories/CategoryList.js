import React, { Component } from 'react'
import {connect} from 'react-redux'

 class CategoryList extends Component {
    render() {
        return (
            <div>
                Category list
                <h4>Seçili Kategori: {this.props.currentCategory.categoryName}</h4>
            </div>
        )
    }
}

function mapStateToProps(state){
    return {currentCategory:state.changeCategoryReducer}
}

export default connect(mapStateToProps)(CategoryList)