import React from 'react';
import Quote from "./components/quotes";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import CategoryList from "./components/categoryList"

import './App.css';

function App() {
    return (
    <div className="App">
      <header>
        <h1>Norris Reacts</h1>
      </header>
      <Router>
      <nav>
        <ul>
          <li><Link to="/">Home</Link></li>
        </ul>
      </nav>
        <Route path="/" exact>
          <CategoryList />
        </Route>
        <Route path="/category/:category_name" component={Quote}></Route>
        </Router>
    </div>
  );
}

export default App;
