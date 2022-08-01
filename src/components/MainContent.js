import React from 'react';
import AddNoteModal from './AddNoteModal';
import ArchivedNoteList from './ArchivedNoteList';
import NoteList from './NoteList';
import SearchInput from './SearchInput';

function MainContent({ notes, addNoteHandler, deleteNoteHandler, archiveNoteHandler, searchNoteHandler }) {
 return (
   <main>
      <SearchInput notes={notes} searchNoteHandler={searchNoteHandler} />
      <AddNoteModal addNoteHandler={addNoteHandler} />
      <NoteList notes={notes} deleteNoteHandler={deleteNoteHandler} archiveNoteHandler={archiveNoteHandler} />
      <ArchivedNoteList notes={notes} deleteNoteHandler={deleteNoteHandler} archiveNoteHandler={archiveNoteHandler} />
   </main>
 );
}
 
export default MainContent;