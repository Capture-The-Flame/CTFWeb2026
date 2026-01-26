import "./Sponsors.css";
import banner from "../../assets/backgroundArt/ctf_banner_00.svg";

const sponsors = [
  { id: 1, name: "Sponsor 1", tier: "featured" },
  { id: 2, name: "Sponsor 2" },
  { id: 3, name: "Sponsor 3" },
];

export default function Sponsors() {
  return (
    <div className="sponsors-root">
      <div className="banner-safezone">
        <div className="banner-row">
          {sponsors.map((sponsor, index) => (
            <div
              key={sponsor.id}
              className={`banner banner--${index} ${
                sponsor.tier === "featured" ? "banner--featured" : ""
              }`}>
              <img src={banner} alt="sponsor banner" />
              <span className="banner-label">{sponsor.name}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
