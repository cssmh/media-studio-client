import { useEffect, useState } from "react";
import MedCard from "../MedCard/MedCard";

const Entertainment = () => {
  const [media, setMedia] = useState([]);

  useEffect(() => {
    fetch("media.json")
      .then((res) => res.json())
      .then((data) => {
        setMedia(data);
      }),
      [];
  });

  return (
    <div className="my-7 max-w-5xl mx-auto">
      <h1 className="text-2xl font-semibold text-center">
        Entertainment and Media {media.length}
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {media.map((med) => (
          <MedCard key={med.id} getMedia={med}></MedCard>
        ))}
      </div>
    </div>
  );
};

export default Entertainment;
