import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import About from './About';
import Home from './Home';
import Data from './Data';
import Form from './Form';

class App extends Component {
  render() {
    return (
    <Router>
        <div>
          <h2>Welcome to React Router Tutorial</h2>
          <nav className="navbar navbar-expand-lg navbar-light bg-light">
          <ul className="navbar-nav mr-auto">
            <li><Link to={'/'} className="nav-link"> Home </Link></li>
            <li><Link to={'/about'} className="nav-link">About</Link></li>
            <li><Link to={'/data'} className="nav-link">Data</Link></li>
            <li><Link to={'/form'} className="nav-link">Form</Link></li>
          </ul>
          </nav>
          <hr />
          <Switch>
              <Route exact path='/' component={Home} />
              <Route path='/about' component={About} />
              <Route path='/data' component={Data} />
              <Route path='/form' component={Form} />
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;