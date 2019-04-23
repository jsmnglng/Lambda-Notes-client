import React, { Component } from "react";
import { connect } from "react-redux";
import { Route, withRouter } from "react-router-dom";
import { getNotes } from "./actions";
import "./App.css";

import NavigationBar from "./components/Navigation/NavigationBar";
import ListView from "./views/ListView";

class App extends Component {
  componentDidMount() {
    this.props.getNotes();
  }

  render() {
    return (
      <div className="app-container">
        <NavigationBar logOut={this.logOut} />

        <div className="content-container">
          <div className="content-wrapper">
            <Route exact path="/" component={ListView} />
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
