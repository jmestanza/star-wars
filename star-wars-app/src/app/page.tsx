"use client";
import axios from "axios";
import { useEffect, useState } from "react";

export default function Home() {
  const [movies, setMovies] = useState<Array<any>>([]);
  useEffect(() => {
    axios.get("http://localhost:8080/swapi/movies").then((res) => {
      // console.log("res", res);
      setMovies(res.data);
    });
  }, []);
  // const [];
  // const info = axios.get("http://localhost:8080/swapi/movies").then();
  // console.log("info: ", info);
  return (
    <div>
      {movies.map((x: any) => (
        <div key={x.name}>{x.name}</div>
      ))}
    </div>
  );
}
