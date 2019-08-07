import React from 'react'
import {loadItems} from '../actions/items'
import {connect} from 'react-redux'
import ItemsList from './ItemsList'

class ItemsListContainer extends React.Component {
  componentDidMount() {
    this.props.loadItems()
  }

  render() {
    console.log('items list container', this.props)
    return <ItemsList items={this.props.items} />
  }
}

const mapStateToProps = state => ({
  items: state.items
})

export default connect(mapStateToProps, {loadItems})(ItemsListContainer)
