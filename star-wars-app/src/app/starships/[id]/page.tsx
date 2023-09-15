"use client";
import Spinner from "@/components/spinner/Spinner";
import Image from "next/image";
import { useEffect, useState } from "react";
import Starship from "../../../../models/starship.dto";

export default function Page({ params }: { params: { id: string } }) {
  const [starship, setStarship] = useState<Starship>();

  useEffect(() => {
    fetch(`https://swapi.dev/api/starships/${params.id}`)
      .then((res) => res.json())
      .then((res) => setStarship(res));
  }, [params.id]);

  const shouldNotRender = starship === undefined;

  return shouldNotRender ? (
    <Spinner />
  ) : (
    <div className="flex justify-center bg-black h-92vh">
      <div className="flex flex-col">
        <div className="border-yellow-500 border-2 border-solid rounded mt-10">
          <div className="w-72 h-96 relative">
            <Image
              src={`/img/starships/${params.id}.webp`}
              fill
              style={{ objectFit: "contain" }}
              alt="name"
            />
          </div>
          <div className="text-sw-gray font-primary flex flex-col justify-center items-center my-5">
            {/* model: string; name: string; */}
            <div>Name: {starship?.name}</div>
            <div>Model: {starship?.model}</div>
            <div>Length: {starship?.length}m</div>

            <div>Hyperdrive Rating: {starship?.hyperdrive_rating}</div>
            <div>
              Max Atmosphering Speed: {starship?.max_atmosphering_speed}
            </div>
            <div>Starship Class: {starship?.starship_class}</div>
            <div>Appears on {starship?.films.length} films</div>
          </div>
        </div>
      </div>
    </div>
  );
}
