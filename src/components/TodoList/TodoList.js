import Todo from '../Todo/Todo';

function TodoList({ todos, toggleCheckbox, deleteTodo2 }) {
  return (
    <div className="pane">
      <h1>Todo List</h1>
      {todos.map((todo) => {
        return (
          <Todo
            key={todo.id}
            toggleCheckbox={toggleCheckbox}
            todo={todo}
            deleteTodo3={deleteTodo2}
          />
        );
      })}
    </div>
  );
}

export default TodoList;
