import './App.css';
import {NavLink, Outlet} from "react-router-dom";

import s from "./App.css";
import Home from "./components/home/home";

function App() {
    return (
        <div>
            <div>Links:</div>
            <NavLink to="home">Home </NavLink>
            <NavLink to="films">Films</NavLink>
            <Outlet/>
        </div>
    );
}

export default App;