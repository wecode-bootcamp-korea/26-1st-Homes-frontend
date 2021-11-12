import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import Nav from './component/Nav/Nav';
import Login from './pages/Login/Login';
import Main from './pages/Main/Main';
import Detail from './pages/Detail/Detail';
import ProductLists from './pages/ProductLists/ProductLists';
import SignUpPage from './pages/Signup/SignUp';
import Cart from './pages/Cart/Cart';

export class Routes extends Component {
  render() {
    return (
      <Router>
        <Nav />
        <Switch>
          <Route exact path="/" component={Main} />
          <Route exact path="/login" component={Login} />
          <Route exact path="/detail/:id" component={Detail} />
          <Route exact path="/product-lists" component={ProductLists} />
          <Route exact path="/signup" component={SignUpPage} />
          <Route exact path="/cart" component={Cart} />
        </Switch>
      </Router>
    );
  }
}

export default Routes;
