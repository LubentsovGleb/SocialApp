import logo from "./logo.svg";
import "./App.css";
import React from "react";
import HeaderContainer from "./components/Header/HeaderContainer";
import Navbar from "./components/Navbar/Navbar";
import ProfileContainer from "./components/Profile/ProfileContainer";
// import News from './components/News/News';
// import Music from './components/Music/Music';
import { BrowserRouter, Route } from "react-router-dom";
import DialogsContainer from "./components/Dialogs/DialogsContainer";
import UsersContainer from "./components/Users/UsersContainer";
import Login from "./components/Login/Login";

const App = () => {
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
};

export default App;
{
  /* <Route path="/reg" render={() => <Reg />} /> */
}
