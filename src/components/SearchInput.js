import React from 'react';
import PropTypes from 'prop-types';
import { searchInput } from '../utils/content';
import LocaleContext from '../contexts/LocaleContext';

function SearchInput({ keyword, searchNoteHandler }) {
    const { locale } = React.useContext(LocaleContext);

    return (
        <section className="search">
            <form className="search__form" onSubmit={(event) => event.preventDefault()}>
                <div className="search__form-item">
                    <span className="material-icons icon">search</span>
                    <input type="text" id="query" placeholder={searchInput[locale].placeholder} value={keyword} onChange={(event) => searchNoteHandler(event.target.value)} />
                </div>
            </form>
        </section>
        );
}

SearchInput.propTypes = {
    keyword: PropTypes.string.isRequired,
    searchNoteHandler: PropTypes.func.isRequired
}

export default SearchInput;