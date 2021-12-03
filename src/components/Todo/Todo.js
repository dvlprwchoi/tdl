function Todo({ todo, toggleCheckbox }) {
  // Handle function
  // Checkbox click
  function _checkboxClick() {
    // console.log('Checkbox is clicked');
    toggleCheckbox(todo.id);
  }
  return (
    <div>
      <label>
        <input
          type="checkbox"
          checked={todo.complete}
          onChange={_checkboxClick}
        />
        {todo.name}
      </label>
    </div>
  );
}

export default Todo;
