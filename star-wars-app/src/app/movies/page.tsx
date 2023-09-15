"use client";
import React from "react";
import Movie from "../../../models/movie.dto";
import MovieCard from "@/components/movie/MovieCard";
import DisplayInfo from "../../components/info/DisplayInfo";

const Movies = () => {
  const mapFunction = (movie: Movie) => {
    return <MovieCard key={movie.id} movie={movie} />;
  };

  return (
    <DisplayInfo<Movie>
      asset="films"
      mapFunction={mapFunction}
      gridCols="3"
      gridWidth="w-2/5"
      displayPagination={false}
      displaySearchBar={false}
      searchPlaceholder={""}
    />
  );
};

export default Movies;
