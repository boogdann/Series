import { 
  Navigate, 
  Route, 
  Routes, 
} from 'react-router-dom';
import Home from './components/home/home';
import Films from './components/films/films';

function App() {
  return (
    <Routes>
      <Route path='' element={<Navigate to="home"/>}/>
      <Route path='home/' element={<Home/>} />
      <Route path='films/' element={<Films/>}/>
    </Routes>
  );
}

export default App;