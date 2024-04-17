"use client";
import Spinner from "@/components/spinner/Spinner";
import Image from "next/image";
import { use } from "react";

export default function Page({ params }: { params: { id: string } }) {
  const planet = use(
    fetch(`https://swapi.dev/api/planets/${params.id}`, {
      next: { revalidate: 3600 }, // every hour revalidate
    }).then((res) => res.json())
  );

  const shouldNotRender = planet === undefined;

  return shouldNotRender ? (
    <Spinner />
  ) : (
    <div className="flex justify-center bg-black h-100vh">
      <div className="flex flex-col">
        <div className="border-yellow-500 border-2 border-solid rounded mt-10">
          <div className="w-72 h-96 relative">
            <Image
              src={`https://starwars-visualguide.com/assets/img/planets/${params.id}.jpg`}
              fill
              style={{ objectFit: "cover" }}
              alt="name"
            />
          </div>
          <div className="text-sw-gray font-primary flex flex-col justify-center items-center my-5">
            {/* model: string; name: string; */}
            <div>Name: {planet?.name}</div>
            <div>Population: {planet?.population}</div>
            <div>Rotation Period: {planet?.rotation_period} hs</div>
            <div>Climate: {planet?.climate}</div>
            <div>Gravity: {planet?.gravity}</div>
            <div>Terrain:</div>
            <ul className="flex flex-col justify-center items-center">
              {planet?.terrain.split(",").map((x) => (
                <li key={x}>{x}</li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
