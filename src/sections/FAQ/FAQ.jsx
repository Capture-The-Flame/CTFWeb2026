import { useState } from "react";
import bigBoard from "../../assets/pieces/bigBoard.svg";
import smallBoard from "../../assets/pieces/faq_board_final.svg"
import pageOne from "../../assets/pieces/Frame1.svg";
import pageTwo from "../../assets/pieces/Frame2.svg";
import pageThree from "../../assets/pieces/Frame3.svg";
import pageFour from "../../assets/pieces/Frame4.svg";
import pageFive from "../../assets/pieces/Frame5.svg";
import pageSix from "../../assets/pieces/Frame6.svg";
import "./FAQ.css";

// page content
const FAQ_CONTENT = {
  1: { 
    img: pageSix, 
    text: { title: "What is a CTF?", body: "A competition where you work in teams to solve many different kinds of cybersecurity challenges!" },
    styles: { rot: "0deg", top: "22%", left: "16%", width: "15%" },
    textStyles: { top: "15%", left: "17%", width: "65%", fontSize: "1.0vw", bodySize: "0.9vw" } 
  },
  2: { 
    img: pageThree, 
    text: { title: "What if I don't have experience?", body: "You don't need experience! We have a Beginner Track for those with no prior experience." },
    styles: { rot: "0deg", top: "22%", left: "50%", width: "20%" },
    textStyles: { top: "20%", left: "10%", width: "80%", fontSize: "1.0vw", bodySize: "0.85vw" } 
  },
  3: { 
    img: pageFour, 
    text: { title: "Why would I do a CTF?", body: "CTF competitions are a great opportunity to showcase your cybersecurity capabilities and pick up some new tricks from other participants!" },
    styles: { rot: "0deg", top: "27%", left: "32%", width: "18%" },
    textStyles: { top: "15%", left: "15%", width: "70%", fontSize: "1.2vw", bodySize: "0.9vw" } 
  },
  4: { 
    img: pageThree, 
    text: { title: "Do I have to go to UIC to participate?", body: "No! The competition is available to any Chicagoland Universities!" },
    styles: { rot: "0deg", top: "65%", left: "15%", width: "18%" },
    textStyles: { top: "18%", left: "12%", width: "75%", fontSize: "0.9vw", bodySize: "0.8vw" } 
  },
  5: { 
    img: pageSix, 
    text: { title: "Who is hosting the event?", body: "UIC's WiCyS and LOGICA organizations." },
    styles: { rot: "0deg", top: "35%", left: "68%", width: "15%" },
    textStyles: { top: "18%", left: "12%", width: "76%", fontSize: "1.3vw", bodySize: "0.9vw" } 
  },
  6: { 
    img: pageOne, 
    text: { title: "What are the resources that we will need?", body: "We will be providing a cyber pack that contains any sites required to compete." },
    styles: { rot: "0deg", top: "60%", left: "50%", width: "20%" },
    textStyles: { top: "15%", left: "12%", width: "76%", fontSize: "0.9vw", bodySize: "0.8vw" } 
  }
};

const SMALL_BOARD_PAGES = [
  { img: pageOne, top: "30%", left: "25%", width: "20%", rot: "0deg" },
  { img: pageSix, top: "31%", left: "53%", width: "18%", rot: "0deg" },
  { img: pageThree, top: "50%", left: "28%", width: "20%", rot: "0deg" },
];


export default function FAQ() {
  const [openBoard, setOpenBoard] = useState(false);
  const [openPage, setOpenPage] = useState(null);

  // close everything - counter page popup appears behinf board popup
  const handleClose = () => {
    setOpenBoard(false);
    setOpenPage(null);
  };

  return (
    <>
    {/* small board */}
      <div className="board-container">
        <div className="board-small-frame" onClick={() => setOpenBoard(true)}>
          <img src={smallBoard} className="board-small" alt="View FAQ Board" />
          <div className="board-small-overlay">
            {SMALL_BOARD_PAGES.map((page, index) => (
              <img 
                key={index}
                src={page.img} 
                className="mini-page" 
                style={{ 
                  top: page.top, 
                  left: page.left, 
                  width: page.width, 
                  transform: `rotate(${page.rot})` 
                }} 
                alt="" 
              />
            ))}
          </div>     
        </div>
      </div>
      {/* big board popup */}
      {openBoard && (
        <div className="faq-popup" onClick={handleClose}>
          <div className="board-frame" onClick={(e) => e.stopPropagation()}>
            <div className="board-image-wrapper">
              <img src={bigBoard} className="board-big" alt="Notice Board" />
              
              <button className="board-close-btn" onClick={handleClose}>×</button>

              <div className="board-overlay">
                {Object.keys(FAQ_CONTENT).map((key) => {
                  const item = FAQ_CONTENT[key];
                  return (
                    
                    <div
                      key={key}
                      className="page"
                      onClick={() => setOpenPage(key)}
                      style={{ 
                        transform: `rotate(${item.styles.rot})`,
                        top: item.styles.top,
                        left: item.styles.left,
                        width: item.styles.width 
                      }}
                    >
                      <img src={item.img} className="page-image" alt="Scroll" />
                      <div className="page-text-overlay" style={{ ...item.textStyles }}>
                        <h3 className="page-title-mini" style={{ fontSize: item.textStyles.fontSize }}>
                          {item.text.title}
                        </h3>
                        <p className="page-body-mini" style={{ fontSize: item.textStyles.fontSize }}>
                          {item.text.body}
                        </p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      )}

      {/* individual page popup */}
      {openPage && (
        <div className="page-popup" onClick={() => setOpenPage(null)}>
          <div className="page-popup-page" onClick={(e) => e.stopPropagation()}>
            <img src={FAQ_CONTENT[openPage].img} className="page-popup-image" alt="Detail" />
            <div className="page-popup-text">
              <h2>{FAQ_CONTENT[openPage].text.title}</h2>
              <p>{FAQ_CONTENT[openPage].text.body}</p>
            </div>
          </div>
        </div>
      )}
    </>
  );
}