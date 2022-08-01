import React from 'react';
import AddNoteModal from './AddNoteModal';
import NoteList from './NoteList';

function MainContent({ notes, addNoteHandler, deleteNoteHandler }) {
 return (
   <main>
      <AddNoteModal addNoteHandler={addNoteHandler} />
      <NoteList notes={notes} deleteNoteHandler={deleteNoteHandler} />
   </main>
 );
}
 
export default MainContent;