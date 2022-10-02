import React from 'react';
import PropTypes from 'prop-types';
import NoteItem from './NoteItem';
 
function NoteList({ notes, deleteNoteHandler, archiveNoteHandler, isArchived }) {
  if (isArchived) {
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
                <p>Tidak ada catatan yang diarsipkan</p>
            }
          </div>
      </div>
    );
  } else {
    const filteredNotes = notes.filter(note => !note.archived);

    return (
      <div className="note-list">
        <div className="note-list__content">
          {
            (filteredNotes.length > 0) ? 
            filteredNotes.map(note => (
              <NoteItem key={note.id} {...note} deleteNoteHandler={deleteNoteHandler} archiveNoteHandler={archiveNoteHandler} />
            )) : 
            <p>Tidak ada catatan</p>
          }
        </div>
      </div>
    );
  }
}

NoteList.propTypes = {
  notes: PropTypes.arrayOf(PropTypes.object).isRequired,
  deleteNoteHandler: PropTypes.func.isRequired,
  archiveNoteHandler: PropTypes.func.isRequired,
  isArchived: PropTypes.bool.isRequired
}
 
export default NoteList;