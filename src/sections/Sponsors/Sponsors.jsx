import "./Sponsors.css";
import banner from "../../assets/pieces/beige_banner.svg";

import comptiaLogo from "../../assets/pieces/comptia_logo.png";
import zebraLogo from "../../assets/pieces/zebra_logo.png";
import sansLogo from "../../assets/pieces/SANS.png";

const sponsors = [
  { id: 1, name: "Comptia", logo: comptiaLogo, scaleX: 0.45, scaleY: 0.6 },
  { id: 2, name: "Zebra", logo: zebraLogo, scaleX: 0.6, scaleY: 0.6 },
  { id: 3, name: "SANS", logo: sansLogo, scaleX: 0.55, scaleY: 0.45 },
];

export default function Sponsors() {
  const centerIndex = Math.floor(sponsors.length / 2);

  return (
    <div className="sponsors-root">
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

              <div className="banner-logo">
                <img 
                  src={sponsor.logo}
                  alt={`${sponsor.name} logo`}
                  style={{
                    transform: `scale(${sponsor.scaleX || 0.7}, ${sponsor.scaleY || 0.7})`,
                  }}
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
