import "./Team.css";
import vertical_scroll from "../../assets/pieces/vertical_scroll_00_transparent.svg";
import director_emblems from "../../assets/pieces/ctf_emblems_director.png";
import comms_emblems from "../../assets/pieces/ctf_emblems_comms.png";
import exp_emblems from "../../assets/pieces/ctf_emblems_exp.png";
import log_emblems from "../../assets/pieces/ctf_emblems_log.png";
import outreach_emblems from "../../assets/pieces/ctf_emblems_outreach.png";
import webdev_emblems from "../../assets/pieces/ctf_emblems_webdev.png";

export default function Team() {
  const directors = [
    {
      name: "Coda Richmond",
      role: "Co-Director",
      image: "../../src/assets/profilepics/Laios_AB_Profile.webp",
      hoverImage: "../../src/assets/profilepics/dungeon-meshi-laios.png", 
      linkedin: "https://linkedin.com/in/coda",
      emblems: director_emblems
    },
    {
      name: "Fatima Mora Garcia",
      role: "Co-Director",
      image: "../../src/assets/profilepics/Laios_AB_Profile.webp",
      hoverImage: "../../src/assets/profilepics/dungeon-meshi-laios.png", 
      linkedin: "https://linkedin.com/in/fatima",
      emblems: director_emblems
    }
  ]
  const commsMembers = [
    {
      name: "Comms Lead",
      role: "Communications Lead",
      image: "../../src/assets/profilepics/Laios_AB_Profile.webp",
      hoverImage: "../../src/assets/profilepics/dungeon-meshi-laios.png", 
      linkedin: "https://linkedin.com/in/xxx",
      emblems: comms_emblems
    },
    {
      name: "Comms Member 1",
      role: "Communications Member",
      image: "../../src/assets/profilepics/Laios_AB_Profile.webp",
      hoverImage: "../../src/assets/profilepics/dungeon-meshi-laios.png", 
      linkedin: "https://linkedin.com/in/xxx",
      emblems: comms_emblems
    },
    {
      name: "Comms Member 2",
      role: "Communications Member",
      image: "../../src/assets/profilepics/Laios_AB_Profile.webp",
      hoverImage: "../../src/assets/profilepics/dungeon-meshi-laios.png",
      linkedin: "https://linkedin.com/in/xxx",
      emblems: comms_emblems
    },
    {
      name: "Comms Member 3",
      role: "Communications Member",
      image: "../../src/assets/profilepics/Laios_AB_Profile.webp",
      hoverImage: "../../src/assets/profilepics/dungeon-meshi-laios.png",
      linkedin: "https://linkedin.com/in/xxx",
      emblems: comms_emblems
    },
  ]
  const expMembers = [
    {
      name: "Exp Lead",
      role: "Experience Lead",
      image: "../../src/assets/profilepics/Laios_AB_Profile.webp",
      hoverImage: "../../src/assets/profilepics/dungeon-meshi-laios.png",
      linkedin: "https://linkedin.com/in/xxx",
      emblems: exp_emblems
    },
    {
      name: "Exp Member 1",
      role: "Experience Member",
      image: "../../src/assets/profilepics/Laios_AB_Profile.webp",
      hoverImage: "../../src/assets/profilepics/dungeon-meshi-laios.png",
      linkedin: "https://linkedin.com/in/xxx",
      emblems: exp_emblems
    },
    {
      name: "Exp Member 2",
      role: "Experience Member",
      image: "../../src/assets/profilepics/Laios_AB_Profile.webp",
      hoverImage: "../../src/assets/profilepics/dungeon-meshi-laios.png",
      linkedin: "https://linkedin.com/in/xxx",
      emblems: exp_emblems
    },
    {
      name: "Exp Member 3",
      role: "Experience Member",
      image: "../../src/assets/profilepics/Laios_AB_Profile.webp",
      hoverImage: "../../src/assets/profilepics/dungeon-meshi-laios.png",
      linkedin: "https://linkedin.com/in/xxx",
      emblems: exp_emblems
    },
  ]
  const logMembers = [
    {
      name: "Logistics Lead",
      role: "Logistics Lead",
      image: "../../src/assets/profilepics/Laios_AB_Profile.webp",
      hoverImage: "../../src/assets/profilepics/dungeon-meshi-laios.png",
      linkedin: "https://linkedin.com/in/xxx",
      emblems: log_emblems
    },
    {
      name: "Logistics Member 1",
      role: "Logistics Member",
      image: "../../src/assets/profilepics/Laios_AB_Profile.webp",
      hoverImage: "../../src/assets/profilepics/dungeon-meshi-laios.png",
      linkedin: "https://linkedin.com/in/xxx",
      emblems: log_emblems
    },
    {
      name: "Logistics Member 2",
      role: "Logistics Member",
      image: "../../src/assets/profilepics/Laios_AB_Profile.webp",
      hoverImage: "../../src/assets/profilepics/dungeon-meshi-laios.png",
      linkedin: "https://linkedin.com/in/xxx",
      emblems: log_emblems
    },
    {
      name: "Logistics Member 3",
      role: "Logistics Member",
      image: "../../src/assets/profilepics/Laios_AB_Profile.webp",
      hoverImage: "../../src/assets/profilepics/dungeon-meshi-laios.png",
      linkedin: "https://linkedin.com/in/xxx",
      emblems: log_emblems
    },
  ]
  const outreachMembers = [
    {
      name: "Outreach Lead",
      role: "Outreach Lead",
      image: "../../src/assets/profilepics/Laios_AB_Profile.webp",
      hoverImage: "../../src/assets/profilepics/dungeon-meshi-laios.png",
      linkedin: "https://linkedin.com/in/xxx",
      emblems: outreach_emblems
    },
    { 
      name: "Outreach Member 1",
      role: "Outreach Member",
      image: "../../src/assets/profilepics/Laios_AB_Profile.webp",
      hoverImage: "../../src/assets/profilepics/dungeon-meshi-laios.png",
      linkedin: "https://linkedin.com/in/xxx",
      emblems: outreach_emblems
    },
    { 
      name: "Outreach Member 2",
      role: "Outreach Member",
      image: "../../src/assets/profilepics/Laios_AB_Profile.webp",
      hoverImage: "../../src/assets/profilepics/dungeon-meshi-laios.png",
      linkedin: "https://linkedin.com/in/xxx",
      emblems: outreach_emblems
    },
    { 
      name: "Outreach Member 3",
      role: "Outreach Member",
      image: "../../src/assets/profilepics/Laios_AB_Profile.webp",
      hoverImage: "../../src/assets/profilepics/dungeon-meshi-laios.png",
      linkedin: "https://linkedin.com/in/xxx",
      emblems: outreach_emblems
    },
  ]
  const webdevMembers = [
    {
      name: "Martha Barraza",
      role: "Web Development Lead",
      image: "../../src/assets/profilepics/Laios_AB_Profile.webp",
      hoverImage: "../../src/assets/profilepics/dungeon-meshi-laios.png",
      linkedin: "https://linkedin.com/in/xxx",
      emblems: webdev_emblems
    },
    {
      name: "Aashika",
      role: "Web Development Member",
      image: "../../src/assets/profilepics/Laios_AB_Profile.webp",
      hoverImage: "../../src/assets/profilepics/dungeon-meshi-laios.png",
      linkedin: "https://linkedin.com/in/xxx",
      emblems: webdev_emblems
    },
    {
      name: "Aye",
      role: "Web Development Member",
      image: "../../src/assets/profilepics/Laios_AB_Profile.webp",
      hoverImage: "../../src/assets/profilepics/dungeon-meshi-laios.png",
      linkedin: "https://linkedin.com/in/xxx",
      emblems: webdev_emblems
    },
    {
      name: "Dylan",
      role: "Web Development Member",
      image: "../../src/assets/profilepics/Laios_AB_Profile.webp",
      hoverImage: "../../src/assets/profilepics/dungeon-meshi-laios.png",
      linkedin: "https://linkedin.com/in/xxx",
      emblems: webdev_emblems
    },
    {
      name: "Teegan",
      role: "Web Development Member",
      image: "../../src/assets/profilepics/Laios_AB_Profile.webp",
      hoverImage: "../../src/assets/profilepics/dungeon-meshi-laios.png",
      linkedin: "https://linkedin.com/in/xxx",
      emblems: webdev_emblems
    },
  ]
  const teamMembers = [
    {
      name: "A",
      role: "Team Lead",
      image: "../../src/assets/profilepics/Laios_AB_Profile.webp",
      hoverImage: "../../src/assets/profilepics/dungeon-meshi-laios.png", 
      linkedin: "https://linkedin.com/in/xxx"
    },
    {
      name: "B",
      role: "Member",
      image: "../../src/assets/profilepics/Laios_AB_Profile.webp",
      hoverImage: "../../src/assets/profilepics/dungeon-meshi-laios.png",
      linkedin: "https://linkedin.com/in/xxx"
    },
    {
      name: "C",
      role: "Member",
      image: "../../src/assets/profilepics/Laios_AB_Profile.webp",
      hoverImage: "../../src/assets/profilepics/dungeon-meshi-laios.png",
      linkedin: "https://linkedin.com/in/xxx"
    },
    {
      name: "D",
      role: "Member",
      image: "../../src/assets/profilepics/Laios_AB_Profile.webp",
      hoverImage: "../../src/assets/profilepics/dungeon-meshi-laios.png",
      linkedin: "https://linkedin.com/in/xxx"
    },
  ];

  return(
    <section className="team-section" id="team">
      <h2>Meet The Team</h2> {/* Maybe need a unform title format, tbd */}
      <div className="team-grid">
        {directors.map((member, index) => (
          <a 
            key={index}
            href={member.linkedin} 
            target="_blank" 
            rel="noopener noreferrer"
            className="team-card"
          >
            <div className="team-image-container">
            <img src={member.emblems} alt="team emblems" className="team-emblems" />
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
      <div className="team-grid">
        {webdevMembers.map((member, index) => (
          <a 
            key={index}x
            href={member.linkedin} 
            target="_blank" 
            rel="noopener noreferrer"
            className="team-card"
          >
            <div className="team-image-container">
              <img src={member.emblems} alt="team emblems" className="team-emblems" />
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
      <div className="team-grid">
        {expMembers.map((member, index) => (
          <a 
            key={index}x
            href={member.linkedin} 
            target="_blank" 
            rel="noopener noreferrer"
            className="team-card"
          >
            <div className="team-image-container">
              <img src={member.emblems} alt="team emblems" className="team-emblems" />
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
      <div className="team-grid">
        {outreachMembers.map((member, index) => (
          <a 
            key={index}x
            href={member.linkedin} 
            target="_blank" 
            rel="noopener noreferrer"
            className="team-card"
          >
            <div className="team-image-container">
              <img src={member.emblems} alt="team emblems" className="team-emblems" />
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
      <div className="team-grid">
        {logMembers.map((member, index) => (
          <a 
            key={index}x
            href={member.linkedin} 
            target="_blank" 
            rel="noopener noreferrer"
            className="team-card"
          >
            <div className="team-image-container">
              <img src={member.emblems} alt="team emblems" className="team-emblems" />
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
      <div className="team-grid">
        {commsMembers.map((member, index) => (
          <a 
            key={index}x
            href={member.linkedin} 
            target="_blank" 
            rel="noopener noreferrer"
            className="team-card"
          >
            <div className="team-image-container">
              <img src={member.emblems} alt="team emblems" className="team-emblems" />
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