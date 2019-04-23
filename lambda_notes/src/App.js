import React, { Component } from "react";
import { connect } from "react-redux";
import { Route, withRouter, NavLink } from "react-router-dom";
import { getNotes } from "./actions";
import "./App.css";

import NavigationBar from "./components/Navigation/NavigationBar";
import SingleNoteView from "./views/SingleNoteView";
import NewNoteView from "./views/NewNoteView";
import ListView from "./views/ListView";
import EditNoteView from "./views/EditNoteView";
import Register from "./components/Auth/Register";
import Login from "./components/Auth/Login";
import axios from "axios";

class App extends Component {
  render() {
    return (
      <div className="app-container">
        <NavigationBar logOut={this.logOut} />

        <div className="content-container">
          <div className="content-wrapper">
            <Route exact path="/" component={ListView} />
            <Route path="/notes/:id" component={SingleNoteView} />
            <Route path="/create" component={NewNoteView} />
            <Route path="/edit/:id" component={EditNoteView} />
          </div>
        </div>
      </div>
    );
  }
}

export default withRouter(
  connect(
    null,
    { getNotes }
  )(App)
);
