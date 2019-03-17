import React, { Component } from 'react';
import './App.scss';
import MainPage from './shared/components/MainPage/MainPage';
import Provider from './shared/utils/ContextProvider';

class App extends Component {
  render() {
    return (
      <Provider>
        <MainPage />
      </Provider>
    );
  }
}

export default App;
