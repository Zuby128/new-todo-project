import profileImg from "./assets/images/profile.png";
import cupImg from "./assets/images/champ-cup.png";

function App() {
  return (
    <div className="app">
      <div className="todo">
        {/* todo left part */}
        <div className="todo-left">
          {/* todo left header part */}
          <div className="todo-left__header header">
            <img src={profileImg} alt="profile-img" />
            <div className="todo-left__header-texts">
              <span className="top">Hello, John</span>
              <span className="bottom">
                What are your plans <br />
                for today?
              </span>
            </div>
          </div>

          {/* todo left upgrade part */}
          <div className="todo-left__upgrade">
            <div className="single-border"></div>
            <div className="todo-left__upgrade-header">
              <img src={cupImg} alt="upgrade" />
              <div className="todo-left__upgrade-header-text">
                Go Pro Upgrade Now
              </div>
            </div>
            <div className="todo-left__upgrade-static">$1</div>
          </div>

          {/* todo left content part */}
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
        </div>

        {/* todo right part */}
        <div className="todo-right">
          {/* todo right header part */}
          <div className="todo-right__header header">Edit Task</div>
          {/* todo right content part */}
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
        </div>
      </div>
    </div>
  );
}

export default App;
