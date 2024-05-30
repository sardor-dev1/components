import "./footer.scss";

import insta from "../../assets/images/footer/insta.svg";
import linkedin from "../../assets/images/footer/Linkedin.svg";
import twitter from "../../assets/images/footer/twitter.svg";
import img from "../../assets/images/footer/in.svg";

const Footer = () => {
  return (
    <div className="container">
      <div className="footer">
        <div className="footer__links">
          <a href="#">
            <img src={insta} alt="" />
          </a>
          <a href="#">
            <img src={linkedin} alt="" />
          </a>
          <a href="#">
            <img src={twitter} alt="" />
          </a>
          <a href="#">
            <img src={img} alt="" />
          </a>
        </div>
        <a href="#" className="footer__bottom">Copyright ©2020 All rights reserved </a>
      </div>
    </div>
  );
};

export default Footer;
