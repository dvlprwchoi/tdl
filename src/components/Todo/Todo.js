function Todo({ todo, toggleCheckbox, deleteTodo3 }) {
  // Handle function
  // Checkbox click
  function _checkboxClick() {
    // console.log('Checkbox is clicked');
    toggleCheckbox(todo.id);
  }
  // Delete Todo
  function _deleteButtonClick() {
    // console.log('delete button clicked');
    deleteTodo3(todo.id);
  }

  return (
    <div className="singleTodo">
      <label>
        <input
          type="checkbox"
          checked={todo.complete}
          onChange={_checkboxClick}
        />
        {todo.name}
        <button className="deleteTodoButton" onClick={_deleteButtonClick}>
          Delete
        </button>
      </label>
    </div>
  );
}

export default Todo;
