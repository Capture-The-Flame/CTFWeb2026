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
    time: "6:30 A.M. - 8:00 A.M.",
    eventName: "Check in",
    details: [
      "Participants will arrive at the venue with their teams (3 people each!) and proceed with the check-in process.",
      "Breakfast will be provided for all attendees."
    ]
  },
  {
    time: "8:00 A.M. - 8:45 A.M.",
    eventName: "Welcome/Keynote",
    details: [
      "The event will officially commence with an introduction to the CTF.",
      "Following this, our guest keynote speaker will share insigts on their cybersecurity journey and the importantce of competitive CTFs."
    ]
  },
  {
    time: "9:00 A.M. - 9:55 A.M.",
    eventName: "Workshop One",
    details: [
      "To help participants prepare for the CTF, we will host two concurrent workshops.",
      "These workshops will provide insights, tools, and techniques to navigate the challenges in this competition."
    ]
  },
  {
    time: "10:00 A.M. - 10:55 A.M.",
    eventName: "Workshop Two",
    details: [
      "To help participants prepare for the CTF, we will host two concurrent workshops.",
      "These workshops will provide insights, tools, and techniques to navigate the challenges in this competition."
    ]
  },
  {
    time: "11:00 A.M. - 6:00 P.M.",
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
    time: "11:30 A.M. - 1:30 P.M.",
    eventName: "Lunch Break",
    details: [
      "All Attendees, including students, mentors, and volunteers, will enjoy lunch.",
      "This time will also give participants an opportunity to network and recharge for the competition ahead."
    ]
  },
  {
    time: "6:00 P.M. - 7:00 P.M.",
    eventName: "Dinner Break",
    details: [
      "Dinner will be served during this time!",
    ]
  },
  {
    time: "6:30 P.M. - 7:30 P.M.",
    eventName: "Networking Fair",
    details: [
      "Attendees will connect with event sponsors and industry professionals during the networking session.",
      "This is a great opportunity for students to learn about potential internships and job opportunities from partner companies.",
    ]
  },
  {
    time: "7:30 P.M. - 8:00 P.M.",
    eventName: "Solutions Workshop",
    details: [
      "Review solutions with Experience team and mentors!",
    ]
  },
  {
    time: "8:00 P.M. - 8:30 P.M.",
    eventName: "Awards/Closing Ceremony",
    details: [
      "The day will conclude with an awards ceremony where winners for both tracks (beginner and advanced) will be announced. A special hidden prize will also be awarded for the team with the highest accuracy in each track.",
    ]
  },
];

const scheduleCharacters = [ 
  { id: 1, label: "Hey!", src: char1, 
    top: "22%", left: "14%",
    mobileTop: "18%", mobileLeft: "10%",
    width: "10%", flip: true },
  { id: 2, label: "Click on us for the schedule!", src: char2, 
    top: "60%", left: "74%",
    mobileTop: "60%", mobileLeft: "73%",
    width: "11%", },
  { id: 3, label: "", src: char3, 
    top: "55%", left: "-4%",
    mobileTop: "40%", mobileLeft: "26%",
    width: "14%", flip: true },
  { id: 4, label: "Welcome to CTF!", src: char4, 
    top: "37%", left: "50%",
    mobileTop: "25%", mobileLeft: "50%",
    width: "19%", rotate: "90deg" },
  { id: 5, label: "", src: char5, 
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