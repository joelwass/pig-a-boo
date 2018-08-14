import React from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Home from './pages/Home.js'
import Author from './pages/Author.js'
import Purchase from './pages/Purchase.js'
import './styles/App.css'

const App = () => (
  <Router>
    <div>
      <header className="App-header">
        <div className="KierraNav Nav">
          <Link to="/">
            <h3>Kierra Falbo</h3>
          </Link>
        </div>
        <div className="AuthorNav Nav">
          <Link to="/author">
            <h3>Author</h3>
          </Link>
        </div>
        <div className="PurchaseNav Nav">
          <Link to="/purchase">
            <h3>Purchase</h3>
          </Link>
        </div>
      </header>
      <Route exact path="/" component={Home} />
      <Route path="/author" component={Author} />
      <Route path="/purchase" component={Purchase} />
    </div>
  </Router>
);

export default App;