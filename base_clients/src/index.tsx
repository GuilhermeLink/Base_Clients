import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { GlobalStyle } from './styles/globalStyle';
import { AuthContextProvider } from './context/AuthContext';

ReactDOM.render(
  <React.StrictMode>
    <AuthContextProvider>
      <GlobalStyle />
      <App />
    </AuthContextProvider>
  </React.StrictMode>,
  document.getElementById('root')
);

