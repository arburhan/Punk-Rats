import './App.css';
import { Route, Routes } from 'react-router-dom';
import Home from './Pages/Home';
import Navbar from './Pages/Shared/Navbar';
import { useState } from 'react';

function App() {
  const [getAddress, setGetAddress] = useState('');
  return (
    <div className='parentDiv'>
      <Navbar getAddress={getAddress} setGetAddress={setGetAddress}></Navbar>
      <Routes>
        <Route path='/' element={<Home getAddress={getAddress}></Home>} ></Route>
      </Routes>
    </div>
  );
}

export default App;
