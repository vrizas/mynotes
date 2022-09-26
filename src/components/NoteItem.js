import React from 'react';
import NoteItemAction from './NoteItemAction';
import NoteItemBody from './NoteItemBody';
import NoteItemHeader from './NoteItemHeader';
 
function NoteItem({ id, title, body, createdAt, archived, deleteNoteHandler, archiveNoteHandler }) {
 return (
   <div className="note-item">
     <NoteItemHeader title={title} createdAt={createdAt} />
     <NoteItemBody body={body} />
     <NoteItemAction id={id} archived={archived} deleteNoteHandler={deleteNoteHandler} archiveNoteHandler={archiveNoteHandler} />
   </div>
 );
}
 
export default NoteItem;
