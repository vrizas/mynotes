import React from 'react';
import PropTypes from 'prop-types';
import AddNoteModal from '../components/AddNoteModal';
import NoteList from '../components/NoteList';
import SearchInput from '../components/SearchInput';

function HomePage({ notes, addNoteHandler, deleteNoteHandler, archiveNoteHandler, unarchiveNoteHandler, keyword, searchNoteHandler }) {
 return (
   <section className="home">
      <SearchInput keyword={keyword} searchNoteHandler={searchNoteHandler} />
      <AddNoteModal addNoteHandler={addNoteHandler} />
      <NoteList notes={notes} deleteNoteHandler={deleteNoteHandler} archiveNoteHandler={archiveNoteHandler} unarchiveNoteHandler={unarchiveNoteHandler} isArchived={false} />
   </section>
 );
}

HomePage.propTypes = {
  notes: PropTypes.arrayOf(PropTypes.object).isRequired,
  addNoteHandler: PropTypes.func.isRequired,
  deleteNoteHandler: PropTypes.func.isRequired,
  archiveNoteHandler: PropTypes.func.isRequired,
  unarchiveNoteHandler: PropTypes.func.isRequired,
  keyword: PropTypes.string.isRequired,
  searchNoteHandler: PropTypes.func.isRequired
}
 
export default HomePage;