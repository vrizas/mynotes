import React from 'react';
import PropTypes from 'prop-types';
import AddNoteModal from '../components/AddNoteModal';
import NoteList from '../components/NoteList';
import SearchInput from '../components/SearchInput';

function HomePage({ notes, addNoteHandler, deleteNoteHandler, archiveNoteHandler, searchNoteHandler }) {
 return (
   <section className="home">
      <SearchInput searchNoteHandler={searchNoteHandler} />
      <AddNoteModal addNoteHandler={addNoteHandler} />
      <NoteList notes={notes} deleteNoteHandler={deleteNoteHandler} archiveNoteHandler={archiveNoteHandler} isArchived={false} />
   </section>
 );
}

HomePage.propTypes = {
  notes: PropTypes.arrayOf(PropTypes.object).isRequired,
  addNoteHandler: PropTypes.func.isRequired,
  deleteNoteHandler: PropTypes.func.isRequired,
  archiveNoteHandler: PropTypes.func.isRequired,
  searchNoteHandler: PropTypes.func.isRequired,
}
 
export default HomePage;