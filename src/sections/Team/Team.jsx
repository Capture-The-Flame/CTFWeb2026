import "./Team.css";
import director_emblems from "../../assets/pieces/ctf_emblems_director.svg";
import comms_emblems from "../../assets/pieces/ctf_emblems_comms.svg";
import exp_emblems from "../../assets/pieces/ctf_emblems_exp.svg";
import log_emblems from "../../assets/pieces/ctf_emblems_log.svg";
import outreach_emblems from "../../assets/pieces/ctf_emblems_outreach.svg";
import webdev_emblems from "../../assets/pieces/ctf_emblems_webdev.svg";

export default function Team() {
  const directors = [
    {
      name: "Coda Richmond",
      role: "Co-Director",
      image: "../../src/assets/profilepics/Coda Richmond.jpeg",
      linkedin: "https://www.linkedin.com/in/coda-richmond/",
      emblems: director_emblems
    },
    {
      name: "Fatima Mora Garcia",
      role: "Co-Director",
      image: "../../src/assets/profilepics/Fatima.jpeg",
      linkedin: "https://www.linkedin.com/in/fatima-mora-garcia/",
      emblems: director_emblems
    }
  ]
  const commsMembers = [
    {
      name: "Charmi Sutariya",
      role: "Communications Lead",
      image: "../../src/assets/profilepics/Charmi Sutariya.jpeg",
      linkedin: "https://www.linkedin.com/in/charmi-sutariya-9585932ab/",
      emblems: comms_emblems
    },
    {
      name: "Julia Bowman",
      role: "Communications Member",
      image: "../../src/assets/profilepics/Julia Bowman.jpeg",
      linkedin: "https://www.linkedin.com/in/juliafbowman/",
      emblems: comms_emblems
    },
    {
      name: "Mahi Patel",
      role: "Communications Member",
      image: "../../src/assets/profilepics/Mahi Patel.jpeg",
      linkedin: "https://www.linkedin.com/in/mahipatel0708/",
      emblems: comms_emblems
    },
    {
      name: "Om Patel",
      role: "Communications Member",
      image: "../../src/assets/profilepics/Om Patel.png",
      linkedin: "https://www.linkedin.com/in/ompatel22/",
      emblems: comms_emblems
    },
    {
      name: "Raima Chowdhury",
      role: "Communications Member",
      image: "../../src/assets/profilepics/Raima Chowdhury.jpeg",
      linkedin: "https://www.linkedin.com/in/raima-chowdhury-uic2027/",
      emblems: comms_emblems
    },
    {
      name: "Sofia Batala",
      role: "Communications Member",
      image: "../../src/assets/profilepics/Sofia Batala.jpeg",
      linkedin: "https://www.linkedin.com/in/batalasofia/",
      emblems: comms_emblems
    },
  ]
  
  const expMembers = [
    {
      name: "Eduardo Murillo",
      role: "Experience Lead",
      image: "../../src/assets/profilepics/Eduardo Murillo.jpeg",
      linkedin: "https://www.linkedin.com/in/eduardo-murillo1/",
      emblems: exp_emblems
    },
    {
      name: "Aleena Mehmood",
      role: "Experience Member",
      image: "../../src/assets/profilepics/Aleena Mehmood.jpeg",
      linkedin: "https://www.linkedin.com/in/aleena-mehmood/",
      emblems: exp_emblems
    },
    {
      name: "Ammani Khan",
      role: "Experience Member",
      image: "../../src/assets/profilepics/Ammani Khan.png",
      linkedin: "https://www.linkedin.com/in/ammanikhan/",
      emblems: exp_emblems
    },
    {
      name: "Anirudh Yallapragada",
      role: "Experience Member",
      image: "../../src/assets/profilepics/Anirudh Yallapragada.jpeg",
      linkedin: "https://www.linkedin.com/in/ayswe/",
      emblems: exp_emblems
    },
    {
      name: "Claudia Varnas",
      role: "Experience Member",
      image: "../../src/assets/profilepics/Claudia Varnas.jpeg",
      linkedin: "https://www.linkedin.com/in/claudia-varnas/",
      emblems: exp_emblems
    },
    {
      name: "Edoardo Gennaretti",
      role: "Experience Member",
      image: "../../src/assets/profilepics/Edoardo Gennaretti.jpeg",
      linkedin: "https://www.linkedin.com/in/edoardogennaretti/",
      emblems: exp_emblems
    },
    {
      name: "Gauri Khanolkar",
      role: "Experience Member",
      image: "../../src/assets/profilepics/Gauri Khanolkar.jpeg",
      linkedin: "https://www.linkedin.com/in/gauri-khanolkar/",
      emblems: exp_emblems
    },
    {
      name: "Rose Torres",
      role: "Experience Member",
      image: "../../src/assets/profilepics/Rose Torres.jpeg",
      linkedin: "https://www.linkedin.com/in/roselyn-torres/",
      emblems: exp_emblems
    },
    {
      name: "Saja Bushara",
      role: "Experience Member",
      image: "../../src/assets/profilepics/Saja Bushara.jpeg",
      linkedin: "https://www.linkedin.com/in/sajabushara/",
      emblems: exp_emblems
    },
    {
      name: "Sammy Patel",
      role: "Experience Member",
      image: "../../src/assets/profilepics/Sammy Patel.jpeg",
      linkedin: "https://www.linkedin.com/in/saumilpatel06/",
      emblems: exp_emblems
    },
    {
      name: "Sufiyan Shariff",
      role: "Experience Member",
      image: "../../src/assets/profilepics/Sufiyan Shariff.jpeg",
      linkedin: "https://www.linkedin.com/in/sufiyan-shariff-22354021a/",
      emblems: exp_emblems
    },
    {
      name: "Teresa Chirayil",
      role: "Experience Member",
      image: "../../src/assets/profilepics/Teresa Chirayil.jpeg",
      linkedin: "https://www.linkedin.com/in/teresachirayil/",
      emblems: exp_emblems
    },
  ]
  const logMembers = [
    {
      name: "Malika Syeda",
      role: "Co-Logistics Lead",
      image: "../../src/assets/profilepics/Malika Syeda.jpeg",
      linkedin: "https://www.linkedin.com/in/malikarsyeda/",
      emblems: log_emblems
    },
    {
      name: "Samira Ali",
      role: "Co-Logistics Lead",
      image: "../../src/assets/profilepics/Samira Ali.jpeg",
      linkedin: "https://www.linkedin.com/in/samira-ali-552220378/",
      emblems: log_emblems
    },
    {
      name: "Cindy Rocha",
      role: "Logistics Member",
      image: "../../src/assets/profilepics/Cindy Rocha.jpeg",
      linkedin: "https://www.linkedin.com/in/cm-rocha/",
      emblems: log_emblems
    },
    {
      name: "Ekram Yenus",
      role: "Logistics Member",
      image: "../../src/assets/profilepics/Ekram Yenus.jpeg",
      linkedin: "https://www.linkedin.com/in/ekram-yenus-56410b387/",
      emblems: log_emblems
    },
    {
      name: "Het Patel",
      role: "Logistics Member",
      image: "../../src/assets/profilepics/Het Patel.png",
      linkedin: "https://www.linkedin.com/in/het-patel-168684388/",
      emblems: log_emblems
    },
    {
      name: "Simran Ashraf",
      role: "Logistics Member",
      image: "../../src/assets/profilepics/Simran Ashraf.jpeg",
      linkedin: "https://www.linkedin.com/in/simran-ashraf-973836342/",
      emblems: log_emblems
    },
    {
      name: "Therese Magpayo",
      role: "Logistics Member",
      image: "../../src/assets/profilepics/Therese Magpayo.jpeg",
      linkedin: "https://www.linkedin.com/in/therese-magpayo/",
      emblems: log_emblems
    },
  ]
  const outreachMembers = [
    {
      name: "Jason Carmona",
      role: "Outreach Lead",
      image: "../../src/assets/profilepics/Jason Carmona.jpeg",
      linkedin: "https://www.linkedin.com/in/cs-jason-carmona/",
      emblems: outreach_emblems
    },
    { 
      name: "Alan Reyes",
      role: "Outreach Member",
      image: "../../src/assets/profilepics/unknown.jpg",
      linkedin: "https://www.linkedin.com/company/capture-the-flame/",
      emblems: outreach_emblems
    },
    { 
      name: "Diego Roa",
      role: "Outreach Member",
      image: "../../src/assets/profilepics/Diego Roa.jpeg",
      linkedin: "https://www.linkedin.com/in/diego-roa-1b2840249/",
      emblems: outreach_emblems
    },
    { 
      name: "Jeff Benesisto",
      role: "Outreach Member",
      image: "../../src/assets/profilepics/Jeff Benesisto.jpeg",
      linkedin: "https://www.linkedin.com/in/jeff-nathaniel-benesisto/",
      emblems: outreach_emblems
    },
    { 
      name: "Lisette Castanon",
      role: "Outreach Member",
      image: "../../src/assets/profilepics/Lisette Castanon.jpeg",
      linkedin: "https://www.linkedin.com/in/lisette-castanon/",
      emblems: outreach_emblems
    },
    { 
      name: "Neha Kamat",
      role: "Outreach Member",
      image: "../../src/assets/profilepics/Neha Kamat.jpeg",
      linkedin: "https://www.linkedin.com/in/neha-kamat-/",
      emblems: outreach_emblems
    },
    { 
      name: "Stephanie Hermosillo",
      role: "Outreach Member",
      image: "../../src/assets/profilepics/unknown.jpg",
      linkedin: "https://www.linkedin.com/in/stephanie-hermosillo-465000244/",
      emblems: outreach_emblems
    },
    { 
      name: "Zona Noman",
      role: "Outreach Member",
      image: "../../src/assets/profilepics/Zona Noman.jpeg",
      linkedin: "https://www.linkedin.com/in/zona-noman-a05479243/",
      emblems: outreach_emblems
    },
  ]
  const webdevMembers = [
    {
      name: "Martha Barraza",
      role: "Web Dev Lead",
      image: "../../src/assets/profilepics/Martha Barraza.jpeg",
      linkedin: "https://www.linkedin.com/in/martha-barraza/",
      emblems: webdev_emblems
    },
    {
      name: "Aashika Lilaramani",
      role: "Web Dev Member",
      image: "../../src/assets/profilepics/Aashika Lilaramani.jpeg",
      linkedin: "https://www.linkedin.com/in/aashika-lilaramani-61b112207/",
      emblems: webdev_emblems
    },
    {
      name: "Aye Kyawt Zin",
      role: "Web Dev Member",
      image: "../../src/assets/profilepics/Aye Kyawt Zin.jpg",
      linkedin: "https://www.linkedin.com/in/ayekyawtzin/",
      emblems: webdev_emblems
    },
    {
      name: "Dylan Nguyen",
      role: "Web Dev Member",
      image: "../../src/assets/profilepics/Dylan Nguyen.jpeg",
      linkedin: "https://www.linkedin.com/in/dylngu4915/",
      emblems: webdev_emblems
    },
    {
      name: "Teegan Springer",
      role: "Web Dev Member",
      image: "../../src/assets/profilepics/Teegan Springer.jpg",
      linkedin: "https://www.linkedin.com/in/teegan-springer/",
      emblems: webdev_emblems
    },
  ]

  return(
    <section className="team-section" id="team">
      <h2>Meet The Team</h2> 
      <div className="team-container">
      <div className="team-row">
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
                <img src={member.image} alt={member.name} className="team-image hover" />
              </div>
              <div className="team-info">
                <h3>{member.name}</h3>
                <p>{member.role}</p>
              </div>  
            </a>
          ))}
        </div>
      </div>
      <div className="team-row com-row com-row-scroll">
        <div className="team-grid com-grid com-grid-scroll">
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
                <img src={member.image} alt={member.name} className="team-image hover" />
              </div>
              <div className="team-info">
                <h3>{member.name}</h3>
                <p>{member.role}</p>
              </div>  
            </a>
          ))}
        </div>
      </div>
      <div className="team-row exp-row exp-row-scroll">
        <div className="team-grid exp-grid exp-grid-scroll">
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
                <img src={member.image} alt={member.name} className="team-image hover" />
              </div>
              <div className="team-info">
                <h3>{member.name}</h3>
                <p>{member.role}</p>
              </div>  
            </a>
          ))}
        </div>
      </div>
      <div className="team-row log-row log-row-scroll">
        <div className="team-grid log-grid log-grid-scroll">
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
                <img src={member.image} alt={member.name} className="team-image hover" />
              </div>
              <div className="team-info">
                <h3>{member.name}</h3>
                <p>{member.role}</p>
              </div>  
            </a>
          ))}
        </div>
      </div>
      <div className="team-row out-row out-row-scroll">
        <div className="team-grid out-grid out-grid-scroll">
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
                <img src={member.image} alt={member.name} className="team-image hover" />
              </div>
              <div className="team-info">
                <h3>{member.name}</h3>
                <p>{member.role}</p>
              </div>  
            </a>
          ))}
        </div>
      </div>
      <div className="team-row web-row web-row-scroll">
        <div className="team-grid web-grid web-grid-scroll">
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
                <img src={member.image} alt={member.name} className="team-image hover" />
              </div>
              <div className="team-info">
                <h3>{member.name}</h3>
                <p>{member.role}</p>
              </div>  
            </a>
          ))}
        </div>
      </div>
      </div>
    </section>
  );
}