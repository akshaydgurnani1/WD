import './App.css';
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import GetStartedForms from './components/pages/Getstarted';
import Home from './components/pages/Home';
import GetStartedPage from './components/pages/mainpage';
import GetStarted from './components/pages/Getstarted';
import Login from "../src/components/pages/Login"
import PortfolioTemplate from './components/pages/ExampleTemplate';

function App() {
  return (
    <div className="App">
     <Router>
  
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/login" element={<Login/>} />
        <Route path='/get-started' element={<GetStarted/>}/>
        <Route path='/template1' element={<PortfolioTemplate/>}/>
      </Routes>
    </Router>
    </div>
  );
}

export default App;

