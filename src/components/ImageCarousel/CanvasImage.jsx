import React, { useRef, useMemo, useEffect } from "react";

export default function CanvasImage({ image }) {
  const canvasRef = useRef(null);
  const containerRef = useRef(null);
  const observer = useRef(null);
  const background = useMemo(() => new Image(), [image]);

  // Debounce function to limit the rate of function execution
  function debounce(fn, ms) {
    let timer;
    return () => {
      clearTimeout(timer);
      timer = setTimeout(() => fn.apply(this, arguments), ms);
    };
  }

  // Function to handle the canvas drawing
  const resizeCanvas = debounce(() => {
    if (!canvasRef.current || !containerRef.current) return;
    const { width, height } = background;
    const targetWidth = containerRef.current.clientWidth;

    // Calculate the scale and new canvas dimensions
    const scale = targetWidth < width ? targetWidth / width : 1;
    const newWidth = width * scale;
    const newHeight = height * scale;

    // Redraw the canvas with the scaled dimensions
    canvasRef.current.width = newWidth;
    canvasRef.current.height = newHeight;
    canvasRef.current
      .getContext("2d")
      .drawImage(background, 0, 0, newWidth, newHeight);
  }, 100); // Adjust debounce delay as needed

  // Observe container resizing
  useEffect(() => {
    observer.current = new ResizeObserver(() => {
      resizeCanvas();
    });

    if (containerRef.current) {
      observer.current.observe(containerRef.current);
    }

    return () => {
      if (observer.current && containerRef.current) {
        observer.current.unobserve(containerRef.current);
      }
    };
  }, [background]);

  // Load and draw the image on the canvas
  useEffect(() => {
    background.src = image;

    background.onload = () => {
      // Initial drawing when the image loads
      resizeCanvas();
    };
  }, [background, image, resizeCanvas]);

  return (
    <div ref={containerRef}>
      <canvas ref={canvasRef} />
    </div>
  );
}
