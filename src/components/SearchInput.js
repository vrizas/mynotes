import React from 'react';
import PropTypes from 'prop-types';

function SearchInput({ keyword, searchNoteHandler }) {
    return (
        <section className="search">
            <form className="search__form" onSubmit={(event) => event.preventDefault()}>
                <div className="search__form-item">
                    <span className="material-icons icon">search</span>
                    <input type="text" id="query" placeholder="Masukkan judul catatan" value={keyword} onChange={(event) => searchNoteHandler(event.target.value)} />
                </div>
            </form>
        </section>
        );
}

SearchInput.propTypes = {
    searchNoteHandler: PropTypes.func.isRequired
}

export default SearchInput;