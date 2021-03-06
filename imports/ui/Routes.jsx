// Framework
import React from "react";
import {
  BrowserRouter as Router,
  Route,
  browserHistory,
  Redirect
} from "react-router-dom";

// Pages
import Shop from "./pages/Shop.jsx";
import Home from "./pages/Home.jsx";
import Cart from "./pages/Cart.jsx";
import Auth from "./pages/Auth.jsx";

const Routes = () =>
  <Router history={browserHistory}>
    <div>
      <Route exact path="/" component={Home} />
      <Route path="/shop" component={Shop} />
      <Route path="/cart" component={Cart} />
      <Route path="/login" render={ (props) => { return !localStorage.getItem("Meteor.loginToken") ? <Auth {...props} />
                                                                                                   : <Redirect to="/shop" /> } } />
    </div>
  </Router>;

export default Routes;
