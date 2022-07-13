import React from "react"
import PropTypes from "prop-types"
import { BrowserRouter as Router, Route, Switch } from "react-router-dom"

import { Provider } from "react-redux"

import configureStore from "../configureStore"
const store = configureStore()

import HelloWorld from "./HelloWorld"
class App extends React.Component {
  render () {
    return (
      <Provider store={store}>
      <Router>
        <Switch>
          <Route path="/" render={() => <HelloWorld greeting="Friend"/>} />
        </Switch>
      </Router>
      </Provider>
    );
  }
}

export default App
