import logo from "./logo.svg";
import "./App.css";
import React, { Component } from "react";
import HeaderContainer from "./components/Header/HeaderContainer";
import Navbar from "./components/Navbar/Navbar";
import ProfileContainer from "./components/Profile/ProfileContainer";
import { connect } from "react-redux";
import { BrowserRouter, Route, withRouter } from "react-router-dom";
import DialogsContainer from "./components/Dialogs/DialogsContainer";
import UsersContainer from "./components/Users/UsersContainer";
import Login from "./components/Login/Login";
import {initializeApp} from "./redux/app-reducer"
import { compose } from "redux";
import Preloader from "./components/common/Preloader";

class App extends Component {
  componentDidMount() {
    this.props.initializeApp();
  }

  render() {
    if (!this.props.initialized) {
      return <Preloader />
    }

    return (
      <BrowserRouter>
        <div className="app-wrapper">
          <HeaderContainer />
        </div>

        <div className="app-wrapper">
          <div className="main">
            <Navbar />
            <div className="app-wrapper-content">
              <Route
                path="/profile/:userId?"
                render={() => <ProfileContainer />}
              />
              <Route path="/users" render={() => <UsersContainer />} />

              <Route path="/dialogs" render={() => <DialogsContainer />} />

              <Route path="/login" render={() => <Login />} />
            </div>
          </div>
        </div>
      </BrowserRouter>
    );
  }
}


const mapStateToProps = (state) => ({
  initialized: state.app.initialized
})

export default compose(
  withRouter,
  connect(mapStateToProps, {initializeApp}))(App) ;
{
  /* <Route path="/reg" render={() => <Reg />} /> */
}
