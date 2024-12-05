import profileImg from "../assets/images/profile.png";

function Profile() {
  return (
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
  );
}

export default Profile;
