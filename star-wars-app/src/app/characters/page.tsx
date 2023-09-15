"use client";
import CharacterCard from "@/components/character/CharacterCard";
import Character from "../../../models/character.dto";
import DisplayInfo from "../../components/info/DisplayInfo";
import PaginatedResponse from "../../../models/peoplereq.dto";

const Characters = () => {
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
      mapFunction={mapFunction}
      gridCols="grid-cols-5"
      gridWidth="w-3/4"
      displayPagination={true}
      displaySearchBar={true}
      searchPlaceholder="Search character"
      getGridDisplay={getGridDisplay}
    />
  );
};

export default Characters;
