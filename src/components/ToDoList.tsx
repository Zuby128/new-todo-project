function ToDoList() {
  return (
    <div className="todo-left__content">
      {/* todo left content checkbox */}
      <div className="todo-left__content-checkbox">
        <div className="custom-checkbox">
          <input type="checkbox" id="i" />

          <label htmlFor="i" className="checkbox">
            <div className="checkbox__inner">
              <div className="ball"></div>
              <div className="text">text</div>
            </div>
          </label>
        </div>
        <button>Edit</button>
      </div>
      <div className="todo-left__content-add">
        {/* todo left content add button */}
        <button>+</button>
      </div>
    </div>
  );
}

export default ToDoList;
