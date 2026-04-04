import "./SocialMedia.css";
import { FaInstagram, FaLinkedin, FaDiscord} from "react-icons/fa6";

import gem from "../../assets/pieces/gem1.svg";

export default function SocialMedia() {
  return (

    <section className="socials">

      <ul className="social-links">
        <li>
          <a  href="https://www.instagram.com/capturetheflame.chicago/"
              target="_blank"
              rel="noopener noreferrer"
              className="social-gem">
            <img src={gem} alt="" className="gem-bg" />
            <FaInstagram />
          </a>
        </li>
        
        <li>
          <a  href="https://www.linkedin.com/company/capture-the-flame"
              target="_blank"
              rel="noopener noreferrer"
              className="social-gem">
            <img src={gem} alt="" className="gem-bg" />
            <FaLinkedin />
          </a>
        </li>

        <li>
          <a  href="https://discord.gg/RTSwT29Pmz"
              target="_blank"
              rel="noopener noreferrer"
            className="social-gem">
            <img src={gem} alt="" className="gem-bg" />
            <FaDiscord />
          </a>
        </li>
      </ul>
    </section>
  );
}
