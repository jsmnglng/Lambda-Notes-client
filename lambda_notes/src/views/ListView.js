import React, { Component } from "react";
import { connect } from "react-redux";
import { getAllNotes } from "../actions";

import NotesList from "../components/Notes/NotesList";

class ListView extends Component {
  componentDidMount() {
    this.props.getAllNotes();
  }

  render() {
    return <NotesList notes={this.props.notes} />;
  }
}

const mapStateToProps = ({ notesReducer }) => {
  return {
    notes: notesReducer.notes
  };
};

export default connect(
  mapStateToProps,
  { getAllNotes }
)(ListView);
