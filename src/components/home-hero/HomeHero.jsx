import React, { Fragment } from 'react'
import heroImg from "../../assets/images/home/hero/heroImg.png"
import "./home-hero.scss"

const HomeHero = () => {
  return (
    <Fragment>
      <div className="container">
        <div className='hero'>
          <div className="hero__info">
            <h1 className="hero__info__title">
              Hi, I am John, Creative Technologist
            </h1>
            <p className="hero__info__text">
              Amet minim mollit non deserunt ullamco est sit aliqua dolor do
              amet sint. Velit officia consequat duis enim velit mollit.
              Exercitation veniam consequat sunt nostrud amet.
            </p>
            <button className="btn btn-danger">Download Resume</button>
          </div>
          <div className="hero__img">
            <img src={heroImg} alt="" />
          </div>
        </div>
      </div>
    </Fragment>
  );
}

export default HomeHero