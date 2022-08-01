import React from 'react';

function onShowAddNoteModal() {
    const addNoteModal = document.querySelector('.add-note-modal');
    const addNoteModalContent = document.querySelector('.add-note-modal__content');
    addNoteModal.style.display = 'flex';
    setTimeout(() => {
        addNoteModalContent.style.transform = 'scale(1)';
    })
}

function NavigationList() {
 return (
    <nav>
        <a href="#archived-note-list">
            <span className="material-icons icon">inventory</span>
            <span className="text">Arsip</span>
        </a>
        <button onClick={onShowAddNoteModal}>
            <span className="material-icons icon">add_box</span>
            <span className="text">Tambah Catatan</span>
        </button>
    </nav>
 );
}
 
export default NavigationList;