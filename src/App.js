import React, { Component } from 'react';
import './App.scss';
import MainPage from './shared/components/MainPage/MainPage';
import ApiProvider from './shared/utils/context-provider';

class App extends Component {
  render() {
    return (
      <ApiProvider>
        <MainPage />
      </ApiProvider>
    );
  }
}

export default App;
