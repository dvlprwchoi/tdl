import Todo from '../Todo/Todo';

function TodoList({ todos }) {
  return (
    <div>
      <h1>Todo List</h1>
      {todos.map((todo) => {
        return <Todo todo={todo} />;
      })}
    </div>
  );
}

export default TodoList;
