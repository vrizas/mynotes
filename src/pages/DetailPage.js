import React from 'react';
import { useParams } from 'react-router-dom';
import NoteItemBody from '../components/NoteItemBody';
import NoteItemHeader from '../components/NoteItemHeader';

function DetailPage({ notes }) {
    const { id } = useParams();
    const note = notes.find(note => note.id === Number(id));

    return (
        <section className="note-detail">
            <NoteItemHeader title={note.title} createdAt={note.createdAt} />
            <NoteItemBody body={note.body} />
        </section>
    )
}
 
export default DetailPage;