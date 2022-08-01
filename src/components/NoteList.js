import React from 'react';
import NoteItem from './Noteitem';
 
function NoteList({ notes, deleteNoteHandler }) {
  return (
    <div className="note-list">
      {
        notes.map(note => (
          <NoteItem key={note.id} {...note} deleteNoteHandler={deleteNoteHandler} />
        ))
      }
    </div>
  );
}
 
export default NoteList;