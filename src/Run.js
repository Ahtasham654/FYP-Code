import React from "react";
import App from './App';
import Home from './Home';
import Sign from'./Sign';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
export default function Run() {
  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/App">Login</Link>
            </li>
            <li>
              <Link to="/Sign">SignUp</Link>
            </li>
          </ul>
        </nav>
        <Switch>
          <Route path="/App">
            <App />
          </Route>
          <Route path="/Sign">
            <Sign />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}
