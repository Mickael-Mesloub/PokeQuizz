import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import './style.css';

import { StrictMode } from 'react';

import { createRoot } from 'react-dom/client';

import { App } from './App';
import { ErrorPage } from './pages/Error';
import { LoginPage } from './pages/Login';

const root = createRoot(document.getElementById('app'));

root.render(
  <StrictMode>
    {/*<ErrorPage />*/}
    {/*<LoginPage />*/}
    {<App />}
  </StrictMode>
);
