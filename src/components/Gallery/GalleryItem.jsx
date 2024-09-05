import React, { useState, useEffect, useRef, useContext } from "react";
import "./Gallery.css";
import Accordion from "../Accordion/Accordion";
import LoadFile from "../LoadFile/LoadFile";
import ReportForm from "../Form/formReport";
import ImageCarousel from "../ImageCarousel/ImageCarousel";
import GameCollection from "../GameCollection/GameCollection";
import GalleryItemOpenContext from "../../context/GalleryItemOpenContext";
import WhatToWatch from "../WhatToWatch/WhatToWatch";
import More from "../MORE/More";

export default function GalleryItem({ componentName }) {
  const [showContent, setShowContent] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const elementRef = useRef(null);
  const { itemOpen, setItemOpen } = useContext(GalleryItemOpenContext);

  function renderSwitch() {
    switch (componentName) {
      case "Accordion":
        return <Accordion />;
      case "Load File":
        return <LoadFile />;
      case "Report Form":
        return <ReportForm />;
      case "Image Carousel":
        return <ImageCarousel />;
      case "Game Collection":
        return <GameCollection />;
      case "WhatToWatch":
        return <WhatToWatch />;
      case "MORE: Mobility Report":
        return <More />;
      default:
        return <div>Empty Component</div>;
    }
  }

  const changeShowContent = () => {
    console.log("CLICK!");
    if (showContent) {
      setIsVisible(false);
      setTimeout(() => setShowContent(false), 300);
      setTimeout(() => setItemOpen(true), 300);
    } else {
      setShowContent(true);
      setTimeout(() => setIsVisible(true), 10);
      setTimeout(() => setItemOpen(false), 10);
    }
  };

  const handleClickOutside = (event) => {
    if (elementRef.current && !elementRef.current.contains(event.target)) {
      changeShowContent();
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [showContent]);

  return (
    <>
      <div onClick={changeShowContent} className="gallery-item">
        {" "}
        {componentName}{" "}
      </div>
      {showContent && (
        <div
          ref={elementRef}
          id="popUpItem"
          className={`popUpItem ${isVisible ? "visible" : "hidden"}`}
        >
          <div className="iconCloseContainer">
            <span
              onClick={changeShowContent}
              className="closeIcon material-symbols-outlined"
            >
              close
            </span>
          </div>
          {renderSwitch()}
        </div>
      )}
    </>
  );
}
