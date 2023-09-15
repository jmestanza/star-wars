"use client";
import React from "react";
import Planet from "../../../models/planet.dto";
import DisplayInfo from "@/components/info/DisplayInfo";
import PlanetCard from "@/components/planet/PlanetCard";
import PaginatedResponse from "../../../models/peoplereq.dto";

const Planets = () => {
  const mapFunction = (planet: Planet) => {
    return <PlanetCard key={planet.id} planet={planet} />;
  };

  const getGridDisplay = (content: PaginatedResponse<Planet>) => {
    return (
      <div className="w-3/4">
        <div className="grid grid-cols-1 md:grid-cols-5">
          {content.results.map((x) => mapFunction(x))}
        </div>
      </div>
    );
  };

  return (
    <DisplayInfo<Planet>
      asset="planets"
      mapFunction={mapFunction}
      gridCols="grid-cols-4"
      gridWidth="w-3/4"
      displayPagination={true}
      displaySearchBar={true}
      searchPlaceholder={"Search planet"}
      getGridDisplay={getGridDisplay}
    />
  );
};

export default Planets;
