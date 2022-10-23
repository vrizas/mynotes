import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import NoteItemAction from './NoteItemAction';
import NoteItemBody from './NoteItemBody';
import NoteItemHeader from './NoteItemHeader';
 
function NoteItem({ id, title, body, createdAt, archived, deleteNoteHandler, archiveNoteHandler, unarchiveNoteHandler }) {
 return (
   <div className="note-item">
      <Link to={`/note/${id}`} className="note-item__link">
        <NoteItemHeader title={title} createdAt={createdAt} />
        <NoteItemBody body={body} />
      </Link>
      <NoteItemAction id={id} archived={archived} deleteNoteHandler={deleteNoteHandler} archiveNoteHandler={archiveNoteHandler} unarchiveNoteHandler={unarchiveNoteHandler} />
   </div>
 );
}

NoteItem.propTypes = {
  id: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  body: PropTypes.string.isRequired,
  createdAt: PropTypes.string.isRequired,
  archived: PropTypes.bool.isRequired,
  deleteNoteHandler: PropTypes.func.isRequired,
  archiveNoteHandler: PropTypes.func.isRequired,
  unarchiveNoteHandler: PropTypes.func.isRequired
}
 
export default NoteItem;
