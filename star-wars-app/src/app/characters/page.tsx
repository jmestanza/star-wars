"use client";
import CharacterCard from "@/components/character/CharacterCard";
import Spinner from "@/components/spinner/Spinner";
import Axios from "axios-observable";
import { useEffect, useState } from "react";
import Character from "../../../models/character.dto";
import usePagination from "@/hooks/usePagination";
import SearchBar from "@/components/search/SearchBar";
import PrevButton from "@/components/pagination/PrevButton";
import NextButton from "@/components/pagination/NextButton";

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
  } = usePagination(name);

  const onSearch = () => {
    resetPagination();
  };

  const getId = (url: string) => {
    return url.replace("https://swapi.dev/api/people/", "").replace("/", "");
  };

  const allCharactersWithId: Character[] = content.results.map((x) => {
    return { ...x, id: getId(x.url) };
  });

  const shouldNotRender = allCharactersWithId.length === 0;

  return (
    <div className="flex flex-col h-92vh bg-black">
      <SearchBar setName={setName} onSearch={onSearch} />
      {shouldNotRender ? (
        <Spinner />
      ) : (
        <div className="flex flex-row items-center justify-center bg-black">
          <PrevButton disabled={page <= 1} onClick={() => onPrev()} />
          <div className="w-3/4">
            <div className="grid grid-cols-1 md:grid-cols-5">
              {allCharactersWithId.map((person) => (
                <CharacterCard key={person.name} character={person} />
              ))}
            </div>
          </div>
          <NextButton
            disabled={totalPages !== undefined && page >= totalPages}
            onClick={() => onNext()}
          />
        </div>
      )}

      <div className="flex items-center justify-center font-primary bg-black">
        <p className="text-xl text-white font-bold mb-10">
          Page: {page} of {totalPages}
        </p>
      </div>
    </div>
  );
};

export default Characters;
