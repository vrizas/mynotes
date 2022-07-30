import React from 'react';
import HeaderBar from './HeaderBar';
import MainContent from './MainContent';
import { getInitialData } from '../utils'
 
class ContactApp extends React.Component {
  constructor(props) {
    super(props);

      this.state = {
        notes: getInitialData()
      }
  }

  render() {
    return (
      <div id="app">
        <HeaderBar />
        <MainContent notes={this.state.notes} />
      </div>
    );
  }
}
 
export default ContactApp;