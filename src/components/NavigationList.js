import React from 'react';

function NavigationList() {
 return (
    <nav>
        <button>
            <span className="material-icons icon">inventory</span>
            <span className="text">Arsip</span>
        </button>
        <button>
            <span className="material-icons icon">add_box</span>
            <span className="text">Tambah Catatan</span>
        </button>
    </nav>
 );
}
 
export default NavigationList;