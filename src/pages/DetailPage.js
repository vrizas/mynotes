import React from 'react';
import PropTypes from 'prop-types';
import { useParams } from 'react-router-dom';
import NoteItemBody from '../components/NoteItemBody';
import NoteItemHeader from '../components/NoteItemHeader';
import NoteItemAction from '../components/NoteItemAction';
import AddNoteModal from '../components/AddNoteModal';

function DetailPage({ notes, addNoteHandler, deleteNoteHandler, archiveNoteHandler }) {
    const { id } = useParams();
    const note = notes.find(note => note.id === Number(id));

    if (!note) {
        return window.location.href = "/404";
    }

    return (
        <section className="note-detail">
            <NoteItemHeader title={note.title} createdAt={note.createdAt} />
            <NoteItemBody body={note.body} />
            <NoteItemAction id={note.id} archived={note.archived} deleteNoteHandler={deleteNoteHandler} archiveNoteHandler={archiveNoteHandler} />
            <AddNoteModal addNoteHandler={addNoteHandler} />
        </section>
    )
}

DetailPage.propTypes = {
    notes: PropTypes.arrayOf(PropTypes.object).isRequired,
    addNoteHandler: PropTypes.func.isRequired,
    deleteNoteHandler: PropTypes.func.isRequired,
    archiveNoteHandler: PropTypes.func.isRequired,
}
 
export default DetailPage;