import React from 'react';
import { Router } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';

import './config/Reactotron';
import { Provider } from 'react-redux';
import GlobalStyle from './styles/global';
import Header from './components/Header';
import Routes from './routes';
import store from './store';

import history from './services/history';

function App() {
  return (
    <Provider store={store}>
      <Router history={history}>
        <Header />
        <Routes />
        <GlobalStyle />
        <ToastContainer autoClose={5000} />
      </Router>
    </Provider>
  );
}

export default App;
