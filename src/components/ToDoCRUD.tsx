import { useState } from "react";
import useTodoStore from "../store/todoStore";

function ToDoCRUD() {
  const [text, setText] = useState<string>("");
  const addTodo = useTodoStore((state) => state.addTodo);
  const removeTodo = useTodoStore((state) => state.removeTodo);
  const selected = useTodoStore((state) => state.todo);

  const handleAdd = () => {
    if (text.trim()) {
      addTodo(text);
      setText("");
    }
  };

  return (
    <div className="todo-right__content">
      {/* todo right content part top */}
      <div className="todo-right__content-top">
        <form>
          <label htmlFor="task">Task Name</label>
          <input
            type="text"
            id="task"
            name="task"
            onChange={(e) => setText(e.target.value)}
            value={text}
          />
        </form>
      </div>
      {/* todo right content part bottom */}
      <div className="todo-right__content-bottom">
        <div>
          <button
            className="delete"
            onClick={() => {
              if (!selected) return;
              removeTodo(selected.id);
            }}
            disabled={!selected}
          >
            Delete
          </button>
        </div>
        <div>
          <button className="save" onClick={handleAdd} disabled={!text}>
            Save
          </button>
        </div>
      </div>
    </div>
  );
}

export default ToDoCRUD;
