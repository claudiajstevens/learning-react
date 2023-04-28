import logo from './logo.svg';
import HelloWorld from './Components/HelloWord';
import CounterExample from './Components/CounterExample';
import Header from './Components/Header';
import Footer from './Components/Footer';
import {
  BrowserRouter as Router,  
  Routes,
  Route,
  Link
} from "react-router-dom";

import Home from './Views/Home';
import About from './Views/About';


function App() {
  return (
    <div>
      <Header />
      <HelloWorld name="Claudia" />
      {/* <CounterExample /> */}
      
      {/* All links must be within a Router element */}
      <Router>
        <ul>
          <li>
            <Link to="/" className="text-blue-500">Home</Link>
          </li>
          <li>
            <Link to="/about" className="text-blue-500">About</Link>
          </li>
        </ul>

        <Routes>
          <Route exact path="/" element={<Home />}></Route>
          <Route exact path="/about" element={<About />}></Route>
        </Routes>
      </Router>
      <Footer />

    </div>
  );
}

export default App;
