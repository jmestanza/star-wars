"use client";
import React from "react";
import Planet from "../../../models/planet.dto";
import DisplayInfo from "@/components/info/DisplayInfo";
import PlanetCard from "@/components/planet/PlanetCard";

const Planets = () => {
  const mapFunction = (planet: Planet) => {
    return <PlanetCard key={planet.id} planet={planet} />;
  };

  return (
    <DisplayInfo<Planet>
      asset="planets"
      mapFunction={mapFunction}
      gridCols="5"
      gridWidth="w-3/4"
      displayPagination={true}
      displaySearchBar={true}
      searchPlaceholder={"Search planet"}
    />
  );
};

export default Planets;
