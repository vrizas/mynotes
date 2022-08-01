import React from 'react';
import NoteItem from './NoteItem';
 
function ArchivedNoteList({ notes, deleteNoteHandler, archiveNoteHandler }) {
  return (
    <div className="archived-note-list" id="archived-note-list">
        <h2 className="archived-note-list__title">Catatan yang telah diarsipkan</h2>
        <div className="archived-note-list__content">
            {
                notes.map(note => {
                return (note.archived) ? <NoteItem key={note.id} {...note} deleteNoteHandler={deleteNoteHandler} archiveNoteHandler={archiveNoteHandler} /> : null;
                })
            }
        </div>
    </div>
  );
}
 
export default ArchivedNoteList;