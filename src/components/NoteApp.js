import React from 'react';
import { Route, Routes, useLocation, useNavigate, useSearchParams } from 'react-router-dom';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import HomePage from '../pages/HomePage';
import DetailPage from '../pages/DetailPage';
import NavigationList from './NavigationList';
import { getInitialData } from '../utils';
import ArchivePage from '../pages/ArchivePage';
import NotFoundPage from '../pages/NoteFoundPage';
 
function NoteAppWrapper() {
  const location = useLocation();
  const currentPath = location.pathname.split('/')[1];
  const navigate = useNavigate();
  const [searchParams, setSearchParams] = useSearchParams();
  const keyword = searchParams.get('keyword');

  const changeSearchParams = (keyword) => {
    setSearchParams({ keyword });
  }

  return (
    <div>
      <NoteApp currentPath={currentPath} navigate={navigate} defaultKeyword={keyword} keywordChange={changeSearchParams} />
    </div>
  );
}

class NoteApp extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      notes: getInitialData(),
      currentNotes: getInitialData(),
      keyword: props.defaultKeyword || '',
    }

    this.onAddNoteHandler = this.onAddNoteHandler.bind(this);
    this.onDeleteNoteHandler = this.onDeleteNoteHandler.bind(this);
    this.onArchiveNoteHandler = this.onArchiveNoteHandler.bind(this);
    this.onSearchNoteHandler = this.onSearchNoteHandler.bind(this);
  }

  onAddNoteHandler({ title, body }) {
    this.setState((prevState) => {
      return {
        notes: [
          ...prevState.notes,
          {
            id: +new Date(),
            title,
            body,
            archived: false,
            createdAt: new Date().toISOString()
          }
        ],
        currentNotes: [
          ...prevState.currentNotes,
          {
            id: +new Date(),
            title,
            body,
            archived: false,
            createdAt: new Date().toISOString()
          }
        ],
      }
    });
  }

  onDeleteNoteHandler(id) {
    const notes = this.state.notes.filter(note => note.id !== id);
    this.setState({ 
      notes,
      currentNotes: notes
     });

     if (this.props.currentPath === 'note') console.log(this.props.navigate('/'));
  }

  onArchiveNoteHandler(id) {
    const notes = this.state.notes;
    const note = notes.find(note => note.id === id);
    note.archived = !note.archived;
    this.setState({ 
      notes,
      currentNotes: notes
     });

     if (this.props.currentPath === 'note') console.log(this.props.navigate('/'));
  }

  onSearchNoteHandler(keyword) {
    this.setState(() => {
      return {
        keyword,
      }
    });

    this.props.keywordChange(keyword);
  }

  render() {
    let notes = this.state.currentNotes.filter(note => note.title.toLowerCase().includes(this.state.keyword.toLowerCase()));

    return (
      <div id="app">
        <header>
          <Link to="/">
            <h1>MyNotes</h1>
          </Link>
          <NavigationList />
        </header>
        <main>
          <Routes>
            <Route path="/" element={<HomePage notes={notes} addNoteHandler={this.onAddNoteHandler} deleteNoteHandler={this.onDeleteNoteHandler} archiveNoteHandler={this.onArchiveNoteHandler} keyword={this.state.keyword} searchNoteHandler={this.onSearchNoteHandler} />} />
            <Route path="/note/:id" element={<DetailPage notes={notes} addNoteHandler={this.onAddNoteHandler} deleteNoteHandler={this.onDeleteNoteHandler} archiveNoteHandler={this.onArchiveNoteHandler} />} />
            <Route path="/archive" element={<ArchivePage notes={notes} addNoteHandler={this.onAddNoteHandler} deleteNoteHandler={this.onDeleteNoteHandler} archiveNoteHandler={this.onArchiveNoteHandler} keyword={this.state.keyword} searchNoteHandler={this.onSearchNoteHandler} />} />
            <Route path="/404" element={<NotFoundPage addNoteHandler={this.onAddNoteHandler} />} />
            <Route path="*" element={<NotFoundPage addNoteHandler={this.onAddNoteHandler} />} />
          </Routes>
        </main>
      </div>
    );
  }
}

NoteApp.propTypes = {
  currentPath: PropTypes.string.isRequired,
  navigate: PropTypes.func.isRequired,
  defaultKeyword: PropTypes.string,
  keywordChange: PropTypes.func.isRequired
}
 
export default NoteAppWrapper;