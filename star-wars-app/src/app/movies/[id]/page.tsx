"use client";
import Spinner from "@/components/spinner/Spinner";
import Image from "next/image";
import { use } from "react";

export default function Page({ params }: { params: { id: string } }) {
  const movie = use(
    fetch(`https://swapi.dev/api/films/${params.id}`, {
      next: { revalidate: 3600 }, // every hour revalidate
    }).then((res) => res.json())
  );

  const shouldNotRender = movie === undefined;

  return shouldNotRender ? (
    <Spinner />
  ) : (
    <div className="flex justify-center bg-black h-100vh">
      <div className="flex flex-col">
        <div className="border-yellow-500 border-2 border-solid rounded mt-10">
          <div className="w-72 h-96 relative">
            <Image
              src={`/img/movies/${params.id}.jpg`}
              fill
              style={{ objectFit: "contain" }}
              alt="name"
            />
          </div>
          <div className="text-sw-gray font-primary flex flex-col justify-center items-center my-5">
            <div>Title: {movie?.title}</div>
            <div>Episode: {movie?.episode_id}</div>
            <div>Director: {movie?.director}</div>
            <div>Producers:</div>
            <ul className="flex flex-col justify-center items-center">
              {movie?.producer.split(",").map((x) => (
                <li key={x}>{x}</li>
              ))}
            </ul>
            <div>Release Date: {movie?.release_date}</div>
            {/* <div>Mass: {movie?.mass} Kg</div> */}
          </div>
        </div>
      </div>
    </div>
  );
}
