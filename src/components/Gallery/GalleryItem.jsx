import React, { useState, useEffect, useRef, useContext } from "react";
import "./Gallery.css";

import GameCollection from "../GameCollection/GameCollection";
import GalleryItemOpenContext from "../../context/GalleryItemOpenContext";
import WhatToWatch from "../WhatToWatch/WhatToWatch";
import More from "../MORE/More";
import Miscellaneous from "../Miscellaneous/Miscellaneous";

import { motion } from "framer-motion";

import gameCollectionImg from "./images/gameCollection.png";
import whattowatchimg from "./images/whattowatch.png";
import moreImg from "./images/more.png";
import misc from "./images/02.png";

export default function GalleryItem({ componentName }) {
  const [showContent, setShowContent] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const elementRef = useRef(null);
  const { itemOpen, setItemOpen } = useContext(GalleryItemOpenContext);

  const imageMap = {
    "Game Collection": gameCollectionImg,
    WhatToWatch: whattowatchimg,
    "MORE: Mobility Report": moreImg,
    Miscellaneous: misc,
  };

  const backgroundColorMap = {
    "Game Collection": "#4CAF50",
    WhatToWatch: "#F44336",
    "MORE: Mobility Report": "#EC7EFF",
    Miscellaneous: "#FF9800",
  };

  const getBackgroundColorForComponent = (componentName) => {
    return backgroundColorMap[componentName] || "#E0E0E0"; // Default gray
  };

  const getImageForComponent = (componentName) => {
    return imageMap[componentName] || gameCollectionImg;
  };

  function renderSwitch() {
    switch (componentName) {
      case "Game Collection":
        return <GameCollection />;
      case "WhatToWatch":
        return <WhatToWatch />;
      case "MORE: Mobility Report":
        return <More />;
      case "Miscellaneous":
        return <Miscellaneous />;
      default:
        return <div>Empty Component</div>;
    }
  }

  const changeShowContent = () => {
    console.log("CLICK!");
    if (showContent) {
      setIsVisible(false);
      setTimeout(() => setShowContent(false), 300);
      document.body.style.overflow = "auto";
      setTimeout(() => setItemOpen(true), 300);
    } else {
      setShowContent(true);
      setTimeout(() => setIsVisible(true), 10);
      document.body.style.overflow = "hidden";
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
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4, duration: 0.8 }}
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
          <div className="popUpItem-container">{renderSwitch()}</div>
        </div>
      )}
    </>
  );
}
