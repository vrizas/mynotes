import React from 'react';
import PropTypes from 'prop-types';
 
function NoteItemBody({ body }) {
 return (
   <section className="note-item__body">
     <p className="note-item__body-content">{body}</p>
   </section>
 );
}

NoteItemBody.propTypes = {
  body: PropTypes.string.isRequired,
}
 
export default NoteItemBody;