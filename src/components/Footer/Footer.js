import "./Footer.css";
import {
  FaFacebookSquare,
  FaInstagramSquare,
  FaTwitterSquare,
  FaYoutubeSquare,
} from "react-icons/fa";

export default function Footer() {
  return (
    <div className="footer">
      <div className="social">
        <a href="#">
          <FaFacebookSquare />
        </a>
        <a href="#">
          <FaInstagramSquare />
        </a>
        <a href="#">
          <FaTwitterSquare />
        </a>
        <a href="#">
          <FaYoutubeSquare />
        </a>
      </div>
      <span>
        © 2021 AstroX. Os jogos são propriedade de seus respectivos donos.
      </span>
    </div>
  );
}
