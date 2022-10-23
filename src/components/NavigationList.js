import React from 'react';
import { Link } from 'react-router-dom';
import ToggleTheme from './ToggleTheme';

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
        <Link to="/archive">
            <span className="material-icons icon">inventory</span>
            <span className="text">Arsip</span>
        </Link>
        <button onClick={onShowAddNoteModal}>
            <span className="material-icons icon">add_box</span>
            <span className="text">Tambah Catatan</span>
        </button>
        <ToggleTheme />
    </nav>
 );
}
 
export default NavigationList;