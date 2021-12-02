import About from './components/About/About';
import Footer from './components/Footer/Footer';
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <>
      <div className="About">
        <About />
      </div>
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header>
      </div>
      <div className="Footer">
        <Footer />
      </div>
    </>
  );
}

export default App;
