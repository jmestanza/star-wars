"use client";
import React from "react";
import Movie from "../../../models/movie.dto";
import MovieCard from "@/components/movie/MovieCard";
import DisplayInfo from "../../components/info/DisplayInfo";
import PaginatedResponse from "../../../models/peoplereq.dto";

const Movies = () => {
  const mapFunction = (movie: Movie) => {
    return <MovieCard key={movie.id} movie={movie} />;
  };
  const getGridDisplay = (content: PaginatedResponse<Movie>) => {
    return (
      <div className="w-2/5">
        <div className="grid grid-cols-1 md:grid-cols-3">
          {content.results.map((x) => mapFunction(x))}
        </div>
      </div>
    );
  };

  return (
    <DisplayInfo<Movie>
      asset="films"
      mapFunction={mapFunction}
      gridCols="grid-cols-3"
      gridWidth="w-2/5"
      displayPagination={false}
      displaySearchBar={false}
      searchPlaceholder={""}
      getGridDisplay={getGridDisplay}
    />
  );
};

export default Movies;
