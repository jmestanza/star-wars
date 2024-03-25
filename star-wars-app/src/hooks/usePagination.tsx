import { useEffect, useState } from "react";
import Basic from "../../models/basic.dto";
import PaginatedResponse from "../../models/peoplereq.dto";

function usePagination<T extends Basic>(asset: string, name: string) {
  const [page, setPage] = useState<number>(1);
  const initContent = {
    count: -1,
    next: null,
    previous: null,
    results: [],
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

  const getId = (url: string) => {
    return url.replace(`https://swapi.dev/api/${asset}/`, "").replace("/", "");
  };

  useEffect(() => {
    const getData = setTimeout(() => {
      fetch(`https://swapi.dev/api/${asset}/?search=${name}&page=${page}`, {
        // cache: "force-cache",
        next: { revalidate: false },
      })
        .then((res) => res.json())
        .then((res) => {
          const allTWithId: T[] = res.results.map((x: T) => {
            return { ...x, id: getId(x.url) };
          });
          setContent({ ...res, results: allTWithId });
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
}

export default usePagination;
