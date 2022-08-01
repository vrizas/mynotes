import React from 'react';
import { showFormattedDate } from '../utils';
 
function NoteItemHeader({ title, createdAt }) {
 return (
   <section className="note-item__header">
     <h3 className="note-item__title">{title}</h3>
     <p className="note-item__date">{showFormattedDate(createdAt)}</p>
   </section>
 );
}
 
export default NoteItemHeader;