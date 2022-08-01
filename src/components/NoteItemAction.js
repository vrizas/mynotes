import React from 'react';
 
function NoteItemAction({ id, archived, deleteNoteHandler, archiveNoteHandler }) {
 return (
   <section className="note-item__action">
     <button className="note-item__delete-button" onClick={() => deleteNoteHandler(id)}>
        <span className="material-icons icon">delete</span>
     </button>
     <button className="note-item__archive-button" onClick={() => archiveNoteHandler(id)}>
        {(archived) ? <span class="material-icons icon">unarchive</span> : <span className="material-icons icon">archive</span> }
     </button>
   </section>
 );
}
 
export default NoteItemAction;