import { useEffect, useState } from "react";
import Basic from "../../models/basic.dto";
import PaginatedResponse from "../../models/peoplereq.dto";

function usePagination<T extends Basic>(asset: string, name: string) {
  const [page, setPage] = useState<number>(1);
  const initItems: Record<string, number> = {
    people: 10,
    films: 6,
    starships: 10,
    planets: 10,
  };
  const initArray = Array.from(Array<T>(initItems[asset])).map((el, index) => {
    return { ...el, id: index.toString(), url: "", loaded: false };
  });
  const initContent = {
    count: -1,
    next: null,
    previous: null,
    results: initArray, // T has Basic, but not all filled -> that's why the warning exists
    loaded: false,
  };

  const [content, setContent] = useState<PaginatedResponse<T>>(initContent);
  const pageSize = 10;
  const totalPages =
    content.count === -1
      ? Number.MAX_VALUE
      : Math.ceil(content.count / pageSize);

  const resetContent = () => {
    setContent(initContent);
  };

  const onNext = () => {
    setPage((prevPage) => prevPage + 1);
    resetContent();
  };

  const onPrev = () => {
    setPage((prevPage) => prevPage - 1);
    resetContent();
  };

  const resetPagination = () => {
    setPage(1);
    setContent(initContent);
  };

  useEffect(() => {
    const getId = (url: string) => {
      return url
        .replace(`https://swapi.dev/api/${asset}/`, "")
        .replace("/", "");
    };

    fetch(`https://swapi.dev/api/${asset}/?search=${name}&page=${page}`, {
      next: { revalidate: 3600 }, // every hour revalidate fetch
    })
      .then((res) => res.json())
      .then((res) => {
        const allTWithId: T[] = res.results.map((x: T) => {
          return { ...x, id: getId(x.url), loaded: true };
        });
        setContent({ ...res, results: allTWithId });
      });
  }, [page, name]);

  return {
    page,
    totalPages,
    content,
    onNext,
    onPrev,
    resetPagination,
  };
}

export default usePagination;
