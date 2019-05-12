import React from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import { connect } from "react-redux";
import { PropTypes } from "prop-types";
import Login from "./components/Login/Login";
import Posts from "./components/Posts/Posts";

export const Routes = ({ isLoggedIn }) => (
  <Switch>
    <Route
      exact
      path="/login"
      render={props => (!isLoggedIn ? <Login /> : <Redirect to="/" />)}
    />
    <Route
      exact
      path="/"
      render={props => (isLoggedIn ? <Posts /> : <Redirect to="/login" />)}
    />
  </Switch>
);

Routes.propTypes = {
  isLoggedIn: PropTypes.bool
};

Routes.defaultProps = {
  isLoggedIn: false
};

export const mapStateToProps = ({ currentUser: { isLoggedIn } }) => ({
  isLoggedIn
});

export default connect(mapStateToProps)(Routes);
