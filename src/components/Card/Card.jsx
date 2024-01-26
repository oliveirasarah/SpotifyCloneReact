import "./Card.scss";

function Card({ id, src, label }) {
  return (
    <a className="cards" href="#">
      <div className={`cards card${id}`}></div>
      <img src={src} alt="" />
      <span>{label}</span>
    </a>
  );
}

export default Card;
