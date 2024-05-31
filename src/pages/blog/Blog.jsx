import React from "react";
import "./blog.scss";
import blogData from "../../components/blog-data/blogData";

const Blog = () => {
  return (
    <div className="container blog">
      <h1 className="blog__title">Blog</h1>

      <div className="blog__cards">
        {blogData.map((post, index) => (
          <div key={index} className="blog__card">
            <h2 className="blog__card__title">{post.title}</h2>
            <div className="blog__card__body">
              <p>{post.date}</p>
              <p>{post.technologies}</p>
            </div>
            <p className="blog__card__text">{post.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Blog;
