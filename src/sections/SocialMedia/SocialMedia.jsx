import "./SocialMedia.css";
import { FaInstagram} from "react-icons/fa6";

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
        add linkedin, discord server
      </ul>
    </section>
  );
}
