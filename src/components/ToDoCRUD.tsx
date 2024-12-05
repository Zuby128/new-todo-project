function ToDoCRUD() {
  return (
    <div className="todo-right__content">
      {/* todo right content part top */}
      <div className="todo-right__content-top">
        <form>
          <label htmlFor="task">Task Name</label>
          <input type="text" id="task" name="task" />
        </form>
      </div>
      {/* todo right content part bottom */}
      <div className="todo-right__content-bottom">
        <div>
          <button className="delete">Delete</button>
        </div>
        <div>
          <button className="save">Save</button>
        </div>
      </div>
    </div>
  );
}

export default ToDoCRUD;
