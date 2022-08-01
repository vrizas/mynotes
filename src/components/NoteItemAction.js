import React from 'react';
 
function NoteItemAction({ id, deleteNoteHandler }) {
 return (
   <section className="note-item__action">
     <button className="note-item__delete-button" onClick={() => deleteNoteHandler(id)}>
        <span className="material-icons icon">delete</span>
     </button>
     <button className="note-item__archive-button">
        <span className="material-icons icon">archive</span>
     </button>
   </section>
 );
}
 
export default NoteItemAction;