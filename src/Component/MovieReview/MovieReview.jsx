import momin from "../../assets/momin.jpeg";
const MovieReview = () => {
  return (
    <div>
      <h1 className="text-3xl font-semibold text-center">
        Movie Review from Fans
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 my-10 gap-4">
        <div
          data-aos="zoom-in"
          className="border bg-base-200 py-7 rounded-md space-y-2 text-center"
        >
          <img
            src={momin}
            className="w-12 mx-auto rounded-3xl border border-green-500"
            alt=""
          />
          <h1 className="text-xl font-semibold">Doctor Strange</h1>
          <p className="px-5">
            Before this movie, my only real exposure to Doctor Strange was in
            The Super Hero Squad Show. I really liked the character and his
            powers, so I was looking forward to a Doctor Strange movie from day
            1. I'm glad that I was able to see this movie in theaters, as a
            movie with these kinds of visual tricks demands to be seen on the
            big screen. Apart from the wacky effects, this movie boasts great
            performances, music, writing, and characters.
          </p>
        </div>
        <div
          data-aos="zoom-in"
          className="border bg-base-200 py-7 rounded-md space-y-2 text-center"
        >
          <img
            src={momin}
            className="w-12 mx-auto rounded-3xl border border-green-500"
            alt=""
          />
          <h1 className="text-xl font-semibold">Captain America: Civil War</h1>
          <p className="px-5">
            Captain America Civil War is an absolutely riveting and captivating
            film, especially for being marketed as a superhero showdown. The
            marketing doesn’t at all match the deep, sophisticated character
            drama and complex thematic ideas and philosophical questions of if
            we even should have superheroes. Steve Rogers goes through his most
            compelling character journey in this film as he is deconstructed. He
            is portrayed more as a man rather than a symbol of purity.
          </p>
        </div>
        <div
          data-aos="zoom-in"
          className="border bg-base-200 py-7 rounded-md space-y-2 text-center"
        >
          <img
            src={momin}
            className="w-12 mx-auto rounded-3xl border border-green-500"
            alt=""
          />
          <h1 className="text-xl font-semibold">Avengers: Infinity War</h1>
          <p className="px-5">
            Ok, fellow fans. Here we are. After 10 years of buildup and hype
            surrounding every movie that came out, We are finally here. The big
            showdown we've been waiting for since 2008. I, unfortunately, didn't
            get to see this in the theaters, but I got it the day it came out on
            Blu-Ray and watched it with some friends and fellow fans of the MCU.
            And.... Wow. In a good way. This knocked my socks off. This wasn't
            Joss Whedon like the first two (I might be wrong), but this was just
            as visually stunning and had the same effect. The end was a punch to
            the gut. A hard one. Anyway, the beginning was unlike any Marvel
            movie I'd ever seen.
          </p>
        </div>
        <div
          data-aos="zoom-in"
          className="border bg-base-200 py-7 rounded-md space-y-2 text-center"
        >
          <img
            src={momin}
            className="w-12 mx-auto rounded-3xl border border-green-500"
            alt=""
          />
          <h1 className="text-xl font-semibold">Avengers: Endgame</h1>
          <p className="px-5">
            Where to begin, where to begin! You know a movie is outstanding when
            the end credits alone are more epic than the majority of films
            released in the last 20 years! This film is the pure definition of
            an emotional roller coaster and throughout its run time brings about
            fascination, humor, sadness, incredible excitement, and sheer
            finality. This is not your typical superhero movie and some viewers
            used to the entertaining, nonstop action style of the previous films
            may be disappointed, but I think that this movie brilliantly
            satisfies and subverts expectations.
          </p>
        </div>
      </div>
    </div>
  );
};

export default MovieReview;
