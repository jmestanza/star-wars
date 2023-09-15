"use client";
import CharacterCard from "@/components/character/CharacterCard";
import Spinner from "@/components/spinner/Spinner";
import Axios from "axios-observable";
import { useEffect, useState } from "react";
import Character from "../../../models/character.dto";

const Characters = () => {
  const [characters, setCharacters] = useState<Array<any>>([]);
  const getId = (url: string) => {
    return url.replace("https://swapi.dev/api/people/", "").replace("/", "");
  };
  useEffect(() => {
    const fetchData = async () => {
      Axios.get("http://localhost:8080/swapi/characters").subscribe(
        (response) => {
          const allCharacters: Character[] = response.data.results;
          const allCharactersWithId = allCharacters.map((x) => {
            return { ...x, id: getId(x.url) };
          });
          setCharacters(allCharactersWithId);
        }
      );
    };
    fetchData();
  }, []);
  const shouldNotRender = characters.length === 0;

  return shouldNotRender ? (
    <Spinner />
  ) : (
    <div className="flex justify-center bg-black">
      <div className="w-3/4">
        <div className="grid grid-cols-1 md:grid-cols-5">
          {characters.map((person) => (
            <CharacterCard key={person.name} character={person} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Characters;
