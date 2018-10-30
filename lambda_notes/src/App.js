import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import './App.css';

import NavigationBar from './components/Navigation/NavigationBar';
import Note from './components/Notes/Note';
import NewNoteView from './views/NewNoteView';
import ListView from './views/ListView';

class App extends Component {
  render() {

    return (
      <div className="app-container">
        <NavigationBar />

        <div className="content-container">
          <div className="content-wrapper">
            <Route exact path='/' component={ListView} />
            <Route path='/notes/:id' component={Note} />
            <Route path='/create' component={NewNoteView} />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
