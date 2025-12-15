import React, { useState, useEffect } from "react";
import jeniBg from '../image/jeni1.jpg'

function Imageslide({ slides }) {
  const [currentIndex, setCurrentIndex] = useState(0);

  const slideStyle = {
    width: "1300px",
    height: "600px",
    borderRadius: "20px",
    backgroundSize: "cover",
    backgroundPosition: "center",
    marginTop: "140px",
    marginLeft: "70px",
    backgroundImage: `url(${slides[currentIndex].url})`,
    position: "relative"
  };

  const goToPrevious = () => {
    const newIndex = currentIndex === 0 ? slides.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };

  const goToNext = () => {
    const newIndex =
      currentIndex === slides.length - 1 ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };

  useEffect(() => {
    const timer = setInterval(() => {
      goToNext();
    }, 3000);

    return () => clearInterval(timer);
  });

  return (
    <div
      className="relative w-full h-screen overflow-hidden bg-cover bg-center shadow-xl"
      style={{  backgroundImage: `url(${jeniBg})`, }}
    > 
      <div style={slideStyle} className="w-full h-screen py-15" ></div>

      <div
        className="absolute top-1/2 left-5 -translate-y-1/2 text-white hover:bg-yellow-900
                   bg-black/40 p-3 rounded-full cursor-pointer text-3xl"
        onClick={goToPrevious}
      >
        ❮
      </div>

      <div
        className="absolute top-1/2 right-5 -translate-y-1/2 text-white hover:bg-yellow-900
                   bg-black/40 p-3 rounded-full cursor-pointer text-3xl"
        onClick={goToNext}
      >
        ❯
      </div>

      <div className="absolute bottom-3 w-full flex justify-center gap-3">
        {slides.map((_, index) => (
          <div
            key={index}
            className={`w-4 h-4 rounded-full cursor-pointer ${
              index === currentIndex ? "bg-white" : "bg-gray-400"
            }`}
            onClick={() => setCurrentIndex(index)}
          ></div>
        ))}
      </div>
    </div>
  );
}

export default Imageslide;
