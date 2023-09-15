import React from "react";
import { useState, useEffect } from "react";
import PeopleReq from "../../models/peoplereq.dto";
import PaginatedResponse from "../../models/peoplereq.dto";
import Character from "../../models/character.dto";
import { data } from "autoprefixer";

const usePagination = (name: string) => {
  const [page, setPage] = useState<number>(1);
  const initContent = {
    count: -1,
    next: null,
    previous: null,
    results: [],
  };
  const [content, setContent] =
    useState<PaginatedResponse<Character>>(initContent);

  const totalPages =
    content.count === -1 ? Number.MAX_VALUE : Math.ceil(content.count / 10);

  const onNext = () => {
    setPage((prevPage) => prevPage + 1);
  };

  const onPrev = () => {
    setPage((prevPage) => prevPage - 1);
  };

  const resetPagination = () => {
    setPage(1);
    setContent(initContent);
  };

  const getId = (url: string) => {
    return url.replace("https://swapi.dev/api/people/", "").replace("/", "");
  };

  useEffect(() => {
    const getData = setTimeout(() => {
      fetch(`https://swapi.dev/api/people/?search=${name}&page=${page}`)
        .then((res) => res.json())
        .then((res) => {
          const allCharactersWithId: Character[] = res.results.map((x) => {
            return { ...x, id: getId(x.url) };
          });
          setContent({ ...res, results: allCharactersWithId });
        });
    }, 2000);

    return () => clearTimeout(getData);
  }, [page, name]);

  return {
    page,
    totalPages,
    content,
    onNext,
    onPrev,
    setPage,
    resetPagination,
  };
};

export default usePagination;
