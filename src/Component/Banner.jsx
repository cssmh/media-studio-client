import { useEffect, useState } from "react";

import Image1 from "../assets/img_1.jpg";
import Image2 from "../assets/img_2.jpg";
import Image3 from "../assets/img_3.jpg";
import Image4 from "../assets/img_4.jpg";
import Image5 from "../assets/img_5.jpg";

const HeroData = [
  {
    id: 1,
    img: Image1,
    movieName: "Kubo and the Two",
    Time: "Feb 15",
    Details: "Sony",
  },
  {
    id: 2,
    img: Image2,
    movieName: "The Hurricane Height",
    Time: "April 09",
    Details: "Netflix",
  },
  {
    id: 3,
    img: Image3,
    movieName: "Jumanji: Welcome to the Jungle",
    Time: "Feb 16",
    Details: "Warner",
  },
  {
    id: 4,
    img: Image4,
    movieName: "Death Wish",
    Time: "July 26",
    Details: "Warner",
  },
  {
    id: 5,
    img: Image5,
    movieName: "Supersonic",
    Time: "April 26",
    Details: "Warner",
  },
];

const Banner = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % HeroData.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative overflow-hidden min-h-[250px] sm:min-h-[450px] flex justify-center items-center">
      <img
        src={HeroData[currentIndex].img}
        alt="Hero Image"
        className="absolute inset-0 w-full h-full object-cover z-0"
      />
      <div className="relative z-10 container flex flex-col sm:flex-row items-center h-full">
        <div className="flex flex-col justify-center gap-6 sm:pl-8 text-center sm:text-left">
          <h2 className="text-lg sm:text-4xl lg:text-6xl font-bold text-white uppercase tracking-wide">
            {HeroData[currentIndex].movieName}
          </h2>
          <h1 className="text-lg font-bold text-white drop-shadow-lg">
            From <span className="text-2xl italic">{HeroData[currentIndex].Time}</span>
          </h1>
          <h1 className="text-md font-bold uppercase text-white">
            {HeroData[currentIndex].Details}
          </h1>
        </div>
      </div>
      <div className="absolute bottom-4 left-4 flex space-x-2">
        {HeroData.map((_, index) => (
          <div
            key={index}
            className={`w-8 h-8 flex items-center justify-center rounded-full font-bold text-white ${
              index === currentIndex ? "bg-yellow-500" : "bg-black"
            }`}
          >
            {index + 1}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Banner;
