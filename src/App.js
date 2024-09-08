import React, { useState } from "react";
import "./App.css";
import GalleryItem from "./components/Gallery/GalleryItem";
import "./components/Gallery/Gallery.css";

import "./assets/fonts/acorn.woff";

import GalleryItemOpenContext from "./context/GalleryItemOpenContext.jsx";

const componentList = [
  "Accordion",
  "Report Form",
  "Load File",
  "Image Carousel",
  "Game Collection",
  "WhatToWatch",
  "MORE: Mobility Report",
];

function App() {
  const [itemOpen, setItemOpen] = useState(false);
  const value = { itemOpen, setItemOpen };

  return (
    <div className="App">
      <div className="blur-background">
        <div className="transition-background"></div>
      </div>
      <span className="warning">This porfolio is work in progress 😓</span>
      <div className="home-title">
        <h1>Hi! I'm Pau Galan.</h1>

        <h2>A Frontend Developer.</h2>

        <span>
          Enthusiast of FrontEnd design and development. More than two years of
          experience in React, HTML, JS, CSS... Eager to start a new adventure!
        </span>
      </div>

      <div className="contact-bar">
        <div> Github </div>
        <div> LinkedIn </div>
        <div> CV </div>
        <div> Contact Me</div>
      </div>
      <GalleryItemOpenContext.Provider value={value}>
        <div className="gallery">
          {componentList.map((el, index) => (
            <GalleryItem componentName={el} key={index} />
          ))}
        </div>
      </GalleryItemOpenContext.Provider>
    </div>
  );
}

export default App;
