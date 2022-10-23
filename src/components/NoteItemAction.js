import React from 'react';
import PropTypes from 'prop-types';
 
function NoteItemAction({ id, archived, deleteNoteHandler, archiveNoteHandler, unarchiveNoteHandler }) {
  return (
    <section className="note-item__action">
      <button className="note-item__delete-button" onClick={() => deleteNoteHandler(id)}>
          <span className="material-icons icon">delete</span>
      </button>
      {
        (archived) ?
        <button className="note-item__archive-button" onClick={() => unarchiveNoteHandler(id)}>
          <span className="material-icons icon">unarchive</span>
        </button> :
        <button className="note-item__archive-button" onClick={() => archiveNoteHandler(id)}>
          <span className="material-icons icon">archive</span>
        </button>
      }
    </section>
  );
}

NoteItemAction.propTypes = {
  id: PropTypes.string.isRequired,
  archived: PropTypes.bool.isRequired,
  deleteNoteHandler: PropTypes.func.isRequired,
  archiveNoteHandler: PropTypes.func.isRequired,
  unarchiveNoteHandler: PropTypes.func.isRequired
}
 
export default NoteItemAction;