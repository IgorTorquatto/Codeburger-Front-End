import React from 'react';
import ReactDOM from 'react-dom/client';
import GlobalStyles from './styles/globalStyles'
import Routes from './routes'
import { ToastContainer} from 'react-toastify'
import { UserProvider } from './hooks/UserContext'
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <>
    <GlobalStyles/>
    <ToastContainer autoClose={2000} theme='colored'/>
    <UserProvider>
      <Routes/>
    </UserProvider>
  </>
);

