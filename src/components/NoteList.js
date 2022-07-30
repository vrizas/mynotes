import React from 'react';
import NoteItem from './Noteitem';
 
function NoteList({ notes }) {
  return (
    <div className="note-list">
      {
        notes.map(note => (
          <NoteItem key={note.id} {...note} />
        ))
      }
    </div>
  );
}
 
export default NoteList;