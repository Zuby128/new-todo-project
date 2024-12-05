import { useEffect, useState } from "react";
import useTodoStore from "../store/todoStore";

function ToDoCRUD() {
  const [text, setText] = useState<string>("");
  const addTodo = useTodoStore((state) => state.addTodo);
  const removeTodo = useTodoStore((state) => state.removeTodo);
  const editTodo = useTodoStore((state) => state.editTodo);
  const selectTodo = useTodoStore((state) => state.selectTodo);
  const selected = useTodoStore((state) => state.todo);

  useEffect(() => {
    setSelectedValue();
  }, [selected]);

  const setSelectedValue = () => {
    if (selected) setText(selected?.text);
  };

  const handleAdd = () => {
    if (text.trim()) {
      if (selected?.id) {
        editTodo(selected.id, text);
        setText("");
        selectTodo(null);
      } else {
        addTodo(text);
        setText("");
      }
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
