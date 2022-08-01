import React from 'react';
import NoteItemAction from './NoteItemAction';
import NoteItemBody from './NoteItemBody';
import NoteItemHeader from './NoteItemHeader';
 
function NoteItem({ id, title, body, createdAt, archived, deleteNoteHandler }) {
 return (
   <div className="note-item">
     <NoteItemHeader title={title} createdAt={createdAt} />
     <NoteItemBody body={body} />
     <NoteItemAction id={id} deleteNoteHandler={deleteNoteHandler} />
   </div>
 );
}
 
export default NoteItem;