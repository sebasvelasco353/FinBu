import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import logo from './logo.svg';
import './App.css';

// Routes
import * as routes from './constants/routes';
// import navigation component
import Navigation from './components/Navigation';
// import components
import SignInContainer from './components/containers/SignInContainer';
import HomeContainer from './components/containers/HomeContainer';
import ProfileContainer from './components/containers/ProfileContainer';
import SignUpContainer from './components/containers/SignUpContainer';
import PasswordForgetContainer from './components/containers/PasswordForgetContainer';


class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <Navigation />
          <hr />
          <Route
            exact path={routes.SIGN_UP}
            component={() => <SignUpContainer />}
          />
          <Route
            exact path={routes.SIGN_IN}
            component={() => <SignInContainer />}
          />
          <Route
            exact path={routes.PASSWORD_FORGET}
            component={() => <PasswordForgetContainer />}
          />
          <Route
            exact path={routes.HOME}
            component={() => <HomeContainer />}
          />
          <Route
            exact path={routes.PROFILE}
            component={() => <ProfileContainer />}
          />
        </div>
      </Router>
    );
  }
}

export default App;
