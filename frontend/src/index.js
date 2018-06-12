import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {BrowserRouter} from 'react-router-dom'
import {AuthContext, AuthProvider} from './context/Auth'
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(
  <AuthProvider>
    <AuthContext.Consumer>
      {({ username, password, handleLogin }) => {<BrowserRouter> <App /></BrowserRouter>}}
    </AuthContext.Consumer>
  </AuthProvider>,
  document.getElementById('root'));
registerServiceWorker();
