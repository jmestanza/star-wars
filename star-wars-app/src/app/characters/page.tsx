"use client";
import CharacterCard from "@/components/character/CharacterCard";
import Character from "../../../models/character.dto";
import DisplayInfo from "../../components/info/DisplayInfo";

const Characters = () => {
  const mapFunction = (person: Character) => {
    return <CharacterCard key={person.name} character={person} />;
  };

  return (
    <DisplayInfo<Character>
      asset="people"
      mapFunction={mapFunction}
      gridCols="5"
      gridWidth="w-3/4"
      displayPagination={true}
      displaySearchBar={true}
      searchPlaceholder="Search character"
    />
  );
};

export default Characters;
