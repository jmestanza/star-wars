"use client";
import axios from "axios";
import { useEffect, useState } from "react";
import Axios from "axios-observable";

export default function Home() {
  const [movies, setMovies] = useState<Array<any>>([]);
  const [characters, setCharacters] = useState<Array<any>>([]);

  useEffect(() => {
    axios.get("http://localhost:8080/swapi/movies").then((res) => {
      setMovies(res.data);
    });
    Axios.get("http://localhost:8080/swapi/characters").subscribe((response) =>
      setCharacters(response.data.results)
    );
  }, []);

  return (
    <div>
      {movies.map((x: any) => (
        <div key={x.name}>{x.name}</div>
      ))}
      {characters &&
        characters.length > 0 &&
        characters.map((x: any) => <div key={x.name}>{x.name}</div>)}
    </div>
  );
}
