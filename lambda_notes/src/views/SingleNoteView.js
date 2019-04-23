import React, { Component } from "react";
import { connect } from "react-redux";
import { getAllNotes, getSingleNote } from "../actions";

import SingleNote from "../components/Notes/SingleNote";

class SingleNoteView extends Component {
  state = { show: false };

  componentDidMount() {
    this.props.getSingleNote(this.props.match.params.id);
  }

  deleteNote = (e, id) => {
    e.preventDefault();
    this.props.deleteNote(id);
    this.props.getAllNotes();
    this.props.history.push("/");
  };

  showModal = () => {
    this.setState({ show: true });
  };

  hideModal = () => {
    this.setState({ show: false });
  };

  render() {
    const note = this.props.note;

    if (note) {
      return (
        <SingleNote
          note={note}
          deleteNote={this.deleteNote}
          hideModal={this.hideModal}
          showModal={this.showModal}
          show={this.state.show}
        />
      );
    } else {
      return <h2>404: Note Not Found</h2>;
    }
  }
}

const mapStateToProps = ({ notesReducer }) => {
  return {
    note: notesReducer.note
  };
};

export default connect(
  mapStateToProps,
  { getAllNotes, getSingleNote }
)(SingleNoteView);
