import React from 'react';
import PropTypes from 'prop-types';
import { useParams } from 'react-router-dom';
import NoteItemBody from '../components/NoteItemBody';
import NoteItemHeader from '../components/NoteItemHeader';
import NoteItemAction from '../components/NoteItemAction';
import AddNoteModal from '../components/AddNoteModal';

function DetailPage({ notes, addNoteHandler, deleteNoteHandler, archiveNoteHandler, unarchiveNoteHandler }) {
    const { id } = useParams();

    if (notes.length < 1) {
        return (
            <div className="loading-wrapper">
            <div className="loadingio-spinner-cube-upsekeva7c">
                <div className="ldio-aismiju3buq">
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                </div>
            </div>
            </div>
        )
    }

    const note = notes.find(note => note.id === id);

    if (!note) {
        return window.location.href = "/404";
    }

    return (
        <section className="note-detail">
            <NoteItemHeader title={note?note.title:''} createdAt={note?note.createdAt:''} />
            <NoteItemBody body={note?note.body:''} />
            <NoteItemAction id={note?note.id:''} archived={note?note.archived:false} deleteNoteHandler={deleteNoteHandler} archiveNoteHandler={archiveNoteHandler} unarchiveNoteHandler={unarchiveNoteHandler} />
            <AddNoteModal addNoteHandler={addNoteHandler} />
        </section>
    )
}

DetailPage.propTypes = {
    notes: PropTypes.arrayOf(PropTypes.object).isRequired,
    addNoteHandler: PropTypes.func.isRequired,
    deleteNoteHandler: PropTypes.func.isRequired,
    archiveNoteHandler: PropTypes.func.isRequired,
    unarchiveNoteHandler: PropTypes.func.isRequired
}
 
export default DetailPage;