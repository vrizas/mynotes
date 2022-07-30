import React from 'react';
import NoteItemAction from './NoteItemAction';
import NoteItemBody from './NoteItemBody';
import NoteItemHeader from './NoteItemHeader';
 
function NoteItem({ id, title, body, createdAt, archived }) {
 return (
   <div className="note-item">
     <NoteItemHeader title={title} createdAt={createdAt} />
     <NoteItemBody body={body} />
     <NoteItemAction id={id} />
   </div>
 );
}
 
export default NoteItem;