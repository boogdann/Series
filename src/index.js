import React, {Suspense} from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import {HashRouter, Route, RouterProvider, createBrowserRouter, createRoutesFromElements} from 'react-router-dom';
import Films from './components/films/films';
import Home from './components/home/home';

import './i18n'

const router = createBrowserRouter(
    createRoutesFromElements(
        <Route>
            <Route path='' element={<App/>}/>
            <Route path='home' element={<Home/>}/>
            <Route path='films' element={<Films/>}/>
        </Route>
    )
);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <Suspense fallback={<div>Loading...</div>}>
        <RouterProvider router={router}/>
    </Suspense>
);
