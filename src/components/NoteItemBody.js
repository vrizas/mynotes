import React from 'react';
 
function NoteItemBody({ body }) {
 return (
   <section className="note-item__body">
     <p className="note-item__body-content">{body}</p>
   </section>
 );
}
 
export default NoteItemBody;