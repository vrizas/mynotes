import React from 'react';
import PropTypes from 'prop-types';
 
function NoteItemAction({ id, archived, deleteNoteHandler, archiveNoteHandler }) {
 return (
   <section className="note-item__action">
     <button className="note-item__delete-button" onClick={() => deleteNoteHandler(id)}>
        <span className="material-icons icon">delete</span>
     </button>
     <button className="note-item__archive-button" onClick={() => archiveNoteHandler(id)}>
        {(archived) ? <span className="material-icons icon">unarchive</span> : <span className="material-icons icon">archive</span> }
     </button>
   </section>
 );
}

NoteItemAction.propTypes = {
  id: PropTypes.number.isRequired,
  archived: PropTypes.bool.isRequired,
  deleteNoteHandler: PropTypes.func.isRequired,
  archiveNoteHandler: PropTypes.func.isRequired,
}
 
export default NoteItemAction;