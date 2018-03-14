import React from 'react'
import { map } from 'ramda'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import { CategoryListItem } from '../../components/CategoryListItem'

const Categories = props => {
  return (
    <div>
      <h1>Categories</h1>
      <ul>{map(CategoryListItem, props.categories)}</ul>
    </div>
  )
}

const mapStateToProps = state => {
  return {
    categories: state.categories
  }
}

const connector = connect(mapStateToProps)

export default connector(Categories)
