import React, { useRef, useState } from "react";

import carousel1 from "../assets/carousel1.jpeg"
import carousel2 from "../assets/carousel2.jpeg"
import carousel3 from "../assets/carousel3.jpeg"

const images = [
  carousel1,carousel2,
  carousel3,
];

const Carousel = () => {
  const [currentImage, setCurrentImage] = useState(0);
  const refs = useRef(images.map(() => React.createRef()));

  const scrollToImage = (i) => {
    setCurrentImage(i);
    refs.current[i].current.scrollIntoView({
      behavior: "smooth",
      block: "nearest",
      inline: "start",
    });
  };

  const nextImage = () => {
    if (currentImage >= images.length - 1) {
      scrollToImage(0);
    } else {
      scrollToImage(currentImage + 1);
    }
  };

  const previousImage = () => {
    if (currentImage === 0) {
      scrollToImage(images.length - 1);
    } else {
      scrollToImage(currentImage - 1);
    }
  };

  const arrowStyle =
    "absolute text-white text-2xl z-10 bg-black h-10 w-10 flex items-center justify-center";

  const sliderControl = (isLeft) => (
    <button
      type="button"
      onClick={isLeft ? previousImage : nextImage}
      className={`flex items-center justify-center bg-orange-500 ${arrowStyle} ${isLeft ? "left-2" : "right-2"} top-1/2 -translate-y-1/2`}
    >
      <span
        role="img"
        aria-label={`Arrow ${isLeft ? "left" : "right"}`}
        className="flex items-center justify-center"
      >
        {isLeft ? "◀" : "▶"}
      </span>
    </button>
  );

  return (
    <div className="m-auto flex w-screen items-center justify-center p-12 md:w-3/4">
      <div className="relative w-full">
        <div className="carousel">
          {sliderControl(true)}
          {images.map((img, i) => (
            <div
              className="aspect-video w-full flex-shrink-0"
              key={img}
              ref={refs.current[i]}
            >
              <img src={img} className="w-full object-contain" alt="" />
            </div>
          ))}
          {sliderControl()}
        </div>
      </div>
    </div>
  );
};

export default Carousel;
