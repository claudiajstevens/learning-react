import React from 'react';
import {
  BrowserRouter as Router,  
  Routes,
  Route,
  Link
} from "react-router-dom";
import logo from './logo.svg';
import CounterExample from './Components/CounterExample';
import Header from './Components/Header';
import Footer from './Components/Footer';

import Home from './Views/Home';
import About from './Views/About';


function App() {
  return (
    <div>
        <Header />
        {/* <CounterExample /> */}

      <div className="p-3">
        {/* All links must be within a Router element */}
        <Router>
          <Routes>
            <Route exact path="/" element={<Home />}></Route>
            <Route exact path="/about" element={<About />}></Route>
          </Routes>

        </Router>
      </div>
      
      <Footer />

    </div>
  );
}

export default App;
