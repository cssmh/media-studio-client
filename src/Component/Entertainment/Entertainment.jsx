import CineCard from "../CineCard/CineCard";
const movieType = [
  {
    id: 1,
    name: "Disney",
    image_url:
      "https://raw.githubusercontent.com/cssmh/media-studio-client/main/public/medias/Disney.png",
  },
  {
    id: 2,
    name: "Netflix",
    image_url:
      "https://raw.githubusercontent.com/cssmh/media-studio-client/main/public/medias/Netflix.png",
  },
  {
    id: 3,
    name: "Sony Pictures",
    image_url:
      "https://raw.githubusercontent.com/cssmh/media-studio-client/main/public/medias/Sony%20Pictures.png",
  },
  {
    id: 4,
    name: "Spotify",
    image_url:
      "https://raw.githubusercontent.com/cssmh/media-studio-client/main/public/medias/spotify.png",
  },
  {
    id: 5,
    name: "Time Warner",
    image_url:
      "https://raw.githubusercontent.com/cssmh/media-studio-client/main/public/medias/time-warner.png",
  },
  {
    id: 6,
    name: "Warner Bros",
    image_url:
      "https://raw.githubusercontent.com/cssmh/media-studio-client/main/public/medias/warner%20bros.png",
  },
];

const Entertainment = () => {
  return (
    <div className="my-7">
      <h1 className="text-3xl font-semibold text-center mb-9">
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
