import React from 'react';
import PropTypes from 'prop-types';
import NoteList from '../components/NoteList';
import SearchInput from '../components/SearchInput';
import AddNoteModal from '../components/AddNoteModal';

function ArchivePage({ notes, addNoteHandler, deleteNoteHandler, archiveNoteHandler, keyword, searchNoteHandler }) {
    return (
        <section>
            <SearchInput keyword={keyword} searchNoteHandler={searchNoteHandler} />
            <AddNoteModal addNoteHandler={addNoteHandler} />
            <NoteList notes={notes} deleteNoteHandler={deleteNoteHandler} archiveNoteHandler={archiveNoteHandler} isArchived={true} />
        </section>
    )
}

ArchivePage.propTypes = {
    notes: PropTypes.arrayOf(PropTypes.object).isRequired,
    addNoteHandler: PropTypes.func.isRequired,
    deleteNoteHandler: PropTypes.func.isRequired,
    archiveNoteHandler: PropTypes.func.isRequired,
    keyword: PropTypes.string.isRequired,
    searchNoteHandler: PropTypes.func.isRequired
}
 
export default ArchivePage;