import * as React from 'react'
import { Link } from 'react-router-dom'

export default function ItemsList(props) {

  const items = props.items.items
  if (!items) { return 'Loading...' }
  else {
    return (
      <div className='items'>
        {console.log('items[0]', items[0])}
        <ul>
          {items.map(item => <li key={item.id}><Link to={`/item/${item.id}`}>{item.title}</Link> price: {item.price}</li>)}
        </ul>
      </div>
    )
  }
}