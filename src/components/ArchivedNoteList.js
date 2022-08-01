import React from 'react';
import NoteItem from './NoteItem';
 
function ArchivedNoteList({ notes, deleteNoteHandler, archiveNoteHandler }) {
  const filteredNotes = notes.filter(note => note.archived);

  return (
    <div className="archived-note-list" id="archived-note-list">
        <h2 className="archived-note-list__title">Catatan yang telah diarsipkan</h2>
        <div className="archived-note-list__content">
          {
            (filteredNotes.length > 0) ? 
              filteredNotes.map(note => (
                <NoteItem key={note.id} {...note} deleteNoteHandler={deleteNoteHandler} archiveNoteHandler={archiveNoteHandler} />
              )) : 
              <p>Belum ada catatan yang diarsipkan</p>
          }
        </div>
    </div>
  );
}
 
export default ArchivedNoteList;