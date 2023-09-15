"use client";
import axios from "axios";
import { useEffect, useState } from "react";
import Axios from "axios-observable";
import Image from "next/image";
import bg from "../../public/img/star-wars-bg.jpg";

export default function Home() {
  // const [movies, setMovies] = useState<Array<any>>([]);
  // const [characters, setCharacters] = useState<Array<any>>([]);

  // useEffect(() => {
  //   axios.get("http://localhost:8080/swapi/movies").then((res) => {
  //     setMovies(res.data);
  //   });
  //   Axios.get("http://localhost:8080/swapi/characters").subscribe((response) =>
  //     setCharacters(response.data.results)
  //   );
  // }, []);

  return (
    <div
      // className="h-screen"
      style={{
        backgroundImage: `url(${bg.src})`,
        backgroundSize: "auto 100%",
        height: "92vh",
      }}
    >
      <div className="absolute scale-50 inset-0 hover:scale-75 ease-in duration-500">
        <Image
          style={{ objectFit: "contain" }}
          src="/img/star-wars-logo.png"
          alt="background image"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          priority
          fill
        />
      </div>
    </div>
  );
}
