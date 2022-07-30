import React from 'react';
 
function NoteItemAction({ id }) {
 return (
   <div className="note-item__action">
     <button className="note-item__delete-button">
        <span class="material-icons icon">delete</span>
     </button>
     <button className="note-item__archive-button">
        <span class="material-icons icon">archive</span>
     </button>
   </div>
 );
}
 
export default NoteItemAction;