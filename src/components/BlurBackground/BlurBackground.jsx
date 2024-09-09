import React from "react";
import "./blurBackground.css";

export default function BlurBackground() {
  return (
    <div class="canvas-container">
      <div class="elipsis1"></div>
      <div class="elipsis2"></div>
      <div class="circulo"></div>
      <div class="cuadrado"></div>
      <div class="blur-overlay"></div>
      <div className="transition-background"></div>
    </div>
  );
}
