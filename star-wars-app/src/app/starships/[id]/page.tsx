"use client";
import Spinner from "@/components/spinner/Spinner";
import { apiIdx } from "@/static-data/starships-idx";
import Image from "next/image";
import { use } from "react";

export default function Page({ params }: { params: { id: string } }) {
  const starship = use(
    fetch(`https://swapi.dev/api/starships/${params.id}`, {
      next: { revalidate: 3600 }, // every hour revalidate
    }).then((res) => res.json())
  );

  const shouldNotRender = starship === undefined;

  return shouldNotRender ? (
    <Spinner />
  ) : (
    <div className="flex justify-center bg-black h-100vh">
      <div className="flex flex-col">
        <div className="border-yellow-500 border-2 border-solid rounded mt-10">
          <div className="w-72 h-96 relative">
            <Image
              src={`/img/starships/${apiIdx.findIndex(
                (el) => el == parseInt(params.id)
              )}.webp`}
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
