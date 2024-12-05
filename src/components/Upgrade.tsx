import cupImg from "../assets/images/champ-cup.png";

function Upgrade() {
  return (
    <div className="todo-left__upgrade">
      <div className="single-border"></div>
      <a href="#" className="todo-left__upgrade-header">
        <img src={cupImg} alt="upgrade" />
        <div className="todo-left__upgrade-header-text">Go Pro Upgrade Now</div>
      </a>
      <div className="todo-left__upgrade-static">$1</div>
    </div>
  );
}

export default Upgrade;
