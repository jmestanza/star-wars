"use client";
import CharacterCard from "@/components/character/CharacterCard";
import Character from "../../../models/character.dto";
import PaginatedResponse from "../../../models/peoplereq.dto";
import DisplayInfo from "../../components/info/DisplayInfo";

const Characters = () => {
  console.log("rendered characters");
  const mapFunction = (person: Character) => {
    return <CharacterCard key={person.name} character={person} />;
  };

  const getGridDisplay = (content: PaginatedResponse<Character>) => {
    return (
      <div className="w-3/4">
        <div className="grid grid-cols-1 md:grid-cols-5">
          {content.results.map((x) => mapFunction(x))}
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
