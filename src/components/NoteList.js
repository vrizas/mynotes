import React from 'react';
import NoteItem from './NoteItem';
 
function NoteList({ notes, deleteNoteHandler, archiveNoteHandler }) {
  return (
    <div className="note-list">
      <div className="note-list__content">
        {
          notes.map(note => {
            return (!note.archived) ? <NoteItem key={note.id} {...note} deleteNoteHandler={deleteNoteHandler} archiveNoteHandler={archiveNoteHandler} /> : null;
          })
        }
      </div>
    </div>
  );
}
 
export default NoteList;