import React, { useState } from "react";
import "./Schedule.css";
import char1 from "../../assets/scheduleArt/character_01.svg";
import char2 from "../../assets/scheduleArt/character_02.svg";
import char3 from "../../assets/scheduleArt/character_03.svg";
import char4 from "../../assets/scheduleArt/character_04.svg";
import char5 from "../../assets/scheduleArt/character_05.svg";
import StoneTablet from "../../assets/scheduleArt/FigmaStoneTablet.svg";

const scheduleCharacters = [ //properties for each character
  { 
    id: 1, 
    label: "character one", 
    src: char1, 
    top: "23%",   
    left: "20%", 
    width: "33%", 
    rotate: "90deg" //pics in file are rotated so had to adjust
  },
  { 
    id: 2, 
    label: "character two", 
    src: char2, 
    top: "60%", 
    left: "74%", 
    width: "11%" 
  },
  { 
    id: 3, 
    label: "character three", 
    src: char3, 
    top: "48%", 
    left: "33%", 
    width: "14%" 
  },
  {
    id: 4, 
    label: "character four", 
    src: char4, 
    top: "25%", 
    left: "50%", 
    width: "19%", 
    rotate: "90deg" //pics in file are rotated so had to adjust
  },
  {
    id: 5, 
    label: "character five", 
    src: char5, 
    top: "19%", 
    left: "70%", 
    width: "29%",
  }
];

export default function Schedule() {
  const [activeCharacter, setActiveCharacter] = useState(null); // to hold the state of the active popups on characters
  return (
    <div className="schedule-scene">
      {scheduleCharacters.map((char) => (
        <button 
          key={char.id} 
          className="char-btn"
          style={{
                  top: char.top,
                  left: char.left,
                  width: char.width,
                }}
          aria-label={`View schedule for ${char.label}`}
          onClick={() => {
            console.log("Opened popup for " + char.label);
            setActiveCharacter(char);
          }}
        >
          <img 
            src={char.src} 
            alt="char.label" 
            className="char-img" 
            style={{ transform: `rotate(${char.rotate || '0deg'})` }}
          />
          {/* show label on hover */}
          <span className="char-label">{char.label}</span>
        </button>
      ))}
      {activeCharacter && ( /* pop up for schedule details */
        <div className="modal-overlay" onClick={() => setActiveCharacter(null)}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <button className="modal-close" onClick={() => setActiveCharacter(null)}>
              X
            </button>
            <img src={StoneTablet} alt="Schedule Board" className="modal-bg-svg" />
            <div className="modal-text-container"> 
              <h1>Schedule</h1> 
                <ul>
                  <li>
                    <strong>6:30 - 8:00 AM - Check in</strong>
                    <p>Participants will arrive at the venue with their teams (3 people per team!) and proceed with the check-in process. Breakfast will be provided for the attendees</p>
                    <p>Participants will arrive at the venue with their teams (3 people per team!) and proceed with the check-in process. Breakfast will be provided for the attendees</p>
                    <p>Participants will arrive at the venue with their teams (3 people per team!) and proceed with the check-in process. Breakfast will be provided for the attendees</p>
                    <p>Participants will arrive at the venue with their teams (3 people per team!) and proceed with the check-in process. Breakfast will be provided for the attendees</p>
                  </li>
                  
                  <li>
                    <strong>11:00 AM - Start</strong>
                  </li>
                </ul>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
