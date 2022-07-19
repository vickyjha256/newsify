// import logo from './logo.svg';
import './App.css';
import React, { useState } from 'react'
import Navbar from './Components/Navbar';
import News from './Components/News';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LoadingBar from 'react-top-loading-bar';

const App = () => {
  const pageSize = 9; // This is for updating pageSize quickly.
  const apiKey = process.env.REACT_APP_NEWS_API;
  const [progress, setProgress] = useState(0);

  const [mode, setmode] = useState('light'); // Whether dark mode is enabled or not.
  if (mode === 'light') {
    document.body.style.backgroundColor = '#029c8e';
  }
  const toggleMode = () => {
    if (mode === 'light') {
      setmode('dark');
      document.body.style.backgroundColor = '#000029';
      // showAlert("Dark mode has been enabled.", "success");
    }
    else {
      setmode('light');
      document.body.style.backgroundColor = '#029c8e';
      // showAlert("Light mode has been enabled.", "success");
    }
  }

  return (
    <div>
      <Router>
        <Navbar mode={mode} toggleMode={toggleMode}/>
        <LoadingBar height={3} color='blue' progress={progress} />
        <Routes>
          {/* <Route exact path="/" element={<News setProgress={setProgress} apiKey={apiKey} key="general" pageSize={pageSize} country="in" category="general" />} /> */}
          <Route exact path="/" element={<News setProgress={setProgress} apiKey={apiKey} key="home" pageSize={pageSize} country="in" category="general" />} />          
          <Route exact path="/general" element={<News setProgress={setProgress} apiKey={apiKey} key="general" pageSize={pageSize} country="in" category="general" />} />          
          <Route exact path="/technology" element={<News setProgress={setProgress} apiKey={apiKey} key="technology" pageSize={pageSize} country="in" category="technology" />} />
          <Route exact path="/sports" element={<News setProgress={setProgress} apiKey={apiKey} key="sports" pageSize={pageSize} country="in" category="sports" />} />
          <Route exact path="/entertainment" element={<News setProgress={setProgress} apiKey={apiKey} key="entertainment" pageSize={pageSize} country="in" category="entertainment" />} />
          <Route exact path="/business" element={<News setProgress={setProgress} apiKey={apiKey} key="business" pageSize={pageSize} country="in" category="business" />} />
          <Route exact path="/health" element={<News setProgress={setProgress} apiKey={apiKey} key="health" pageSize={pageSize} country="in" category="health" />} />
          <Route exact path="/science" element={<News setProgress={setProgress} apiKey={apiKey} key="science" pageSize={pageSize} country="in" category="science" />} />
        </Routes>
      </Router>
    </div >
  )
}
export default App;