import Card from "../card/Card.jsx";
import featuredData from "../data/data.jsx";

const Featured = () => (
  <div className="container">
    <div className="featured">
      {featuredData.map(
        ({ id, title, year, category, description, imageUrl }) => (
          <Card
            key={id}
            title={title}
            year={year}
            category={category}
            description={description}
            imageUrl={imageUrl}
          />
        )
      )}
    </div>
  </div>
);

export default Featured;
