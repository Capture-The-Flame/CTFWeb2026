import { useState } from "react";
import noticeBoard from "../../assets/pieces/faq_board.svg";
import pageOne from "../../assets/pieces/pixpage_one.svg";
import pageTwo from "../../assets/pieces/pixpage_two.svg";
import pageThree from "../../assets/pieces/pixpage_three.svg";
import "./FAQ.css";

// FAQ 
const FAQ_CONTENT = {
  1: { img: pageOne, text: { title: "Question", body: "Answer" } },
  2: { img: pageTwo, text: { title: "Question", body: "Answer" } },
  3: { img: pageThree, text: { title: "Question", body: "Answer" } },
  4: { img: pageOne, text: { title: "Question", body: "Answer" } },
  5: { img: pageTwo, text: { title: "Question", body: "Answer" } },
  6: { img: pageThree, text: { title: "Question", body: "Answer" } }
};

export default function FAQ() {
  const [openBoard, setOpenBoard] = useState(false); // board popup
  const [openPage, setOpenPage] = useState(null); // page popup

  return (
    <>
      {/* small board */}
    <div className="board-container">
    <div className="board-small-frame" onClick={() => setOpenBoard(true)}>
        <div className="board-relative">
        <img src={noticeBoard} className="board-small" />

        {/* small board pages */}
        <div className="pages">
            <div
            className="page-small" id="one-s"
            style={{ top: "28%", left: "24%" }}
            >
                <img src={pageOne} className="page-image" />
            </div>

            <div
            className="page-small" id="two-s"
            style={{ top: "46%", left: "24%" }}
            >
                <img src={pageTwo} className="page-image" />
            </div>

            <div
            className="page-small" id="three-s"
            style={{ top: "48%", left: "63%" }}
            >
                <img src={pageTwo} className="page-image" />
            </div>

            <div
            className="page-small" id="four-s"
            style={{ top: "36%", left: "42%" }}
            >
                <img src={pageThree} className="page-image" />
            </div>
        </div>
        </div>
    </div>
    </div>

      {/* big board popup */}
      {openBoard && (
        <div className="faq-popup" onClick={() => setOpenBoard(false)}>
          <div className="board-frame" onClick={(e) => e.stopPropagation()}>
            <div className="board-relative">
              <img src={noticeBoard} className="board-big" />
            {/* small board pages */}
              <div className="pages">
                <div
                  className="page" id="one-b"
                  style={{ top: "26%", left: "28%" }}
                  onClick={() => setOpenPage(1)}
                >
                  <img src={pageOne} className="page-image" />
                </div>

                <div
                  className="page" id="two-b"
                  style={{ top: "45%", left: "28%" }}
                  onClick={() => setOpenPage(2)}
                >
                  <img src={pageTwo} className="page-image" />
                </div>

                <div
                  className="page-s" id="three-b"
                  style={{ top: "37%", left: "38%" }}
                  onClick={() => setOpenPage(3)}
                >
                  <img src={pageThree} className="page-image" />
                </div>

                <div
                  className="page" id="four-b"
                  style={{ top: "50%", left: "48%" }}
                  onClick={() => setOpenPage(4)}
                >
                  <img src={pageOne} className="page-image" />
                </div>

                <div 
                  className="page" id="five-b"
                  style={{ top: "26%", left: "46%" }}
                  onClick={() => setOpenPage(5)}
                >
                  <img src={pageTwo} className="page-image" />
                </div>

                <div
                  className="page-s" id="six-b"
                  style={{ top: "35%", left: "57%" }}
                  onClick={() => setOpenPage(6)}
                >
                  <img src={pageThree} className="page-image" />
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* page popup */}
      {openPage && (
        <div className="page-popup" onClick={() => setOpenPage(null)}>
          <div className="page-popup-content" onClick={(e) => e.stopPropagation()}>
            <div className="page-popup-page">
              <img
                src={FAQ_CONTENT[openPage].img}
                className="page-popup-image"
              />
              <div className="page-popup-text">
                <h2>{FAQ_CONTENT[openPage].text.title}</h2>
                <p>{FAQ_CONTENT[openPage].text.body}</p>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}