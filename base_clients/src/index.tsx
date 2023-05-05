import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { GlobalStyle } from './styles/globalStyle';
import { AuthContextProvider } from './context/AuthContext';


const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <AuthContextProvider>
      <GlobalStyle />
      <App />
    </AuthContextProvider>
  </React.StrictMode>
);

