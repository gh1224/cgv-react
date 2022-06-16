import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import './App.css';

import Home from 'pages/Home';

class App extends React.Component {
  render() {
    return (
      <BrowserRouter basename="cgv-react">
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </BrowserRouter>
    );
  }
}

export default App;
