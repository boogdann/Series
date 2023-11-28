import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { HashRouter, Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom';
import { Home } from '@mui/icons-material';
import Films from './components/films/films';

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route>
      <Route path='' element={<App />} />
      <Route path='home' element={<Home />} />
      <Route path='films' element={<Films />} />
    </Route>
  )
);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <RouterProvider router={router} />
);
