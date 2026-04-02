import { useState, useEffect } from "react";
import noticeBoard from "../../assets/pieces/faq_board_final.svg";
import bigBoardLaptop from "../../assets/pieces/bigBoard.svg";
import bigBoardMobile from "../../assets/pieces/faq_big.svg";
import pageOne from "../../assets/pieces/Test2.svg";
import pageThree from "../../assets/pieces/Test3.svg";
import pageFour from "../../assets/pieces/Frame4.svg";
import pageSix from "../../assets/pieces/Frame6.svg";
import smallOne from "../../assets/pieces/Frame 5.svg";
import smallTwo from "../../assets/pieces/Frame 8.svg";
import smallThree from "../../assets/pieces/Frame 10.svg";
import "./FAQ.css";

const FAQ_CONTENT = {
  1: { 
    img: pageSix, 
    text: { title: "What is a CTF?", body: "A competition where you work in teams to solve many different kinds of cybersecurity challenges!" },
    laptop: { 
      styles: { rot: "0deg", top: "22%", left: "16%", width: "15%" },
      textStyles: { top: "15%", left: "17%", width: "65%", fontSize: "1.5vw", bodySize: "1.3vw" },
      button: {bottom: "10%", right: "12%"}
    },
    // mobile
    mobile: { 
      styles: { pageRot: "0deg", textRot: "0deg", top: "22%", left: "16%", width: "22%" },
      textStyles: { top: "15%", left: "12%", width: "75%", fontSize: "2.4vw", bodySize: "1.4vw" },
      button: {bottom: "15%", right: "12%"}
    }
  },
  2: { 
    img: pageThree, 
    text: { title: "Who is hosting the event?", body: "UIC's WiCyS and LOGICA organizations." },
    laptop: { 
      styles: { rot: "0deg", top: "22%", left: "50%", width: "20%" },
      textStyles: { top: "20%", left: "10%", width: "80%", fontSize: "1.5vw", bodySize: "1.3vw" },
      button: {bottom: "20%", right: "8%"} 
    },
    // mobile
    mobile: { 
      styles: { pageRot: "0deg", textRot: "0deg", top: "30%", left: "43%", width: "40%" },
      textStyles: { top: "20%", left: "10%", width: "80%", fontSize: "2.2vw", bodySize: "1.3vw" },
      button: {bottom: "35%", right: "8%"}
    }
  },
  3: { 
    img: pageFour, 
    text: { title: "Why would I do a CTF?", body: "CTF competitions are a great opportunity to showcase your cybersecurity capabilities and pick up some new tricks from other participants!" },
    laptop: { 
      styles: { rot: "0deg", top: "27%", left: "32%", width: "18%" },
      textStyles: { top: "15%", left: "15%", width: "70%", fontSize: "1.5vw", bodySize: "1.3vw" },
      button: {bottom: "10%", right: "12%"} 
    },
    // mobile
    mobile: { 
      styles: { pageRot: "0deg", textRot: "0deg", top: "20%", left: "56%", width: "26%" },
      textStyles: { top: "15%", left: "12%", width: "75%", fontSize: "2.4vw", bodySize: "1.4vw" },
      button: {bottom: "15%", right: "12%"}
    }
  },
  4: { 
    img: pageThree, 
    text: { title: "Do I have to be a student at UIC to participate?", body: "No! The competition is available to any Chicagoland Universities!" },
    laptop: { 
      styles: { rot: "0deg", top: "65%", left: "15%", width: "18%" },
      textStyles: { top: "18%", left: "12%", width: "75%", fontSize: "1.3vw", bodySize: "1.1vw" },
      button: {bottom: "20%", right: "8%"} 
    },
    // mobile
    mobile: { 
      styles: { pageRot: "0deg", textRot: "0deg", top: "30%", left: "16%", width: "40%" },
      textStyles: { top: "15%", left: "12%", width: "75%", fontSize: "2.4vw", bodySize: "1.4vw" },
      button: {bottom: "30%", right: "8%"}
    }
  },
  5: { 
    img: pageSix, 
    text: { title: "What if I don't have experience?", body: "You don't need experience! We have a Beginner Track for those with no prior experience." },
    laptop: { 
      styles: { rot: "0deg", top: "35%", left: "68%", width: "15%" },
      textStyles: { top: "18%", left: "12%", width: "76%", fontSize: "1.5vw", bodySize: "1.3vw" },
      button: {bottom: "10%", right: "12%"} 
    },
    // mobile
    mobile: { 
      styles: { pageRot: "0deg", textRot: "0deg", top: "20%", left: "18%", width: "24%" },
      textStyles: { top: "15%", left: "12%", width: "75%", fontSize: "2.4vw", bodySize: "1.4vw" },
      button: {bottom: "12%", right: "12%"}
    }
  },
  6: { 
    img: pageOne, 
    text: { title: "What are the resources that we will need?", body: "We will be providing a cyber pack that contains any sites required to compete." },
    laptop: { 
      styles: { rot: "0deg", top: "60%", left: "50%", width: "20%" },
      textStyles: { top: "15%", left: "12%", width: "76%", fontSize: "1.3vw", bodySize: "1.2vw" },
      button: {bottom: "20%", right: "8%"} 
    },
    // mobile
    mobile: { 
      styles: { pageRot: "0deg", textRot: "0deg", top: "30%", left: "43%", width: "40%" },
      textStyles: { top: "15%", left: "12%", width: "75%", fontSize: "2.4vw", bodySize: "1.4vw" },
      button: {bottom: "35%", right: "8%"}
    }
  },
  
};

const SECTIONS = [[1, 2], [3, 4], [5, 6]];

const SMALL_BOARD_PAGES = [
  { img: smallThree, top: "30%", left: "25%", width: "20%", rot: "0deg" },
  { img: smallTwo, top: "31%", left: "53%", width: "18%", rot: "0deg" },
  { img: smallOne, top: "50%", left: "28%", width: "20%", rot: "0deg" },
];


export default function FAQ() {
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);
  const [openBoard, setOpenBoard] = useState(false);
  const [openPage, setOpenPage] = useState(null);
  const [currSection, setCurrSection] = useState(0);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth <= 768);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const handleClose = () => { setOpenBoard(false); setOpenPage(null); };

  return (
    <div className="faq-main-wrapper">
      {/* small board */}
      <div className="board-container">
        <div className="board-small-frame" onClick={() => setOpenBoard(true)}>
          <img src={noticeBoard} className="board-small" alt="FAQ Board" />
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

      {/*big board popup*/}
      {openBoard && (
        <div className="faq-popup" onClick={handleClose}>
          <div className="board-frame" onClick={(e) => e.stopPropagation()}>
            <div className="board-image-wrapper">
              <img src={isMobile ? bigBoardMobile : bigBoardLaptop} className="board-big" />
              <button className="board-close-btn" onClick={handleClose}>×</button>

              <div className="board-overlay">
                {(isMobile ? SECTIONS[currSection] : Object.keys(FAQ_CONTENT)).map((key) => {
                  const item = FAQ_CONTENT[key];
                  const config = isMobile ? item.mobile : item.laptop;
                  return (
                    <div
                      key={key}
                      className="page"
                      onClick={() => setOpenPage(key)}
                      style={{
                        transform: `rotate(${config.styles.rot || config.styles.pageRot})`,
                        top: config.styles.top,
                        left: config.styles.left,
                        width: config.styles.width
                      }}
                    >
                      <img src={item.img} className="page-image" />
                      <div
                        className="page-text-overlay"
                        style={{
                          transform: `rotate(${config.styles.textRot || '0deg'})`,
                          top: config.textStyles.top,
                          left: config.textStyles.left,
                          width: config.textStyles.width
                        }}
                      >
                        <h3 className="page-title-mini" style={{ fontSize: isMobile ? `clamp(12px, ${config.textStyles.fontSize}, 32px)` : config.textStyles.fontSize }}>
                          {item.text.title}
                        </h3>
                        <p className="page-body-mini" style={{ fontSize: isMobile ? `clamp(10px, ${config.textStyles.bodySize}, 20px)` : config.textStyles.bodySize }}>
                          {item.text.body}
                        </p>
                      </div>
                    </div>
                  );
                })}

                {/*carousel setup for mobile*/}
                {isMobile && (
                  <>
                    <button className="carousel-arrow left" onClick={(e) => { e.stopPropagation(); setCurrSection(p => (p === 0 ? SECTIONS.length - 1 : p - 1)) }}>‹</button>
                    <button className="carousel-arrow right" onClick={(e) => { e.stopPropagation(); setCurrSection(p => (p + 1) % SECTIONS.length) }}>›</button>
                    <div className="carousel-dots">
                      {SECTIONS.map((_, i) => <button key={i} className={`dot ${currSection === i ? "active" : ""}`} onClick={(e) => { e.stopPropagation(); setCurrSection(i); }} />)}
                    </div>
                  </>
                )}
              </div>
            </div>
          </div>
        </div>
      )}

      {/* individual page popup */}
      {openPage && (
        <div className="page-popup" onClick={() => setOpenPage(null)}>
          <div className="page-popup-page" onClick={(e) => e.stopPropagation()}>
            <img src={FAQ_CONTENT[openPage].img} className="page-popup-image" />
            <div className="page-popup-text">
              <h2>{FAQ_CONTENT[openPage].text.title}</h2>
              <p>{FAQ_CONTENT[openPage].text.body}</p>
            </div>
            <button className="page-back-btn" onClick={() => setOpenPage(null)}
              style={{
                bottom: isMobile ? FAQ_CONTENT[openPage].mobile.button?.bottom : FAQ_CONTENT[openPage].laptop.button?.bottom,
                right: isMobile ? FAQ_CONTENT[openPage].mobile.button?.right : FAQ_CONTENT[openPage].laptop.button?.right
              }}  
            >
            Back
            </button>
          </div>
        </div>
      )}
    </div>
  );
}