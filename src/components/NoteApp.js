import React from 'react';
import HeaderBar from './HeaderBar';
import MainContent from './MainContent';
import { getInitialData } from '../utils'
 
class NoteApp extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      notes: getInitialData(),
      currentNotes: getInitialData(),
    }

    this.onAddNoteHandler = this.onAddNoteHandler.bind(this);
    this.onDeleteNoteHandler = this.onDeleteNoteHandler.bind(this);
    this.onArchiveNoteHandler = this.onArchiveNoteHandler.bind(this);
    this.onSearchNoteHandler = this.onSearchNoteHandler.bind(this);
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

  onDeleteNoteHandler(id) {
    const notes = this.state.notes.filter(note => note.id !== id);
    this.setState({ 
      notes,
      currentNotes: notes
     });
  }

  onArchiveNoteHandler(id) {
    const notes = this.state.notes;
    const note = notes.find(note => note.id === id);
    note.archived = !note.archived;
    this.setState({ 
      notes,
      currentNotes: notes
     });
  }

  onSearchNoteHandler(query) {
    let notes = this.state.currentNotes.filter(note => note.title.toLowerCase().includes(query.toLowerCase()));

    this.setState({ notes });
  }

  render() {
    return (
      <div id="app">
        <HeaderBar />
        <MainContent notes={this.state.notes} addNoteHandler={this.onAddNoteHandler} deleteNoteHandler={this.onDeleteNoteHandler} archiveNoteHandler={this.onArchiveNoteHandler} searchNoteHandler={this.onSearchNoteHandler} />
      </div>
    );
  }
}
 
export default NoteApp;