import { Fragment } from "react";
import "./home.scss";
import HomeHero from "../../components/home-hero/HomeHero";
import Featured from "../../components/home-featured/Featured";
import Footer from "../../layout/footer/Footer";
import Posts from "../../components/posts/Posts";
const Home = () => {
  return (
    <Fragment>
      <HomeHero />
      <Posts/>
      <Featured />
      <Footer/>
    </Fragment>
  );
};

export default Home;
