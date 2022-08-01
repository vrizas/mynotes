import React from 'react';
import AddNoteModal from './AddNoteModal';
import ArchivedNoteList from './ArchivedNoteList';
import NoteList from './NoteList';

function MainContent({ notes, addNoteHandler, deleteNoteHandler, archiveNoteHandler }) {
 return (
   <main>
      <AddNoteModal addNoteHandler={addNoteHandler} />
      <NoteList notes={notes} deleteNoteHandler={deleteNoteHandler} archiveNoteHandler={archiveNoteHandler} />
      <ArchivedNoteList notes={notes} deleteNoteHandler={deleteNoteHandler} archiveNoteHandler={archiveNoteHandler} />
   </main>
 );
}
 
export default MainContent;