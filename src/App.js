import './App.css';
import {Outlet} from "react-router-dom";
import Home from "./components/home/home";

function App() {
    return (
        <div>
            <Home/>
            <Outlet/>
        </div>
    );
}

export default App;