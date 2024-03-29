"use client";
import DisplayInfo from "@/components/info/DisplayInfo";
import StarshipCard from "@/components/cards/starships/StarshipCard";
import Starship from "../../../models/starship.dto";
import PaginatedResponse from "../../../models/peoplereq.dto";

const Starships = () => {
  const getGridDisplay = (content: PaginatedResponse<Starship>) => {
    return (
      <div className="w-3/4">
        <div className="grid grid-cols-1 md:grid-cols-5">
          {content.results.map((ship: Starship, index) => {
            return (
              <StarshipCard key={ship.id} starship={ship} imgIdx={index + 1} />
            );
          })}
        </div>
      </div>
    );
  };

  return (
    <DisplayInfo<Starship>
      asset="starships"
      displaySearchBar={true}
      searchPlaceholder={"Search ship"}
      getGridDisplay={getGridDisplay}
    />
  );
};

export default Starships;
