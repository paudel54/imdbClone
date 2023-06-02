import React from "react";
import Image from "next/image";

async function getMovie(movieId) {
  //   console.log("i am cheeeeeeeeeeeeeking movieId", movieId);
  const res = await fetch(
    // `https://api.themoviedb.org/3/movie/${movieId}?api_key=${process.env.API_KEY}`
    // "https://api.themoviedb.org/3/movie/934433?api_key=96cd2dbc32e3243b7bd886988cee66f4",
    `https://api.themoviedb.org/3/movie/${movieId.id}?api_key=${process.env.API_KEY}`
  );
  return await res.json();
}

export default async function MoviePage({ params }) {
  const movieId = params;
  //   console.log("test movidIdparam", movieId.id);
  const movie = await getMovie(movieId);
  //   console.log("Getting out the result of movie", movie);
  return (
    <div className="w-full">
      {/* <h1>{movie.original_title || movie.name}</h1> */}
      <div
        className=" p-4  md:pt-8 flex flex-col md:flex-row items-center content-center
      max-w-6xl mx-auto md:space-x-6"
      >
        <Image
          src={`https://image.tmdb.org/t/p/original/${
            movie.backdrop_path || movie.poster_path
          }`}
          width={500}
          height={300}
          className="rounded-lg"
          //   placeholder="blur"
          //   blurDataURL="/loading.svg"
          alt="image is not avialable"
          style={{
            maxWidth: "100%",
            height: "100%",
          }}
        />
        <div className="p-2">
          <h2 className="text-lg mb-3 font-bold">
            {movie.title || movie.name}
          </h2>
          <p className="text-lg mb-3 text-justify">
            <span className="font-semibold mr-1">Overview:</span>{" "}
            {movie.overview}
          </p>
          <p>
            <span className="font-semibold mr-1">Date Released:</span>
            {movie.release_date || movie.first_air_date}
          </p>
          <p>
            <span className="font-semibold mr-1">Rating</span>
            {movie.vote_count}
          </p>
        </div>
      </div>
    </div>
  );
}
