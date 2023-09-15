"use client";
import CharacterCard from "@/components/character/CharacterCard";
import NextButton from "@/components/pagination/NextButton";
import PrevButton from "@/components/pagination/PrevButton";
import SearchBar from "@/components/search/SearchBar";
import Spinner from "@/components/spinner/Spinner";
import usePagination from "@/hooks/usePagination";
import React, { useState } from "react";
import Movie from "../../../models/movie.dto";
import MovieCard from "@/components/movie/MovieCard";

const Movies = () => {
  const [name, setName] = useState("");

  const {
    page,
    totalPages,
    content,
    onNext,
    onPrev,
    setPage,
    resetPagination,
  } = usePagination<Movie>("films", name);

  const onSearch = () => {
    resetPagination();
  };

  const shouldNotRender = content.results.length === 0;

  return (
    <div className="flex flex-col h-92vh bg-black">
      {shouldNotRender ? (
        <Spinner />
      ) : (
        <div>
          <div className="flex flex-row items-center justify-center bg-black">
            <div className="w-2/5">
              <div className="grid grid-cols-1 md:grid-cols-3">
                {content.results.map((film) => (
                  <MovieCard key={film.title} movie={film} />
                ))}
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Movies;
