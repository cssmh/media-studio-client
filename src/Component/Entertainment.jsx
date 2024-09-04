import CineCard from "./CineCard";

const movieType = [
  {
    id: 1,
    name: "Disney",
    image_url:
      "https://raw.githubusercontent.com/cssmh/cinemix-client/main/src/assets/Disney.png",
  },
  {
    id: 2,
    name: "Netflix",
    image_url:
      "https://raw.githubusercontent.com/cssmh/cinemix-client/main/src/assets/Netflix.png",
  },
  {
    id: 3,
    name: "Sony Pictures",
    image_url:
      "https://raw.githubusercontent.com/cssmh/cinemix-client/main/src/assets/Sony%20Pictures.png",
  },
  {
    id: 4,
    name: "Spotify",
    image_url:
      "https://raw.githubusercontent.com/cssmh/cinemix-client/main/src/assets/spotify.png",
  },
  {
    id: 5,
    name: "Time Warner",
    image_url:
      "https://raw.githubusercontent.com/cssmh/cinemix-client/main/src/assets/time-warner.png",
  },
  {
    id: 6,
    name: "Warner Bros",
    image_url:
      "https://raw.githubusercontent.com/cssmh/cinemix-client/main/src/assets/warner%20bros.png",
  },
];

const Entertainment = () => {
  return (
    <div>
      <h2 className="text-3xl font-bold text-center">Our Categories</h2>
      <h1 className="text-3xl font-semibold text-center text-gray-900 dark:text-white">
        Entertainment and Media
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {movieType.map((med) => (
          <CineCard key={med.id} getMedia={med}></CineCard>
        ))}
      </div>
    </div>
  );
};

export default Entertainment;
