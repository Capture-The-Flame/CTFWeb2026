import React from "react";
import "./Schedule.css";
import placeholderPerson from "../../assets/scheduleArt/placeholderperson.png";

const scheduleCharacters = [
  // positioning
  { id: 1, label: "schedule", top: "20%", left: "10%" },
  { id: 2, label: "schedule", top: "30%", left: "70%" },
  { id: 3, label: "schedule",  top: "55%", left: "20%" },
  { id: 4, label: "schedule",  top: "75%", left: "70%" },
];

export default function Schedule() {
  return (
    <div className="schedule-scene">
      {scheduleCharacters.map((char) => (
        <button 
          key={char.id} 
          className="char-btn"
          style={{ top: char.top, left: char.left }}
          aria-label={`View schedule for ${char.label}`}
          onClick={() => console.log("Open popup for " + char.label)} // schedule pop up for later
        >
          <img 
            src={placeholderPerson} 
            alt="Character" 
            className="char-img" 
          />
          {/* show label on hover */}
          <span className="char-label">{char.label}</span>
        </button>
      ))}
    </div>
  );
}