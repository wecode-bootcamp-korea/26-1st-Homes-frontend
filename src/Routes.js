import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import Nav from './component/Nav/Nav';
import Login from './pages/Login/Login';
import Main from './pages/Main/Main';
import Detail from './pages/Detail/Detail';
import ProductLists from './pages/ProductLists/ProductLists';
<<<<<<< HEAD
import SignUpPage from './pages/SignUp';
=======
import Signup from './pages/Signup/Signup';
import Cart from './pages/Cart/Cart';
>>>>>>> master

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
<<<<<<< HEAD
          <Route exact path="/signup" component={SignUpPage} />
=======
          <Route exact path="/signup" component={Signup} />
          <Route exact path="/cart" component={Cart} />
>>>>>>> master
        </Switch>
      </Router>
    );
  }
}

export default Routes;
