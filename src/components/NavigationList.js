import React from 'react';
import { Link } from 'react-router-dom';
import ToggleTheme from './ToggleTheme';
import LocaleContext from '../contexts/LocaleContext';
import { navList } from '../utils/content';
import ToggleLocale from './ToggleLocale';

function onShowAddNoteModal() {
    const addNoteModal = document.querySelector('.add-note-modal');
    const addNoteModalContent = document.querySelector('.add-note-modal__content');
    addNoteModal.style.display = 'flex';
    setTimeout(() => {
        addNoteModalContent.style.transform = 'scale(1)';
    })
}

function NavigationList() {
    const { locale } = React.useContext(LocaleContext);

    return (
        <nav>
            <Link to="/archive">
                <span className="material-icons icon">inventory</span>
                <span className="text">{ navList[locale].archiveButton }</span>
            </Link>
            <button onClick={onShowAddNoteModal}>
                <span className="material-icons icon">add_box</span>
                <span className="text">{ navList[locale].addButton }</span>
            </button>
            <ToggleTheme />
            <ToggleLocale />
        </nav>
    );
}
 
export default NavigationList;