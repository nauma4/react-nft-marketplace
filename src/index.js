import React from 'react';
import ReactDOM from 'react-dom/client';
import '@styles/reset.css';
import '@styles/index.scss';
import MainPage from '@pages/MainPage';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <MainPage />
  </React.StrictMode>
);
