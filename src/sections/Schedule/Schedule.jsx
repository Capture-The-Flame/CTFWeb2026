import React, { useState } from "react";
import "./Schedule.css";
import char1 from "../../assets/scheduleArt/character_01.svg";
import char2 from "../../assets/scheduleArt/character_02.svg";
import char3 from "../../assets/scheduleArt/character_03.svg";
import char4 from "../../assets/scheduleArt/character_04.svg";
import char5 from "../../assets/scheduleArt/character_05.svg";
import StoneTablet from "../../assets/scheduleArt/FigmaStoneTablet.svg";

const mainSchedule = [
  {
    time: "6:30 - 8:00 AM",
    eventName: "Check in",
    details: [
      "Participants will arrive at the venue with their teams (3 people each!) and proceed with the check-in process.",
      "Breakfast will be provided for all attendees."
    ]
  },
  {
    time: "8:00 - 8:45 AM",
    eventName: "Welcome/Keynote",
    details: [
      "The event will officially commence with an introduction to the CTF.",
      "Following this, our guest keynote speaker will share insigts on their cybersecurity journey and the importantce of competitive CTFs."
    ]
  },
  {
    time: "9:00 - 9:55 AM",
    eventName: "Workshop One",
    details: [
      "To help participants prepare for the CTF, we will host two concurrent workshops.",
      "These workshops will provide insights, tools, and techniques to navigate the challenges in this competition."
    ]
  },
  {
    time: "10:00-10:55 AM",
    eventName: "Workshop Two",
    details: [
      "To help participants prepare for the CTF, we will host two concurrent workshops.",
      "These workshops will provide insights, tools, and techniques to navigate the challenges in this competition."
    ]
  },
  {
    time: "11:00 AM - 6:00 PM",
    eventName: "Competition",
    details: [
      "The competition begins!",
      "participants will engage in a series of challenges designed to test their problem solving, teamwork, and technical skills",
      "",
      "Mentor HQ:",
      "A designated room will be avalibale for students to seek guidance and support from industry professionals and mentors. This space will provide a supportive environment where participants can ask questions and gain insights to help them tackle the competition prompts effectively."
    ]
  },
  {
    time: "11:30 AM - 1:30 PM",
    eventName: "Lunch Break",
    details: [
      "All Attendees, including students, mentors, and volunteers, will enjoy lunch.",
      "This time will also give participants an opportunity to network and recharge for the competition ahead."
    ]
  },
];

const scheduleCharacters = [ 
  { id: 1, label: "Schedule", src: char1, 
    top: "22%", left: "14%",
    mobileTop: "18%", mobileLeft: "10%",
    width: "10%", flip: true },
  { id: 2, label: "Schedule", src: char2, 
    top: "60%", left: "74%",
    mobileTop: "60%", mobileLeft: "73%",
    width: "11%", },
  { id: 3, label: "Schedule", src: char3, 
    top: "55%", left: "-4%",
    mobileTop: "40%", mobileLeft: "26%",
    width: "14%", flip: true },
  { id: 4, label: "Schedule", src: char4, 
    top: "37%", left: "50%",
    mobileTop: "25%", mobileLeft: "50%",
    width: "19%", rotate: "90deg" },
  { id: 5, label: "Schedule", src: char5, 
    top: "26%", left: "87%",
    mobileTop: "22%", mobileLeft: "76%",
    width: "29%" }
];

export default function Schedule() {
  const [activeCharacter, setActiveCharacter] = useState(null); 

  const [openIndex, setOpenIndex] = useState(null);

  const handleToggleEvent = (index) => {
   
    setOpenIndex(prevIndex => (prevIndex === index ? null : index));
  };

  const openModal = (char) => {
    console.log("Opened popup for " + char.label);
    setActiveCharacter(char);
    setOpenIndex(null); 
  };

  return (
    <div className="schedule-scene">
      {scheduleCharacters.map((char) => (
        <button 
          key={char.id} 
          className="char-btn"
          style={{
            '--desktop-top': char.top,
            '--desktop-left': char.left,
            '--mobile-top': char.mobileTop || char.top,   
            '--mobile-left': char.mobileLeft || char.left, 
            width: char.width,
          }}
          aria-label={`View schedule for ${char.label}`}
          onClick={() => openModal(char)}
        >
          <img 
            src={char.src} 
            alt={char.label} 
            className="char-img" 
            style={{ transform: `rotate(${char.rotate || '0deg'}) scaleX(${char.flip ? -1 : 1})` }}
          />
          <span className="char-label">{char.label}</span>
        </button>
      ))}

      {activeCharacter && ( 
        <div className="modal-overlay" onClick={() => setActiveCharacter(null)}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <button className="modal-close" onClick={() => setActiveCharacter(null)}>
              X
            </button>
            <img src={StoneTablet} alt="Schedule Board" className="modal-bg-svg" />
            
            <div className="modal-text-container"> 
              <h1>Schedule</h1> 
              
              <div className="schedule-list">
                {mainSchedule.map((eventItem, index) => {
                  const isOpen = openIndex === index;

                  return (
                    <div key={index} className="schedule-block">
                      {/* --- THE CLICKABLE HEADER --- */}
                      <div 
                        className={`schedule-item ${isOpen ? 'active' : ''}`}
                        onClick={() => handleToggleEvent(index)}
                      >
                        <span className="time">{eventItem.time}</span>
                        <span className="event">{eventItem.eventName}</span>
                        <div className="caret">{isOpen ? '▲' : '▼'}</div>
                      </div>
                      {isOpen && (
                        <div className="details">
                          {eventItem.details.map((paragraph, pIndex) => (
                            <p key={pIndex}>{paragraph}</p>
                          ))}
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>

            </div>
          </div>
        </div>
      )}
    </div>
  );
}