"use client";
import React from "react";
import Planet from "../../../models/planet.dto";
import DisplayInfo from "@/components/info/DisplayInfo";
import PlanetCard from "@/components/cards/planet/PlanetCard";
import PaginatedResponse from "../../../models/peoplereq.dto";

const Planets = () => {
  const mapFunction = (planet: Planet) => {
    return <PlanetCard key={planet.id} planet={planet} />;
  };

  const getGridDisplay = (content: PaginatedResponse<Planet>) => {
    return (
      <div className="grid grid-cols-1 md:grid-cols-5">
        {content.results.map((x) => mapFunction(x))}
      </div>
    );
  };

  return (
    <DisplayInfo<Planet>
      asset="planets"
      displaySearchBar={true}
      searchPlaceholder={"Search planet"}
      getGridDisplay={getGridDisplay}
    />
  );
};

export default Planets;
