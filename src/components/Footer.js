import "../styles/Footer.css";
import gitHubSVG from "../assets/github.svg";
const Footer = () => {
  return (
    <div className="footer">
      My Github
      <img src={gitHubSVG} alt=""></img>
    </div>
  );
};
export default Footer;
