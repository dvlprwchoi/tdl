import { useState, useRef } from 'react';
import About from './components/About/About';
import TodoList from './components/TodoList/TodoList';
import Footer from './components/Footer/Footer';
import './App.css';

function App() {
  const [todos, setTodos] = useState([
    // { id: 1, name: 'Todo 1', complete: false },
    // { id: 2, name: 'Todo 2', complete: false },
    // { id: 3, name: 'Todo 3', complete: true },
  ]);
  const newTodoInputValue = useRef();

  // Handler function
  // Add Todo
  function _addTodo(e) {
    const newValue = newTodoInputValue.current.value;
    // console.log(newValue);
    // Not to add empty list
    if (newValue === '') return;
    setTodos((previousTodos) => {
      return [...previousTodos, { name: newValue, complete: false }];
    });
    // Clear input after adding
    newTodoInputValue.current.value = null;
  }
  // Handler function
  // Clear Completed Todo
  function _clearCompleted(e) {
    console.log('clear');
  }

  return (
    <>
      <div className="About">
        <About />
      </div>
      <div className="TodoList">
        <TodoList todos={todos} />
        <input className="input" type="text" ref={newTodoInputValue}></input>
        <div className="buttons">
          <button onClick={_addTodo}>Add Todo</button>
          <button>Delete Todo</button>
          <button onClick={_clearCompleted}>Clear Completed Todo</button>
        </div>
        <div className="status">
          <div>Total Todo number: {todos.length}</div>
          <div>
            {todos.filter((todo) => !todo.complete).length} Todo(s) left
          </div>
        </div>
      </div>
      <div className="Footer">
        <Footer />
      </div>
    </>
  );
}

export default App;
