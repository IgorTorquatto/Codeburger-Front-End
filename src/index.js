import React from 'react';
import ReactDOM from 'react-dom/client';
import Login from './containers/Login';
import GlobalStyles from './styles/globalStyles'
import Routes from './routes'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <>
    <GlobalStyles/>
    <Routes/>
  </>
);

