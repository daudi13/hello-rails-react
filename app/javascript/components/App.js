import React from "react"
import PropTypes from "prop-types"
import { BrowserRouter as Router, Route, Switch } from "react-router-dom"
import HelloWorld from "./HelloWorld"
class App extends React.Component {
  render () {
    return (
      <Router>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/" render={() => <HelloWorld greeting="Friend"/>} />
        </Switch>
      </Router>
    );
  }
}

export default App
