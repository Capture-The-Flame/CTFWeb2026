import "./SocialMedia.css";
import { FaInstagram, FaLinkedin, FaDiscord} from "react-icons/fa6";

export default function SocialMedia() {
  return (
    <section className="socials">
      <h3>Follow Us</h3>

      <ul className="social-links">
        <li>
          <a href="https://www.instagram.com/wicysatuic" target="_blank">
            <FaInstagram />
            <span>Instagram</span>
          </a>
        </li>
        <li>
          <a href="https://www.linkedin.com/company/wicysuic" target="_blank">
            <FaLinkedin />
            <span>Linkedin</span>
          </a>
        </li>
        <li>
          <a href="https://discord.gg/3bR8XUnzp5" target="_blank">
            <FaDiscord />
            <span>Discord</span>
          </a>
        </li>
      </ul>
    </section>
  );
}
