import React, { Component } from 'react'
import store from './store'
import { Provider } from 'react-redux'
import { Route } from 'react-router-dom'
import ItemsListContainer from './components/ItemsListContainer'


class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <div>
          <Route path="/" exact component={ItemsListContainer} />
        </div>
      </Provider>
    );
  }
}

export default App