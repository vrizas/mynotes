import React from 'react';
import AddNoteModal from '../components/AddNoteModal';
import NoteList from '../components/NoteList';
import SearchInput from '../components/SearchInput';

function HomePage({ notes, addNoteHandler, deleteNoteHandler, archiveNoteHandler, searchNoteHandler }) {
 return (
   <section className="home">
      <SearchInput notes={notes} searchNoteHandler={searchNoteHandler} />
      <AddNoteModal addNoteHandler={addNoteHandler} />
      <NoteList notes={notes} deleteNoteHandler={deleteNoteHandler} archiveNoteHandler={archiveNoteHandler} isArchived={false} />
      <NoteList notes={notes} deleteNoteHandler={deleteNoteHandler} archiveNoteHandler={archiveNoteHandler} isArchived={true} />
   </section>
 );
}
 
export default HomePage;