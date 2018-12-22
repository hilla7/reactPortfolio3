import React, { Component } from 'react';
import './App.css';
import Header from './components/app/header/Header';
import Main from './components/app/main/Main';
import Sidebar from './components/app/sidebar/Sidebar';
import translations from './services/translation.service';
import { BrowserRouter as Router } from 'react-router-dom';
import T from 'i18n-react';

class App extends Component {
  state = {
    localeChanged: false
  }

  componentWillMount() {
    T.setTexts(translations.en);
  }

  handleLocaleChanged = (file) => {
    T.setTexts(file);
    this.setState({ localeChanged: true });
  }

  render() {

    return (
      <div className="App">
        <Header className="header" onLocaleChanged={this.handleLocaleChanged} />
        <Router>
          <React.Fragment>
            <Main className="main" />
            <Sidebar className="sidebar" locale={this.state.locale} />
          </React.Fragment>
        </Router>
      </div>
    );
  }
}
export default App;