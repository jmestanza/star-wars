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

  const totalPages = content.count === -1 ? Number.MAX_VALUE : content.count;

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

  useEffect(() => {
    fetch(`https://swapi.dev/api/people/?search=${name}&page=${page}`)
      .then((res) => res.json())
      .then((res) => {
        setContent(res);
      });
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
