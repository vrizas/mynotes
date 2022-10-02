import React from 'react';
import PropTypes from 'prop-types';
import NoteList from '../components/NoteList';

function ArchivePage({ notes, deleteNoteHandler, archiveNoteHandler }) {
    return (
        <section>
            <NoteList notes={notes} deleteNoteHandler={deleteNoteHandler} archiveNoteHandler={archiveNoteHandler} isArchived={true} />
        </section>
    )
}

ArchivePage.propTypes = {
    notes: PropTypes.arrayOf(PropTypes.object).isRequired
}
 
export default ArchivePage;