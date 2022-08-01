import React from 'react';
import AddNoteModalBody from './AddNoteModalBody';
import AddNoteModalHeader from './AddNoteModalHeader';

function AddNoteModal({ addNoteHandler }) {
 return (
    <div className="add-note-modal">
        <div className="add-note-modal__content">
            <AddNoteModalHeader />
            <AddNoteModalBody addNoteHandler={addNoteHandler} />
        </div>
    </div>
 );
}
 
export default AddNoteModal;