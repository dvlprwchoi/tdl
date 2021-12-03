import Todo from '../Todo/Todo';

function TodoList({ todos, toggleCheckbox }) {
  return (
    <div>
      <h1>Todo List</h1>
      {todos.map((todo) => {
        return (
          <Todo key={todo.id} toggleCheckbox={toggleCheckbox} todo={todo} />
        );
      })}
    </div>
  );
}

export default TodoList;
