import React from 'react';
import PropTypes from 'prop-types';
import NoteList from '../components/NoteList';
import SearchInput from '../components/SearchInput';

function ArchivePage({ notes, deleteNoteHandler, archiveNoteHandler, keyword, searchNoteHandler }) {
    return (
        <section>
            <SearchInput keyword={keyword} searchNoteHandler={searchNoteHandler} />
            <NoteList notes={notes} deleteNoteHandler={deleteNoteHandler} archiveNoteHandler={archiveNoteHandler} isArchived={true} />
        </section>
    )
}

ArchivePage.propTypes = {
    notes: PropTypes.arrayOf(PropTypes.object).isRequired
}
 
export default ArchivePage;