import { useState, useRef, useEffect } from 'react';
import About from './components/About/About';
import TodoList from './components/TodoList/TodoList';
import Footer from './components/Footer/Footer';
import './App.css';

const LOCAL_STORAGE_KEY = 'todoApp.todos';

function App() {
  const [todos, setTodos] = useState([]);
  const newTodoInputValue = useRef();

  // Local storage
  useEffect(() => {
    const storedTodos = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY));
    if (storedTodos) setTodos(storedTodos);
  }, []);

  useEffect(() => {
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(todos));
  }, [todos]);

  // Checkbox toggle function
  function toggleCheckbox(id) {
    const newTodos = [...todos];
    const todo = newTodos.find((todo) => todo.id === id);
    todo.complete = !todo.complete;
    setTodos(newTodos);
  }

  // Handler function
  // Add Todo
  function _addTodo(e) {
    const newValue = newTodoInputValue.current.value;
    const index = Date.now().toString();
    // console.log(index);
    // console.log(newValue);
    // Not to add empty list
    if (newValue === '') return;
    setTodos((previousTodos) => {
      return [...previousTodos, { id: index, name: newValue, complete: false }];
    });
    // Clear input after adding
    newTodoInputValue.current.value = null;
  }
  // Handler function
  // Clear Completed Todo
  function _clearCompleted(e) {
    // console.log('clear');
    const newTodos = todos.filter((todo) => !todo.complete);
    // console.log(newTodos);
    setTodos(newTodos);
  }

  // Handler function
  // Delete Single Todo
  function _deleteTodo1(e) {
    // console.log('_deleteTodo');
    // console.log(e);
    const newTodosAfterDeleted = todos.filter((todo) => todo.id !== e);
    // console.log(newTodosAfterDeleted);
    setTodos(newTodosAfterDeleted);
  }

  return (
    <>
      <div className="main">
        <div className="About">
          <About />
        </div>
        <div className="TodoList">
          <div className="todolistComponents">
            <TodoList
              todos={todos}
              toggleCheckbox={toggleCheckbox}
              deleteTodo2={_deleteTodo1}
            />
            <input
              className="input"
              type="text"
              placeholder="Type your Todo here"
              ref={newTodoInputValue}
            ></input>
            <div className="buttons">
              <button onClick={_addTodo}>Add Todo</button>
              <button onClick={_clearCompleted}>Clear Completed Todo</button>
            </div>
            <div className="status">
              <div>Total Todo number: {todos.length}</div>
              <div>
                {todos.filter((todo) => !todo.complete).length} Todo(s) left
              </div>
            </div>
          </div>
        </div>
        <div className="Footer">
          <Footer />
        </div>
      </div>
    </>
  );
}

export default App;
