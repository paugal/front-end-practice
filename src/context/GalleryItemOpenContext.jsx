import React from "react";

// set the defaults
const GalleryItemOpen = React.createContext({
  itemOpen: false,
  setItemOpen: () => {},
});

export default GalleryItemOpen;
