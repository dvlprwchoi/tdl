import About from './components/About/About';
import TodoList from './components/TodoList/TodoList';
import Footer from './components/Footer/Footer';
import './App.css';

function App() {
  return (
    <>
      <div className="About">
        <About />
      </div>
      <div className="TodoList">
        <TodoList />
      </div>
      <div className="Footer">
        <Footer />
      </div>
    </>
  );
}

export default App;
