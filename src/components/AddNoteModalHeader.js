import React from 'react';

function onHideAddNoteModal() {
    const addNoteModal = document.querySelector('.add-note-modal');
    const addNoteModalContent = document.querySelector('.add-note-modal__content');
    addNoteModalContent.style.transform = 'scale(0)';
    setTimeout(() => {
        addNoteModal.style.display = 'none';
    }, 300)
}

function AddNoteModalHeader() {
 return (
    <section className="add-note-modal__header">
        <h2 className="add-note-modal__title">Tambah Catatan</h2>
        <button className="add-note-modal__close" onClick={onHideAddNoteModal}>
            <span className="material-icons icon">close</span>
        </button>
    </section>
 );
}
 
export default AddNoteModalHeader;