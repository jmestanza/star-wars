"use client";
import Spinner from "@/components/spinner/Spinner";
import StarshipCard from "@/components/starships/StarshipCard";
import usePagination from "@/hooks/usePagination";
import { useState } from "react";
import Starship from "../../../models/starship.dto";
import ships from "../../../models/starships";

const Starships = () => {
  const [name, setName] = useState("");

  const {
    page,
    totalPages,
    content,
    onNext,
    onPrev,
    setPage,
    resetPagination,
  } = usePagination<Starship>("starships", name);

  const onSearch = () => {
    resetPagination();
  };

  const shouldNotRender = false;

  console.log(
    "ships: ",
    ships.map((x) => x.name)
  );

  return (
    <div className="flex flex-col h-92vh bg-black">
      {shouldNotRender ? (
        <Spinner />
      ) : (
        <div>
          <div className="flex flex-row items-center justify-center bg-black">
            <div className="w-3/4">
              <div className="grid grid-cols-1 md:grid-cols-5">
                {content.results.map((ship) => (
                  <StarshipCard key={ship.name} starship={ship} />
                ))}
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Starships;
