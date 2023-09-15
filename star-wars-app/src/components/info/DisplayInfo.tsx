import usePagination from "@/hooks/usePagination";
import React, { useState } from "react";
import Basic from "../../../models/basic.dto";
import SearchBar from "@/components/search/SearchBar";
import Spinner from "@/components/spinner/Spinner";
import PrevButton from "@/components/pagination/PrevButton";
import NextButton from "@/components/pagination/NextButton";
import PaginationStatus from "@/components/pagination/PaginationStatus";

interface InfoTypes {
  asset: string;
  mapFunction: Function;
  gridCols: string;
  gridWidth: string;
  displayPagination: boolean;
  displaySearchBar: boolean;
  searchPlaceholder: string;
}

function DisplayInfo<T extends Basic>({
  asset,
  mapFunction,
  gridCols,
  gridWidth,
  displayPagination,
  displaySearchBar,
  searchPlaceholder,
}: InfoTypes) {
  const [name, setName] = useState("");

  const {
    page,
    totalPages,
    content,
    onNext,
    onPrev,
    setPage,
    resetPagination,
  } = usePagination<T>(asset, name);

  const onSearch = () => {
    resetPagination();
  };

  const shouldNotRender = content.results.length === 0;

  return (
    <div className="flex flex-col h-92vh bg-black">
      {displaySearchBar && (
        <SearchBar
          setName={setName}
          onSearch={onSearch}
          placeholder={searchPlaceholder}
        />
      )}
      {shouldNotRender ? (
        <Spinner />
      ) : (
        <div>
          <div className="flex flex-row items-center justify-center bg-black">
            {displayPagination && (
              <PrevButton disabled={page <= 1} onClick={() => onPrev()} />
            )}

            <div className={gridWidth}>
              <div className={`grid grid-cols-1 md:grid-cols-${gridCols}`}>
                {content.results.map((x) => mapFunction(x))}
              </div>
            </div>
            {displayPagination && (
              <NextButton
                disabled={totalPages !== undefined && page >= totalPages}
                onClick={() => onNext()}
              />
            )}
          </div>
          {displayPagination && (
            <PaginationStatus page={page} totalPages={totalPages} />
          )}
        </div>
      )}
    </div>
  );
}

export default DisplayInfo;
