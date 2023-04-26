import logo from './logo.svg';
import HelloWorld from './Components/HelloWord';
import CounterExample from './Components/CounterExample';
import Header from './Components/Header';
import Footer from './Components/Footer';

function App() {
  return (
    <div>
      <Header />
      <HelloWorld name="Claudia" />
      {/* <CounterExample /> */}
      <Footer />

    </div>
  );
}

export default App;
