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
import Product from './Views/Product';


function App() {
  return (
    //adding relative to make sure footer stays at bottom
    //of the screen since its class is absolute
    <div className="relative pb-10 min-h-screen">
        
        {/* All links must be within a Router element */}
        <Router>
          <Header />
          {/* <CounterExample /> */}

          <div className="p-3">
            <Routes>
            <Route exact path="/" element={<Home />}></Route>
            <Route exact path="/about" element={<About />}></Route>
            <Route exact path="/products/:id" element={<Product />}></Route>
            </Routes>
          </div>
          
          <Footer />

        </Router>

    </div>
  );
}

export default App;
