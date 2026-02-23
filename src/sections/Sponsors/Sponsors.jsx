import "./Sponsors.css";
import banner from "../../assets/pieces/ctf_banner_00.svg";
import garland from "../../assets/pieces/sponsors_banner.svg";

const sponsors = [
  { id: 1, name: "Comptia" },
  { id: 2, name: "Zebra" },
  { id: 3, name: "SANS" },
];

export default function Sponsors() {
  const centerIndex = Math.floor(sponsors.length / 2);

  return (
    <div className="sponsors-root">
      
      {/* Flag Garland */}
      <div className="garland">
        <img src={garland} alt="Sponsors flag garland" />
      </div>

      {/* Sponsor Banners */}
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
