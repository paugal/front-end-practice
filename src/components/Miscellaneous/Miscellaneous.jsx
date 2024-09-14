import React from "react";

import './Miscellaneous.css'

import Accordion from "../Accordion/Accordion";
import LoadFile from "../LoadFile/LoadFile";
import ReportForm from "../Form/formReport";
import ImageCarousel from "../ImageCarousel/ImageCarousel";

export default function Miscellaneous() {
  return (
    <div className="misc-container">
      <h1>Other Small Exercicies</h1>
      <span> Here there are more things i did.</span>

      <h2>Carousel of images</h2>
      <ImageCarousel />

      <h2>Load Fiels</h2>
      <LoadFile />

      <h2>Report Form</h2>
      <ReportForm />

      <h2>Accordion</h2>
      <Accordion />
    </div>
  );
}
