import React, {Suspense} from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import {HashRouter, Route, RouterProvider, createBrowserRouter, createRoutesFromElements} from 'react-router-dom';
import Films from './components/films/films';
import Home from './components/home/home';
import Serial from "./components/serial/serial";
import './i18n'


const router = createBrowserRouter(
    createRoutesFromElements(
        <Route>
            <Route path='' element={<Home/>}/>
            <Route path='home' element={<Home/>}/>
            <Route path='films' element={<Films/>}/>
            <Route path='serial/:id' element={<Serial/>}/>
        </Route>
    )
);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <Suspense fallback={<div>Loading...</div>}>
        <RouterProvider router={router}/>
    </Suspense>
);
