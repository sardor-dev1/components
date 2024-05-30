import "./card.scss"
// import "../data/data"


const Card = ({ title, year, category, description, imageUrl }) => (
  <div className="featured__card">
    <div className="featured__card__img">
      <img src={imageUrl} alt={title} />
    </div>
    <div className="featured__card__info">
      <h3 className="featured__card__info__title">{title}</h3>
      <div className="featured__card__info__btn">
        <button>{year}</button>
        <p>{category}</p>
      </div>
      <p className="featured__card__info__text">{description}</p>
    </div>
  </div>
);

export default Card;
