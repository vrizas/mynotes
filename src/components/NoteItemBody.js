import React from 'react';
import PropTypes from 'prop-types';
import parse from 'html-react-parser';
 
function NoteItemBody({ body }) {
  return (
    <section className="note-item__body">
      <p className="note-item__body-content">{parse(parse(body))}</p>
    </section>
  );
}

NoteItemBody.propTypes = {
  body: PropTypes.string.isRequired
}
 
export default NoteItemBody;