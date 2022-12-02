import logo from './logo.svg';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import Home from './Pages/Home';
import Navbar from './Pages/Shared/Navbar';

function App() {
  return (
    <div className='parentDiv'>
      <Navbar></Navbar>
      <Routes>
        <Route path='/' element={<Home></Home>} ></Route>
      </Routes>
    </div>
  );
}

export default App;
