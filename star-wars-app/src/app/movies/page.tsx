"use client";
import React from "react";
import Movie from "../../../models/movie.dto";
import MovieCard from "@/components/cards/movie/MovieCard";
import DisplayInfo from "../../components/info/DisplayInfo";
import PaginatedResponse from "../../../models/peoplereq.dto";

const Movies = () => {
  const getGridDisplay = (content: PaginatedResponse<Movie>) => {
    return (
      <div className="sm:w-2/5">
        <div className="grid grid-cols-1 md:grid-cols-3">
          {content.results.map((movie) => (
            <MovieCard key={movie.id} movie={movie} />
          ))}
        </div>
      </div>
    );
  };

  return (
    <DisplayInfo<Movie>
      asset="films"
      displaySearchBar={true}
      searchPlaceholder={"Search movie"}
      getGridDisplay={getGridDisplay}
    />
  );
};

export default Movies;
