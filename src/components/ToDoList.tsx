import useTodoStore from "../store/todoStore";

function ToDoList() {
  const todos = useTodoStore((state) => state.todos);
  const toggleTodo = useTodoStore((state) => state.toggleTodo);
  const selectTodo = useTodoStore((state) => state.selectTodo);

  return (
    <div className="todo-left__content">
      {/* todo left content checkbox */}
      {todos.map((v) => (
        <div className="todo-left__content-checkbox" key={v.id}>
          <div className="custom-checkbox">
            <input
              type="checkbox"
              id={v.id}
              checked={v.isComplete}
              onChange={() => {
                toggleTodo(v.id);
                selectTodo(v.id);
              }}
            />

            <label htmlFor={v.id} className="checkbox">
              <div className="checkbox__inner">
                <div className="ball"></div>
                <div className="text">{v.text}</div>
              </div>
            </label>
          </div>
          <button>Edit</button>
        </div>
      ))}
      <div className="todo-left__content-add">
        {/* todo left content add button */}
        <button>+</button>
      </div>
    </div>
  );
}

export default ToDoList;
