"use client";
import CharacterCard from "@/components/cards/character/CharacterCard";
import Character from "../../../models/character.dto";
import PaginatedResponse from "../../../models/peoplereq.dto";
import DisplayInfo from "../../components/info/DisplayInfo";

const Characters = () => {
  const getGridDisplay = (content: PaginatedResponse<Character>) => {
    return (
      <div className="w-3/4">
        <div className="grid grid-cols-1 md:grid-cols-5">
          {content.results.map((person: Character) => {
            return <CharacterCard key={person.name} character={person} />;
          })}
        </div>
      </div>
    );
  };
  return (
    <DisplayInfo<Character>
      asset="people"
      displaySearchBar={true}
      searchPlaceholder="Search character"
      getGridDisplay={getGridDisplay}
    />
  );
};

export default Characters;
