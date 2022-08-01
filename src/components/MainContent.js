import React from 'react';
import AddNoteModal from './AddNoteModal';
import NoteList from './NoteList';

function MainContent({ notes, addNoteHandler }) {
 return (
   <main>
      <AddNoteModal addNoteHandler={addNoteHandler} />
      <NoteList notes={notes} />
   </main>
 );
}
 
export default MainContent;