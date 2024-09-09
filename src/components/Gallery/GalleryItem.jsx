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

import { motion } from "framer-motion";

import gameCollectionImg from "./images/gameCollection.png";
import whattowatchimg from "./images/whattowatch.png";
import moreImg from "./images/more.png";

export default function GalleryItem({ componentName }) {
  const [showContent, setShowContent] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const elementRef = useRef(null);
  const { itemOpen, setItemOpen } = useContext(GalleryItemOpenContext);

  const imageMap = {
    Accordion: gameCollectionImg,
    "Load File": gameCollectionImg,
    "Report Form": gameCollectionImg,
    "Image Carousel": gameCollectionImg,
    "Game Collection": gameCollectionImg,
    WhatToWatch: whattowatchimg,
    "MORE: Mobility Report": moreImg,
  };

  const backgroundColorMap = {
    Accordion: "#FFEB3B", // Yellow
    "Load File": "#00BCD4", // Cyan
    "Report Form": "#FF9800", // Orange
    "Image Carousel": "#2196F3", // Blue
    "Game Collection": "#4CAF50", // Green
    WhatToWatch: "#F44336", // Red
    "MORE: Mobility Report": "#EC7EFF", // Purple
  };

  const getBackgroundColorForComponent = (componentName) => {
    return backgroundColorMap[componentName] || "#E0E0E0"; // Default gray
  };

  const getImageForComponent = (componentName) => {
    return imageMap[componentName] || gameCollectionImg;
  };

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
      <motion.h1
        initial={{ opacity: 0, y: -30 }} // Start state
        animate={{ opacity: 1, y: 0 }} // End state (animation)
        transition={{ delay: 0.4, duration: 0.8 }} // Animation duration
      >
        <div
          onClick={changeShowContent}
          className="gallery-item"
          style={{
            backgroundColor: getBackgroundColorForComponent(componentName),
          }}
        >
          <h3>{componentName}</h3>
          <img src={getImageForComponent(componentName)} alt={componentName} />
        </div>
      </motion.h1>
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
