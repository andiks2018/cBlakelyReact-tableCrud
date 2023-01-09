import React from 'react';
import {Routes, Route} from 'react-router-dom'
import './App.css';
import Table from './pages/Table';

function App() {
  return (
    <Routes>
      <Route path='/' element={<h1>Pilih halamannya</h1>} />
      <Route path='/table' element={<Table />} />
    </Routes>
  );
}

export default App;
