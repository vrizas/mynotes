import React from 'react';
import NoteItem from './NoteItem';
 
function NoteList({ notes, deleteNoteHandler, archiveNoteHandler }) {
  const filteredNotes = notes.filter(note => !note.archived);

  return (
    <div className="note-list">
      <div className="note-list__content">
        {
          (filteredNotes.length > 0) ? 
          filteredNotes.map(note => (
            <NoteItem key={note.id} {...note} deleteNoteHandler={deleteNoteHandler} archiveNoteHandler={archiveNoteHandler} />
          )) : 
          <p>Belum ada catatan</p>
        }
      </div>
    </div>
  );
}
 
export default NoteList;