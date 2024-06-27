import { faXmark } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useEffect, useRef, useState } from "react";
import img1 from "../assets/img1.jpeg";
import img2 from "../assets/img2.jpeg";
import img3 from "../assets/img3.jpeg";
import img4 from "../assets/img4.jpeg";
import img5 from "../assets/img5.jpeg";
import img6 from "../assets/img6.jpeg";
const Gallery = () => {
  const photos = [
    { src: img1, id: 1 },
    { src: img2, id: 2 },
    { src: img3, id: 3 },
    { src: img4, id: 4 },
    { src: img5, id: 5 },
    { src: img6, id: 6 },
  ];

  const [model, setModel] = useState(false);
  const [tempImgSrc, setTempImgSrc] = useState("");
  const modalRef = useRef();

  const getImg = (src) => {
    setTempImgSrc(src);
    setModel(true);
  };

  const handleClickOutside = (event) => {
    if (modalRef.current && !modalRef.current.contains(event.target)) {
      setModel(false);
    }
  };

  useEffect(() => {
    if (model) {
      document.addEventListener("mousedown", handleClickOutside);
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
    }
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [model]);

  return (
    <>
      <div className={model ? "model open" : "model"}>
        <div ref={modalRef}>
          <img src={tempImgSrc} alt="" className="cursor-pointer" />
          <FontAwesomeIcon
            icon={faXmark}
            className="fixed right-5 top-5 cursor-pointer text-3xl text-white md:text-5xl"
            onClick={() => {
              setModel(false);
            }}
          />
        </div>
      </div>
      <div className="mb-10">
        <h2 className="mb-10 text-center text-3xl font-bold md:text-6xl">
          Gallery
        </h2>
        <div className="gallery">
          {photos.map((photo) => (
            <div
              className="pics"
              key={photo.id}
              onClick={() => getImg(photo.src)}
            >
              <img src={photo.src} alt="" className="w-full cursor-pointer" />
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Gallery;
