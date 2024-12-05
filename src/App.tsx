import ToDoList from "./components/ToDoList";
import Profile from "./components/Profile";
import Upgrade from "./components/Upgrade";
import ToDoCRUD from "./components/ToDoCRUD";

function App() {
  return (
    <div className="app">
      <div className="todo">
        {/* todo left part */}
        <div className="todo-left">
          {/* todo left header part */}
          <Profile />

          {/* todo left upgrade part */}
          <Upgrade />

          {/* todo left content part */}
          <ToDoList />
        </div>

        {/* todo right part */}
        <div className="todo-right">
          {/* todo right header part */}
          <div className="todo-right__header header">Edit Task</div>
          {/* todo right content part */}
          <ToDoCRUD />
        </div>
      </div>
    </div>
  );
}

export default App;
