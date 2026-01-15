import "./Team.css";

export default function Team() {
  const teamMembers = [
    {
      name: "A",
      role: "Team Lead",
      namebg: "../../src/assets/profilepics/old-scroll.png",
      image: "../../src/assets/profilepics/Laios_AB_Profile.webp",
      hoverImage: "../../src/assets/profilepics/dungeon-meshi-laios.png", // Add hover image
      linkedin: "https://linkedin.com/in/ayekyawtzin"
    },
    {
      name: "B",
      role: "Member",
      namebg: "../../src/assets/profilepics/old-scroll.png",
      image: "../../src/assets/profilepics/Laios_AB_Profile.webp",
      hoverImage: "../../src/assets/profilepics/dungeon-meshi-laios.png",
      linkedin: "https://linkedin.com/in/ayekyawtzin"
    },
    {
      name: "C",
      role: "Member",
      namebg: "../../src/assets/profilepics/old-scroll.png",
      image: "../../src/assets/profilepics/Laios_AB_Profile.webp",
      hoverImage: "../../src/assets/profilepics/dungeon-meshi-laios.png",
      linkedin: "https://linkedin.com/in/ayekyawtzin"
    },
    {
      name: "D",
      role: "Member",
      namebg: "../../src/assets/profilepics/old-scroll.png",
      image: "../../src/assets/profilepics/Laios_AB_Profile.webp",
      hoverImage: "../../src/assets/profilepics/dungeon-meshi-laios.png",
      linkedin: "https://linkedin.com/in/ayekyawtzin"
    },
    {
      name: "E",
      role: "Team Lead",
      namebg: "../../src/assets/profilepics/old-scroll.png",
      image: "../../src/assets/profilepics/Laios_AB_Profile.webp",
      hoverImage: "../../src/assets/profilepics/dungeon-meshi-laios.png", // Add hover image
      linkedin: "https://linkedin.com/in/ayekyawtzin"
    },
    {
      name: "F",
      role: "Member",
      namebg: "../../src/assets/profilepics/old-scroll.png",
      image: "../../src/assets/profilepics/Laios_AB_Profile.webp",
      hoverImage: "../../src/assets/profilepics/dungeon-meshi-laios.png",
      linkedin: "https://linkedin.com/in/ayekyawtzin"
    },
    {
      name: "G",
      role: "Member",
      namebg: "../../src/assets/profilepics/old-scroll.png",
      image: "../../src/assets/profilepics/Laios_AB_Profile.webp",
      hoverImage: "../../src/assets/profilepics/dungeon-meshi-laios.png",
      linkedin: "https://linkedin.com/in/ayekyawtzin"
    },
    {
      name: "H",
      role: "Member",
      namebg: "../../src/assets/profilepics/old-scroll.png",
      image: "../../src/assets/profilepics/Laios_AB_Profile.webp",
      hoverImage: "../../src/assets/profilepics/dungeon-meshi-laios.png",
      linkedin: "https://linkedin.com/in/ayekyawtzin"
    },
    {
      name: "I",
      role: "Team Lead",
      namebg: "../../src/assets/profilepics/old-scroll.png",
      image: "../../src/assets/profilepics/Laios_AB_Profile.webp",
      hoverImage: "../../src/assets/profilepics/dungeon-meshi-laios.png", // Add hover image
      linkedin: "https://linkedin.com/in/ayekyawtzin"
    },
    {
      name: "J",
      role: "Member",
      namebg: "../../src/assets/profilepics/old-scroll.png",
      image: "../../src/assets/profilepics/Laios_AB_Profile.webp",
      hoverImage: "../../src/assets/profilepics/dungeon-meshi-laios.png",
      linkedin: "https://linkedin.com/in/ayekyawtzin"
    },
    {
      name: "K",
      role: "Member",
      namebg: "../../src/assets/profilepics/old-scroll.png",
      image: "../../src/assets/profilepics/Laios_AB_Profile.webp",
      hoverImage: "../../src/assets/profilepics/dungeon-meshi-laios.png",
      linkedin: "https://linkedin.com/in/ayekyawtzin"
    },
    {
      name: "L",
      role: "Member",
      namebg: "../../src/assets/profilepics/old-scroll.png",
      image: "../../src/assets/profilepics/Laios_AB_Profile.webp",
      hoverImage: "../../src/assets/profilepics/dungeon-meshi-laios.png",
      linkedin: "https://linkedin.com/in/ayekyawtzin"
    },
    {
      name: "M",
      role: "Team Lead",
      namebg: "../../src/assets/profilepics/old-scroll.png",
      image: "../../src/assets/profilepics/Laios_AB_Profile.webp",
      hoverImage: "../../src/assets/profilepics/dungeon-meshi-laios.png", // Add hover image
      linkedin: "https://linkedin.com/in/ayekyawtzin"
    },
    {
      name: "N",
      role: "Member",
      namebg: "../../src/assets/profilepics/old-scroll.png",
      image: "../../src/assets/profilepics/Laios_AB_Profile.webp",
      hoverImage: "../../src/assets/profilepics/dungeon-meshi-laios.png",
      linkedin: "https://linkedin.com/in/ayekyawtzin"
    },
    {
      name: "O",
      role: "Member",
      namebg: "../../src/assets/profilepics/old-scroll.png",
      image: "../../src/assets/profilepics/Laios_AB_Profile.webp",
      hoverImage: "../../src/assets/profilepics/dungeon-meshi-laios.png",
      linkedin: "https://linkedin.com/in/ayekyawtzin"
    },
    {
      name: "P",
      role: "Member",
      namebg: "../../src/assets/profilepics/old-scroll.png",
      image: "../../src/assets/profilepics/Laios_AB_Profile.webp",
      hoverImage: "../../src/assets/profilepics/dungeon-meshi-laios.png",
      linkedin: "https://linkedin.com/in/ayekyawtzin"
    },
  ];

  return(
    <section className="team-section" id="team">
      <h1>Meet The Team</h1> {/* Maybe need a unform title format, tbd */}
      <div className="team-grid">
        {teamMembers.map((member, index) => (
          <a 
            key={index}
            href={member.linkedin} 
            target="_blank" 
            rel="noopener noreferrer"
            className="team-card"
          >
            <div className="team-image-container">
              <img src={member.image} alt={member.name} className="team-image default" />
              <img src={member.hoverImage} alt={member.name} className="team-image hover" />
            </div>
            <div className="team-info">
              <h3>{member.name}</h3>
              <p>{member.role}</p>
            </div>  
          </a>
        ))}
      </div>
    </section>
  );
}