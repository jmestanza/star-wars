"use client";
import DisplayInfo from "@/components/info/DisplayInfo";
import StarshipCard from "@/components/starships/StarshipCard";
import Starship from "../../../models/starship.dto";

const Starships = () => {
  const mapFunction = (ship: Starship) => {
    return <StarshipCard key={ship.id} starship={ship} />;
  };

  return (
    <DisplayInfo<Starship>
      asset="starships"
      mapFunction={mapFunction}
      gridCols="5"
      gridWidth="w-3/4"
      displayPagination={true}
      displaySearchBar={true}
      searchPlaceholder={"Search ship"}
    />
  );
};

export default Starships;
