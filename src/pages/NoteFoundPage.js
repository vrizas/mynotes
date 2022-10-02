import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import error404Image from '../assets/images/404.jpg';
import AddNoteModal from '../components/AddNoteModal';

function NotFoundPage({ addNoteHandler }) {
    return (
        <section className="not-found-page">
            <figure>
                <img src={error404Image} alt="Page Not Found" />
                <figcaption><a href="https://www.freepik.com/free-vector/404-error-lost-space-concept-illustration_20602746.htm#query=404&position=43&from_view=search" target="_blank" rel="noreferrer">Image by storyset</a> on Freepik</figcaption>
            </figure>
            <Link to="/" className="not-found-page__back">Kembali ke beranda</Link>
            <AddNoteModal addNoteHandler={addNoteHandler} />
        </section>
    )
}

NotFoundPage.propTypes = {
    addNoteHandler: PropTypes.func.isRequired
}
 
export default NotFoundPage;