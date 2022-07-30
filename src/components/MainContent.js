import React from 'react';
import NoteList from './NoteList';

function MainContent({ notes }) {
 return (
   <main>
      <NoteList notes={notes} />
   </main>
 );
}
 
export default MainContent;