import React, { Component } from "react";
import { connect } from "react-redux";
import { Route, withRouter } from "react-router-dom";
import { getAllNotes } from "./actions";
import "./App.css";

import NavigationBar from "./components/Navigation/NavigationBar";
import ListView from "./views/ListView";
import SingleNoteView from "./views/SingleNoteView";

class App extends Component {
  componentDidMount() {
    this.props.getAllNotes();
  }

  render() {
    return (
      <div className="app-container">
        <NavigationBar />

        <div className="content-container">
          <div className="content-wrapper">
            <Route exact path="/" component={ListView} />
            <Route path="/notes/:id" component={SingleNoteView} />
          </div>
        </div>
      </div>
    );
  }
}

export default withRouter(
  connect(
    null,
    { getAllNotes }
  )(App)
);
