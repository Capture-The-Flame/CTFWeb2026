import React, { useState, useEffect } from "react";
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
    time: "6:30 P.M. - 8:00 P.M.",
    eventName: "Networking Fair",
    details: [
      "Attendees will connect with event sponsors and industry professionals during the networking session.",
      "This is a great opportunity for students to learn about potential internships and job opportunities from partner companies.",
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
  { id: 1,
    label: "Hey!",
    src: char1,
    x: 8,
    y: 35,

    mobileX: 15,
    mobileY: 15,
    mobileSize: "9%",

    // width: "clamp(40px, 8vw, 100px)",
    size: "7%",
    flip: true,
    // custom Shadow Properties:
    shadowBottom: "-10px",  // height
    shadowWidth: "80%",     // width 
    shadowLeft: "50%",      // horizontal position
    
    mobileShadowBottom: "-5px", 
    mobileShadowWidth: "80%",
    mobileShadowLeft: "50%",
    labelTop: "-9%", 
  },
    

  { id: 2, label: "Click on us for the schedule!", src: char2, 
    x: 67, y: 80, size: "9%",

    mobileX: 70, mobileY: 75, mobileSize: "10%",
    shadowBottom: "-2px", 
    shadowWidth: "90%",     
    shadowLeft: "43%",
  
    mobileShadowBottom: "-5px", 
    mobileShadowWidth: "90%",
    mobileShadowLeft: "40%",
    labelTop: "5%",
    labelLeft: "67%",
    labelShiftX: "-110%",
    labelShiftY: "-120%",

    mobileLabelTop: "5%",
    mobileLabelLeft: "20%",
    mobileLabelShiftX: "-110%",
    mobileLabelShiftY: "-120%",
  },
    

  // { id: 3, label: "", src: char3, 
  //   top: "55%", left: "-4%",
  //   mobileTop: "40%", mobileLeft: "26%",
  //   width: "14%", flip: true,
  //   shadowBottom: "-8px", 
  //   shadowWidth: "100%",     
  //   shadowLeft: "64",
  
  //   mobileShadowBottom: "-5px", 
  //   mobileShadowWidth: "100%",
  //   mobileShadowLeft: "60%"},

  { id: 4, label: "Welcome to CTF!", src: char4, 
    x: 53, y: 55,
    size: "15%",

    mobileX: 50, mobileY: 43, 
    mobileSize: "18%",
    rotate: "90deg",
    shadowBottom: "-25px", 
    shadowWidth: "50%",     
    shadowLeft: "50%",

    mobileShadowBottom: "-14px", 
    mobileShadowWidth: "60%",
    mobileShadowLeft: "50%",
    
    labelTop: "-15%", 
  },

  // { id: 5, label: "", src: char5, 
  //   top: "26%", left: "87%",
  //   mobileTop: "22%", mobileLeft: "76%",
  //   width: "29%",
  //   shadowBottom: "5px", 
  //   shadowWidth: "40%",     
  //   shadowLeft: "50%",

  //   mobileShadowBottom: "-3px", 
  //   mobileShadowWidth: "50%",
  //   mobileShadowLeft: "50%" }
];

export default function Schedule({ onOpen, onClose }) {
  const [activeCharacter, setActiveCharacter] = useState(null); 

  const [openIndex, setOpenIndex] = useState(null);

  const [screenWidth, setScreenWidth] = useState(window.innerWidth);

  const handleToggleEvent = (index) => {
   
    setOpenIndex(prevIndex => (prevIndex === index ? null : index));
  };

  const openModal = (char) => {
    console.log("Opened popup for " + char.label);
    setActiveCharacter(char);
    setOpenIndex(null); 
    onOpen?.()
  };

  const closeModal = () => {
    setActiveCharacter(null);
    onClose?.();         // ← add this
  };

  useEffect(() => {
    const handleResize = () => setScreenWidth(window.innerWidth);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const isMobile = screenWidth <= 500;

  return (
    <div className="schedule-scene">
      {scheduleCharacters.map((char) => (
        <button 
          key={char.id} 
          className="char-btn"
        style={{
          "--char-x": `${(isMobile ? (char.mobileX ?? char.x) : char.x)}%`,
          "--char-y": `${(isMobile ? (char.mobileY ?? char.y) : char.y)}%`,
          "--char-size": isMobile ? (char.mobileSize ?? char.size) : char.size,

          "--shadow-bottom": char.shadowBottom || "-10px",
          "--shadow-width": char.shadowWidth || "60%",
          "--shadow-left": char.shadowLeft || "50%",

          "--mobile-shadow-bottom": char.mobileShadowBottom || char.shadowBottom || "-10px",
          "--mobile-shadow-width": char.mobileShadowWidth || char.shadowWidth || "60%",
          "--mobile-shadow-left": char.mobileShadowLeft || char.shadowLeft || "50%",

          "--label-top": isMobile
            ? (char.mobileLabelTop || char.labelTop || "12%")
            : (char.labelTop || "12%"),

          "--label-left": isMobile
            ? (char.mobileLabelLeft || char.labelLeft || "50%")
            : (char.labelLeft || "50%"),

          "--label-shift-x": isMobile
            ? (char.mobileLabelShiftX || char.labelShiftX || "-50%")
            : (char.labelShiftX || "-50%"),

          "--label-shift-y": isMobile
            ? (char.mobileLabelShiftY || char.labelShiftY || "-100%")
            : (char.labelShiftY || "-100%"),
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
        <div className="modal-overlay" onClick={closeModal}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <button className="modal-close" onClick={closeModal}>
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