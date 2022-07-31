import React from 'react';
import HeaderBar from './HeaderBar';
import MainContent from './MainContent';
import { getInitialData } from '../utils'
 
class NoteApp extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      notes: getInitialData()
    }

    this.onAddNoteHandler = this.onAddNoteHandler.bind(this);
  }

  onAddNoteHandler({ title, body }) {
    this.setState((prevState) => {
      return {
        notes: [
          ...prevState.notes,
          {
            id: +new Date(),
            title,
            body,
            archived: false,
            createdAt: new Date()
          }
        ]
      }
    });
  }

  render() {
    return (
      <div id="app">
        <HeaderBar />
        <MainContent notes={this.state.notes} addNoteHandler={this.onAddNoteHandler} />
      </div>
    );
  }
}
 
export default NoteApp;