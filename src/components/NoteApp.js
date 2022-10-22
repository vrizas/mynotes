import React from 'react';
import { Route, Routes, useLocation, useNavigate, useSearchParams } from 'react-router-dom';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import HomePage from '../pages/HomePage';
import DetailPage from '../pages/DetailPage';
import NavigationList from './NavigationList';
import { getInitialData } from '../utils';
import LoginPage from '../pages/LoginPage';
import RegisterPage from '../pages/RegisterPage';
import ArchivePage from '../pages/ArchivePage';
import NotFoundPage from '../pages/NoteFoundPage';
import { getUserLogged, putAccessToken } from '../utils/api';
import { getNotes, deleteNote } from '../utils/api';
 
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
      authedUser: null,
      initializing: true,
      notes: getInitialData(),
      currentNotes: getInitialData(),
      keyword: props.defaultKeyword || '',
    }

    this.onAddNoteHandler = this.onAddNoteHandler.bind(this);
    this.onDeleteNoteHandler = this.onDeleteNoteHandler.bind(this);
    this.onArchiveNoteHandler = this.onArchiveNoteHandler.bind(this);
    this.onSearchNoteHandler = this.onSearchNoteHandler.bind(this);
    this.onLoginSuccess = this.onLoginSuccess.bind(this);
    this.onLogout = this.onLogout.bind(this);
  }

  async componentDidMount() {
    const user = await getUserLogged();
    this.setState(() => {
      return {
        authedUser: user.data,
        initializing: false,
      };
    });

    if (this.state.authedUser) {
      const notes = await getNotes();
      this.setState(() => {
        return {
          notes: notes.data,
          currentNotes: notes.data,
        };
      });
    }
  }

  async componentDidUpdate() {
    if (this.state.authedUser) {
      const notes = await getNotes();
      this.setState(() => {
        return {
          notes: notes.data,
          currentNotes: notes.data,
        };
      });
    }
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

  async onDeleteNoteHandler(id) {
    await deleteNote(id);
    
    const notes = await getNotes();
    this.setState(() => {
      return {
        notes: notes.data,
        currentNotes: notes.data,
      };
    });
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

  async onLoginSuccess({ accessToken }) {
    putAccessToken(accessToken);
    const { data } = await getUserLogged();
 
    this.setState(() => {
      return {
        authedUser: data,
      };
    });
  }

  onLogout() {
    this.setState(() => {
      return {
        authedUser: null,
      }
    });
    putAccessToken('');
  }

  render() {
    if (this.state.initializing) {
      return null;
    }

    if (this.state.authedUser === null) {
      return (
        <div id="app">
          <header>
            <Link to="/">
              <h1>MyNotes</h1>
            </Link>
          </header>
          <main>
            <Routes>
                <Route path="/*" element={<LoginPage loginSuccess={this.onLoginSuccess} />} />
                <Route path="/register" element={<RegisterPage />} />
            </Routes>
          </main>
        </div>
      );
    }

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