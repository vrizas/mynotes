import React from 'react';
import PropTypes from 'prop-types';
import { showFormattedDate } from '../utils';
 
function NoteItemHeader({ title, createdAt }) {
 return (
   <section className="note-item__header">
     <h3 className="note-item__title">{title}</h3>
     <p className="note-item__date">{showFormattedDate(createdAt)}</p>
   </section>
 );
}

NoteItemHeader.propTypes = {
  title: PropTypes.string.isRequired,
  createdAt: PropTypes.string.isRequired,
}
 
export default NoteItemHeader;