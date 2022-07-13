import React from "react"
import PropTypes from "prop-types"
import { BrowserRouter as Router, Route, Routes } from "react-router-dom"

class App extends React.Component {
  render() {
    return (
      <React.StrictMode>
        <Provider store={store}>
          <Router>
            <Routes>
              <Route path="/" element={<Greeting />} />
            </Routes>
          </Router>
        </Provider>
      </React.StrictMode>
    );
  }
}

export default App;
