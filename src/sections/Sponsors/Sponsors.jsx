import "./Sponsors.css";
import banner from "../../assets/backgroundArt/ctf_banner_00.svg";

const sponsors = [
  { id: 1, name: "Sponsor 1" },
  { id: 2, name: "Sponsor 2" },
  { id: 3, name: "Sponsor 3" },
  { id: 4, name: "Sponsor 4" },
  { id: 5, name: "Sponsor 5" },
];

export default function Sponsors() {
  const centerIndex = Math.floor(sponsors.length / 2);

  return (
    <div className="sponsors-root">
      <div className="banner-safezone">
        <div className="banner-row">
          {sponsors.map((sponsor, index) => (
            <div
              key={sponsor.id}
              className={`banner
                banner--${index - centerIndex}
                ${index === centerIndex ? "banner--featured" : ""}
              `}
            >
              <img src={banner} alt={`${sponsor.name} banner`} />
              <span className="banner-label">{sponsor.name}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
