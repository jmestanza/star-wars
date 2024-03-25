"use client";
import Image from "next/image";
import { Suspense, use } from "react";

export default function Page({ params }: { params: { id: string } }) {
  const character = use(
    fetch(`https://swapi.dev/api/people/${params.id}`, {
      cache: "force-cache", // should not be needed but we explicitly call this
      next: { revalidate: 3600 }, // every hour revalidate
    }).then((res) => res.json())
  );

  return (
    <Suspense fallback={<div>Fallback</div>}>
      <div className="flex justify-center bg-black h-92vh">
        <div className="flex flex-col">
          <div className="border-yellow-500 border-2 border-solid rounded mt-10">
            <div className="w-64 h-96 relative">
              <Image
                src={`/img/people/${params.id}.jpg`}
                fill
                style={{ objectFit: "cover" }}
                alt="name"
              />
            </div>
            <div className="text-sw-gray font-primary flex flex-col justify-center items-center my-5">
              <div>Name: {character?.name}</div>
              <div>Gender: {character?.gender}</div>
              <div>Birth Year: {character?.birth_year}</div>
              <div>Eye Color: {character?.eye_color}</div>
              <div>Height: {character?.height} cm</div>
              <div>Mass: {character?.mass} Kg</div>
            </div>
          </div>
        </div>
      </div>
    </Suspense>
  );
}
