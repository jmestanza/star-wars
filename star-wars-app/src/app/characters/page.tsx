"use client";
import CharacterCard from "@/components/character/CharacterCard";
import Spinner from "@/components/spinner/Spinner";
import Axios from "axios-observable";
import { useEffect, useState } from "react";

const Characters = () => {
  const [characters, setCharacters] = useState<Array<any>>([]);
  useEffect(() => {
    const fetchData = async () => {
      Axios.get("http://localhost:8080/swapi/characters").subscribe(
        (response) => setCharacters(response.data.results)
      );
    };
    fetchData();
  }, []);
  const shouldNotRender = characters.length === 0;

  return shouldNotRender ? (
    <Spinner />
  ) : (
    <div className="flex justify-center">
      <div className="w-3/4">
        <div className="grid grid-cols-1 md:grid-cols-3">
          {characters.map((person) => (
            <CharacterCard key={person.name} character={person} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Characters;
