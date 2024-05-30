import "./posts.scss";

const Posts = () => {
  return (
    <div className="container posts">
      <div className="posts__header">
        <p className="posts__header__text">Recent posts</p>
        <div className="posts__header__link">
          <a href="#">View all</a>
        </div>
      </div>
      <div className="posts__cards">
        <div className="posts__card">
          <h3 className="posts__card__title">a design system from scratch</h3>
          <div className="posts__card__body">
            <p>12 Feb 2020</p>
            <p>Design, Pattern</p>
          </div>
          <p>
            Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet
            sint. Velit officia consequat duis enim velit mollit. Exercitation
            veniam consequat sunt nostrud amet.
          </p>
        </div>
        <div className="posts__card">
          <h3 className="posts__card__title">a design system from scratch</h3>
          <div className="posts__card__body">
            <p>12 Feb 2020</p>
            <p>Design, Pattern</p>
          </div>
          <p>
            Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet
            sint. Velit officia consequat duis enim velit mollit. Exercitation
            veniam consequat sunt nostrud amet.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Posts;
