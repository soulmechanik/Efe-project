import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Homepage from '../src/Homepage/Homepage'
import AllWords from './components/Allwords/Allwords'

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/all-words" element={<AllWords />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;