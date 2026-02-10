import React from "react";
import "./Schedule.css";
import char1 from "../../assets/scheduleArt/character_01.svg";
import char2 from "../../assets/scheduleArt/character_02.svg";
import char3 from "../../assets/scheduleArt/character_03.svg";
import char4 from "../../assets/scheduleArt/character_04.svg";

const scheduleCharacters = [ //properties for each character
  { 
    id: 1, 
    label: "character one", 
    src: char1, 
    top: "43%", 
    left: "35%", 
    width: "40%", 
    rotate: "90deg" //pics in file are rotated so had to adjust
  },
  { 
    id: 2, 
    label: "character two", 
    src: char2, 
    top: "70%", 
    left: "78%", 
    width: "15%" 
  },
  { 
    id: 3, 
    label: "character three", 
    src: char3, 
    top: "65%", 
    left: "60%", 
    width: "17%" 
  },
  {
    id: 4, 
    label: "character four", 
    src: char4, 
    top: "34%", 
    left: "10%", 
    width: "30%", 
    rotate: "90deg" //pics in file are rotated so had to adjust
  },
];

export default function Schedule() {
  return (
    <div className="schedule-scene">
      {scheduleCharacters.map((char) => (
        <button 
          key={char.id} 
          className="char-btn"
          style={{
                  top: char.top,
                  left: char.left,
                  width: char.width
                }}
          aria-label={`View schedule for ${char.label}`}
          onClick={() => console.log("Open popup for " + char.label)} // schedule pop up for later
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
    </div>
  );
}