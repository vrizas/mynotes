import React from 'react';
import { Route, Routes, useLocation, useNavigate, useSearchParams } from 'react-router-dom';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import HomePage from '../pages/HomePage';
import DetailPage from '../pages/DetailPage';
import NavigationList from './NavigationList';
import LoginPage from '../pages/LoginPage';
import RegisterPage from '../pages/RegisterPage';
import ArchivePage from '../pages/ArchivePage';
import NotFoundPage from '../pages/NoteFoundPage';
import ToggleTheme from './ToggleTheme';
import { ThemeProvider } from '../contexts/ThemeContext';
import { addNote, archiveNote, getArchivedNotes, getUserLogged, putAccessToken, unarchiveNote } from '../utils/api';
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
      notes: [],
      currentNotes: [],
      keyword: props.defaultKeyword || '',
      theme: 'light',
      toggleTheme: () => {
        this.setState((prevState) => {
          return {
            theme: prevState.theme === 'light' ? 'dark' : 'light'
          };
        });
      }
    }

    this.onAddNoteHandler = this.onAddNoteHandler.bind(this);
    this.onDeleteNoteHandler = this.onDeleteNoteHandler.bind(this);
    this.onArchiveNoteHandler = this.onArchiveNoteHandler.bind(this);
    this.onUnarchiveNoteHandler = this.onUnarchiveNoteHandler.bind(this);
    this.onSearchNoteHandler = this.onSearchNoteHandler.bind(this);
    this.onLoginSuccess = this.onLoginSuccess.bind(this);
    this.onLogout = this.onLogout.bind(this);
  }

  async componentDidMount() {
    const user = await getUserLogged();
    this.setState(() => {
      return {
        authedUser: user.data,
        initializing: false
      };
    });

    if (this.state.authedUser) {
      const notes = [];
      const unarchiveNotes = await getNotes();
      const archiveNotes = await getArchivedNotes();
      
      unarchiveNotes.map(note => notes.push(note));
      archiveNotes.map(note => notes.push(note));
      this.setState(() => {
        return {
          notes: notes,
          currentNotes: notes
        };
      });
    }
  }

  async componentDidUpdate(prevProps, prevState) {
    if (this.state.authedUser) {
      const notes = [];
      const unarchiveNotes = await getNotes();
      const archiveNotes = await getArchivedNotes();

      unarchiveNotes.data.map(note => notes.push(note));
      archiveNotes.data.map(note => notes.push(note));
      this.setState(() => {
        return {
          notes: notes,
          currentNotes: notes,
        };
      });
    }

    if (prevState.theme !== this.state.theme) {
      document.documentElement.setAttribute('data-theme', this.state.theme);
    }
  }

  async onAddNoteHandler({ title, body }) {
    await addNote({ title, body });

    const notes = await getNotes();
    this.setState(() => {
      return {
        notes: notes.data,
        currentNotes: notes.data,
      };
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

  async onArchiveNoteHandler(id) {
    await archiveNote(id);
    
    const notes = await getNotes();
    this.setState(() => {
      return {
        notes: notes.data,
        currentNotes: notes.data,
      };
    });

     if (this.props.currentPath === 'note') this.props.navigate('/archive');
  }

  async onUnarchiveNoteHandler(id) {
    await unarchiveNote(id);
    
    const notes = await getNotes();
    this.setState(() => {
      return {
        notes: notes.data,
        currentNotes: notes.data,
      };
    });

     if (this.props.currentPath === 'note') this.props.navigate('/');
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
        <ThemeProvider value={{theme: this.state.theme, toggleTheme: this.state.toggleTheme}}>
          <div id="app">
            <header>
              <Link to="/">
                <h1>MyNotes</h1>
              </Link>
              <nav>
                <ToggleTheme />
              </nav>
            </header>
            <main>
              <Routes>
                  <Route path="/*" element={<LoginPage loginSuccess={this.onLoginSuccess} />} />
                  <Route path="/register" element={<RegisterPage />} />
              </Routes>
            </main>
          </div>
        </ThemeProvider>
      );
    }

    let notes = this.state.currentNotes.filter(note => note.title.toLowerCase().includes(this.state.keyword.toLowerCase()));

    return (
      <ThemeProvider value={{theme: this.state.theme, toggleTheme: this.state.toggleTheme}}>
        <div id="app">
          <header>
            <Link to="/">
              <h1>MyNotes</h1>
            </Link>
            <NavigationList />
          </header>
          <main>
            <Routes>
              <Route path="/" element={<HomePage notes={notes} addNoteHandler={this.onAddNoteHandler} deleteNoteHandler={this.onDeleteNoteHandler} archiveNoteHandler={this.onArchiveNoteHandler} unarchiveNoteHandler={this.onUnarchiveNoteHandler} keyword={this.state.keyword} searchNoteHandler={this.onSearchNoteHandler} />} />
              <Route path="/note/:id" element={<DetailPage notes={notes} addNoteHandler={this.onAddNoteHandler} deleteNoteHandler={this.onDeleteNoteHandler} archiveNoteHandler={this.onArchiveNoteHandler} unarchiveNoteHandler={this.onUnarchiveNoteHandler} />} />
              <Route path="/archive" element={<ArchivePage notes={notes} addNoteHandler={this.onAddNoteHandler} deleteNoteHandler={this.onDeleteNoteHandler} archiveNoteHandler={this.onArchiveNoteHandler} unarchiveNoteHandler={this.onUnarchiveNoteHandler} keyword={this.state.keyword} searchNoteHandler={this.onSearchNoteHandler} />} />
              <Route path="/404" element={<NotFoundPage addNoteHandler={this.onAddNoteHandler} />} />
              <Route path="*" element={<NotFoundPage addNoteHandler={this.onAddNoteHandler} />} />
            </Routes>
          </main>
        </div>
      </ThemeProvider>
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