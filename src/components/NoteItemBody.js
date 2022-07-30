import React from 'react';
 
function NoteItemBody({ body }) {
 return (
   <div className="note-item__body">
     <p className="note-item__body-content">{body}</p>
   </div>
 );
}
 
export default NoteItemBody;