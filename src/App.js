import React, { useState } from "react";
import "./App.css";
import GalleryItem from "./components/Gallery/GalleryItem";
import "./components/Gallery/Gallery.css";

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
      <span className="warning">This porfolio is work in progress 😓</span>
      <h1>React Showcase</h1>
      <h2>Pau Galan Gutierrez</h2>
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
