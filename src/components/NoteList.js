import React from 'react';
import PropTypes from 'prop-types';
import NoteItem from './NoteItem';
import { archivePage } from '../utils/content';
import LocaleContext from '../contexts/LocaleContext';
 
function NoteList({ notes, deleteNoteHandler, archiveNoteHandler, unarchiveNoteHandler, isArchived }) {
  const { locale } = React.useContext(LocaleContext);

  if (notes.length < 1) {
    return (
      <div className="loading-wrapper">
        <div className="loadingio-spinner-cube-upsekeva7c">
          <div className="ldio-aismiju3buq">
            <div></div>
            <div></div>
            <div></div>
            <div></div>
          </div>
        </div>
      </div>
    )
  }

  if (isArchived) {
    const filteredNotes = notes.filter(note => note.archived);

    return (
      <div className="archived-note-list" id="archived-note-list">
          <h2 className="archived-note-list__title">{ archivePage[locale].header }</h2>
          <div className="archived-note-list__content">
            {
              (filteredNotes.length > 0) ? 
                filteredNotes.map(note => (
                  <NoteItem key={note.id} {...note} deleteNoteHandler={deleteNoteHandler} archiveNoteHandler={archiveNoteHandler} unarchiveNoteHandler={unarchiveNoteHandler} />
                )) : 
                <p>Tidak ada catatan yang diarsipkan</p>
            }
          </div>
      </div>
    );
  } else {
    const filteredNotes = notes.filter(note => !note.archived);

    return (
      <div className="note-list">
        <div className="note-list__content">
          {
            (filteredNotes.length > 0) ? 
            filteredNotes.map(note => (
              <NoteItem key={note.id} {...note} deleteNoteHandler={deleteNoteHandler} archiveNoteHandler={archiveNoteHandler} unarchiveNoteHandler={unarchiveNoteHandler} />
            )) : 
            <p>Tidak ada catatan</p>
          }
        </div>
      </div>
    );
  }
}

NoteList.propTypes = {
  notes: PropTypes.arrayOf(PropTypes.object).isRequired,
  deleteNoteHandler: PropTypes.func.isRequired,
  archiveNoteHandler: PropTypes.func.isRequired,
  unarchiveNoteHandler: PropTypes.func.isRequired,
  isArchived: PropTypes.bool.isRequired
}
 
export default NoteList;