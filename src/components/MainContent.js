import React from 'react';
import AddNoteModal from './AddNoteModal';
import NoteList from './NoteList';
import SearchInput from './SearchInput';

function MainContent({ notes, addNoteHandler, deleteNoteHandler, archiveNoteHandler, searchNoteHandler }) {
 return (
   <main>
      <SearchInput notes={notes} searchNoteHandler={searchNoteHandler} />
      <AddNoteModal addNoteHandler={addNoteHandler} />
      <NoteList notes={notes} deleteNoteHandler={deleteNoteHandler} archiveNoteHandler={archiveNoteHandler} isArchived={false} />
      <NoteList notes={notes} deleteNoteHandler={deleteNoteHandler} archiveNoteHandler={archiveNoteHandler} isArchived={true} />
   </main>
 );
}
 
export default MainContent;