"use client";
import CharacterCard from "@/components/character/CharacterCard";
import NextButton from "@/components/pagination/NextButton";
import PrevButton from "@/components/pagination/PrevButton";
import SearchBar from "@/components/search/SearchBar";
import Spinner from "@/components/spinner/Spinner";
import usePagination from "@/hooks/usePagination";
import { useState } from "react";
import Character from "../../../models/character.dto";
import PaginationStatus from "@/components/pagination/PaginationStatus";

const Characters = () => {
  const [name, setName] = useState("");

  const {
    page,
    totalPages,
    content,
    onNext,
    onPrev,
    setPage,
    resetPagination,
  } = usePagination<Character>("people", name);

  const onSearch = () => {
    resetPagination();
  };

  const shouldNotRender = content.results.length === 0;

  return (
    <div className="flex flex-col h-92vh bg-black">
      <SearchBar setName={setName} onSearch={onSearch} />
      {shouldNotRender ? (
        <Spinner />
      ) : (
        <div>
          <div className="flex flex-row items-center justify-center bg-black">
            <PrevButton disabled={page <= 1} onClick={() => onPrev()} />
            <div className="w-3/4">
              <div className="grid grid-cols-1 md:grid-cols-5">
                {content.results.map((person) => (
                  <CharacterCard
                    key={person.name}
                    asset="people"
                    character={person}
                  />
                ))}
              </div>
            </div>
            <NextButton
              disabled={totalPages !== undefined && page >= totalPages}
              onClick={() => onNext()}
            />
          </div>
          <PaginationStatus page={page} totalPages={totalPages} />
          {/* <div className="flex items-center justify-center font-primary bg-black">
            <p className="text-xl text-white font-bold mb-10">
              Page: {page} of {totalPages}
            </p>
          </div> */}
        </div>
      )}
    </div>
  );
};

export default Characters;
