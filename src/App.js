import React, { Component } from 'react';
import './App.scss';
import MainPage from './shared/components/MainPage/MainPage';
import Cart from './shared/components/Cart/Cart';
import ApiProvider from './shared/utils/context-provider';
import PageTemplate from './shared/containers/PageTemplate/PageTemplate'
import { BrowserRouter as Router, Route } from "react-router-dom";

class App extends Component {
  render() {
    return (
      <ApiProvider>
        <Router>
          <PageTemplate>
            <Route path="/" exact component={MainPage} />
            <Route path="/cart/" exact component={Cart} />
          </PageTemplate>
        </Router>
      </ApiProvider>
    );
  }
}

export default App;
