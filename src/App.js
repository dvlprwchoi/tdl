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
        <input className="input" type="text"></input>
        <div className="buttons">
          <button>Add Todo</button>
          <button>Delete Todo</button>
          <button>Clear Completed Todo</button>
        </div>
        <div className="status">
          <div>Total Todo number: 0</div>
          <div>0 Todo left</div>
        </div>
      </div>
      <div className="Footer">
        <Footer />
      </div>
    </>
  );
}

export default App;
