import React from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Home from './pages/Home.js'
import Author from './pages/Author.js'
import Purchase from './pages/Purchase.js'
import Contact from './pages/Contact.js'
import ErrorPage from './pages/Error.js'
import Success from './pages/Success.js'
import './styles/App.css'

class App extends React.Component {
  componentDidMount() {
    if (window.location && window.location.protocol === 'http:') {
      window.location = `https://www.pigaboobook.com${window.location.pathname}`
    }
  }

  render() {
    return (
      <Router>
        <div>
          <header className="App-header">
            <div className="KierraNav Nav">
              <Link to="/">
                <h3>Home</h3>
              </Link>
            </div>
            <div className="AuthorNav Nav">
              <Link to="/author">
                <h3>About the Author</h3>
              </Link>
            </div>
            <div className="PurchaseNav Nav">
              <Link to="/purchase">
                <h3>Purchase</h3>
              </Link>
            </div>
            <div className="ContactNav Nav">
              <Link to="/contact">
                <h3>Contact Me</h3>
              </Link>
            </div>
          </header>
          <Route exact path="/" component={Home} />
          <Route path="/author" component={Author} />
          <Route path="/purchase" component={Purchase} />
          <Route path="/contact" component={Contact} />
          <Route path="/error" component={ErrorPage} />
          <Route path="/success" component={Success} />
        </div>
      </Router>
    )
  }
}

export default App;