import "./SocialMedia.css";
import { FaInstagram, FaLinkedin, FaDiscord} from "react-icons/fa6";

import gem1 from "../../assets/pieces/gem1.svg";
import gem2 from "../../assets/pieces/gem2.svg";

export default function SocialMedia() {
  return (
    <section className="socials">
      <h3>Follow Us</h3>

      <ul className="social-links">
        <li className="pos-2">
          <a  href="https://www.instagram.com/wicysatuic"
              target="_blank"
              rel="noopener noreferrer"
              className="social-gem">
            <img src={gem1} alt="" className="gem-bg" />
            <FaInstagram />
          </a>
        </li>
        
        <li className="pos-4">
          <a  href="https://www.linkedin.com/company/wicysuic"
              target="_blank"
              rel="noopener noreferrer"
              className="social-gem">
            <img src={gem2} alt="" className="gem-bg" />
            <FaLinkedin />
          </a>
        </li>

        <li className="pos-6">
          <a  href="https://discord.gg/3bR8XUnzp5"
              target="_blank"
              rel="noopener noreferrer"
            className="social-gem">
            <img src={gem1} alt="" className="gem-bg" />
            <FaDiscord />
          </a>
        </li>
      </ul>
    </section>
  );
}
