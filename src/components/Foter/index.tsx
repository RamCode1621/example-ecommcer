import "./index.css";
import Facebook from "../../assets/facebook.svg";
import Twitter from "../../assets/twitter.svg";
import Linkedin from "../../assets/linkedin.svg";
import Github from "../../assets/github.svg";

const Footer = () => {
  return (
    <footer className="footer-distributed">
      <div className="footer-right">
        <div className="contentIcons">
          <a className="footer-social-icon" href="#">
            <img src={Facebook} alt="facebook" />
          </a>
          <a className="footer-social-icon" href="#">
            <img src={Twitter} />
          </a>
          <a className="footer-social-icon" href="#">
            <img src={Linkedin} />
          </a>
          <a className="footer-social-icon" href="#">
            <img src={Github} />
          </a>
        </div>
      </div>

      <div className="footer-left">
        <p className="footer-links">
          <a className="link-1" href="#">
            Home
          </a>

          <a href="#">Blog</a>

          <a href="#">Pricing</a>

          <a href="#">About</a>

          <a href="#">Faq</a>

          <a href="#">Contact</a>
        </p>

        <p>E-Commerce By Richard & Elian, &copy; 2023</p>
      </div>
    </footer>
  );
};

export default Footer;
