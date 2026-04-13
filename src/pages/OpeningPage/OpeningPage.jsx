import { useNavigate } from "react-router-dom";
import { useState, useRef, useEffect } from "react";
import "./OpeningPage.css";

import road from "../../assets/road.svg";
import BigCloud from "../../assets/cloud-big.svg";
import SmallCloud from "../../assets/cloud-small.svg";
import lightingPole from "../../assets/LightingPole.svg";
import car from "../../assets/car-on-the-side.svg";
import logo from "../../assets/logo.png";
import tillBlackLogo from "../../assets/till_blacklogo.svg";
import bushLeft from "../../assets/bush-left.svg";
import bushRight from "../../assets/bush-right.svg";
import aboutIcon from "../../assets/aboutIcon.svg";
import mapal from "../../assets/keshet.svg";

function OpeningPage() {
  const navigate = useNavigate();

  const [driveMode, setDriveMode] = useState(false);
  const [aboutOpen, setAboutOpen] = useState(false);
  const popupRef = useRef(null);

  const handleStartLearning = () => {
    setDriveMode(true);

    // ⏱️ זמן האנימציה (2s) + חצי שנייה השהייה
    setTimeout(() => {
      navigate("/learning");
    }, 2400);
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (popupRef.current && !popupRef.current.contains(event.target)) {
        setAboutOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div className="opening-page">
      {/* כביש + רכב */}
      <div className="ground-area">
        <img src={road} className="road-opening-page" />

        <img
          src={lightingPole}
          className={`lighting-pole-left ${driveMode ? "pole-move-left" : ""}`}
        />

        <img
          src={lightingPole}
          className={`lighting-pole-right ${
            driveMode ? "pole-move-right" : ""
          }`}
        />

        <img src={bushLeft} className="bush-left-open" />
        <img src={bushRight} className="bush-right-open" />

        <img
          src={car}
          className={`car-opening-page ${driveMode ? "car-drive" : ""}`}
        />
      </div>

      {/* עננים */}
      <img src={BigCloud} className="big-cloud-opening-page-left" />
      <img src={BigCloud} className="big-cloud-opening-page-right" />
      <img src={SmallCloud} className="small-cloud-opening-page-left" />
      <img src={SmallCloud} className="small-cloud-opening-page-right" />

      {/* לוגו ימני */}
      <img src={tillBlackLogo} className="till-logo-black-opening-page" />

      {/* אודות */}
      <div className="about-container" ref={popupRef}>
        <img
          src={aboutIcon}
          className="about-btn"
          onClick={() => setAboutOpen(!aboutOpen)}
        />

        {aboutOpen && (
          <div className="about-popup">
            <div className="about-section">
              <strong>מפתחת ראשית:</strong>
              <img src={mapal} className="about-dev-img" />
              <span>טוראי קשת פרי</span>
            </div>

            <div className="about-section">
              <strong>גרפיקה:</strong>
              <span>טוראי קשת פרי</span>
            </div>

            <div className="about-section">
              <strong>מומחי תוכן:</strong>
              <span>סגן עדן רוקח</span>
              <span>סמל שיר אשר לוי</span>
            </div>

            <div className="about-section">
              <strong>רמ״ד טי״ל:</strong>
              <span>רס”מ עדן בן חמו</span>
            </div>

            <div className="about-section">
              <strong>גרסה:</strong>
              <span>מרץ 2026</span>
            </div>
          </div>
        )}
      </div>

      {/* תוכן מרכזי */}
      <div className="opening-content">
        <img src={logo} className="logo-bahad13-opening-page" />

        <h1 className="opening-page-header">ברוכים הבאים ללומדת תעבורה</h1>

        {/* הכפתור נעלם בזמן נסיעה */}
        {!driveMode && (
          <button onClick={handleStartLearning} className="start-btn-to-topics">
            להתחלת הלומדה
          </button>
        )}
      </div>
    </div>
  );
}

export default OpeningPage;
