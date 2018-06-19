import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {BrowserRouter} from 'react-router-dom'
import {AuthProvider, AuthContext} from './context/Auth'
import registerServiceWorker from './registerServiceWorker';

const Page = () => {
  return(
    <AuthProvider>
      <AuthContext.Consumer>
        {value => (
          <App auth={value} />
        )}
      </AuthContext.Consumer>
    </AuthProvider>
  )
}

ReactDOM.render(
    <BrowserRouter><Page /></BrowserRouter>,
  document.getElementById('root'));
registerServiceWorker();
