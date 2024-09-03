import React, { useEffect, useState, useRef } from "react";
import "./ImageCarousel.css";
import CanvasImage from "./CanvasImage";

export default function ImageCarousel() {
  const [selectedImageIndex, setSelectedImageIndex] = useState(0);
  const [focusImage, setFocusImage] = useState(0);
  const previewRef = useRef(null);

  function importAll(r) {
    return r.keys().map(r);
  }

  const images = importAll(
    require.context("./assets", false, /\.(png|jpe?g)$/)
  );

  function selectPhoto(index) {
    setSelectedImageIndex(index);
    centerImageInView(index);
  }

  function changeImage(change) {
    let newIndex = selectedImageIndex + change;

    if (newIndex >= images.length) {
      newIndex = 0;
    } else if (newIndex < 0) {
      newIndex = images.length - 1;
    }

    setSelectedImageIndex(newIndex);
    centerImageInView(newIndex);
  }

  function centerImageInView(index) {
    const previewContainer = previewRef.current;
    const selectedImg = previewContainer.children[index];
    const containerWidth = previewContainer.clientWidth;
    const imgWidth = selectedImg.clientWidth;

    const scrollPosition =
      selectedImg.offsetLeft - containerWidth / 1.2 + imgWidth / 4;

    previewContainer.scrollTo({
      left: scrollPosition,
      behavior: "smooth",
    });
  }

  useEffect(() => {
    centerImageInView(selectedImageIndex);
  }, [selectedImageIndex]);

  function changetoFocus() {
    setFocusImage(!focusImage);
  }

  return (
    <div className="carousel-container">
      {focusImage ? (
        <div className="focus-image">
          {/* <img src={images[selectedImageIndex]} alt={selectedImageIndex} /> */}
          <CanvasImage image={images[selectedImageIndex]}></CanvasImage>
          <div className="description-image">
            <h2>Descripcion de la imagen</h2>
            <div>
              <button>
                <span class="material-symbols-outlined">favorite</span>
              </button>
              <button>
                <span class="material-symbols-outlined">download</span>
              </button>
            </div>
          </div>
        </div>
      ) : (
        <>
          <div className="main-box-carousel">
            <button
              className="button-carousel prev-button"
              onClick={() => changeImage(-1)}
            >
              <span className="material-symbols-outlined">arrow_back_ios</span>
            </button>
            <div className="selected-img">
              <img
                src={images[selectedImageIndex]}
                alt={selectedImageIndex}
                onClick={changetoFocus}
              />
            </div>
            <button
              className="button-carousel next-button"
              onClick={() => changeImage(1)}
            >
              <span className="material-symbols-outlined">
                arrow_forward_ios
              </span>
            </button>
          </div>
          <div className="preview-imgs" ref={previewRef}>
            {images.map((el, index) => (
              <img
                key={index}
                src={el}
                alt={`Preview ${index}`}
                onClick={() => selectPhoto(index)}
                className={index === selectedImageIndex ? "active" : ""}
              />
            ))}
          </div>
        </>
      )}
    </div>
  );
}
