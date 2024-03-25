import SearchBar from "@/components/search/SearchBar";
import Spinner from "@/components/spinner/Spinner";
import usePagination from "@/hooks/usePagination";
import { Suspense, useState } from "react";
import Basic from "../../../models/basic.dto";
import PaginationLayout from "../layout/PaginationLayout";

interface InfoTypes {
  asset: string;
  displaySearchBar: boolean;
  searchPlaceholder: string;
  getGridDisplay: Function;
}

function DisplayInfo<T extends Basic>({
  asset,
  displaySearchBar,
  searchPlaceholder,
  getGridDisplay,
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

  return (
    <div className="flex flex-col h-92vh bg-black">
      {displaySearchBar && (
        <SearchBar
          setName={setName}
          onSearch={onSearch}
          placeholder={searchPlaceholder}
        />
      )}
      <Suspense fallback={<Spinner />}>
        <PaginationLayout
          page={page}
          totalPages={totalPages}
          onPrev={onPrev}
          onNext={onNext}
        >
          {getGridDisplay(content)}
        </PaginationLayout>
      </Suspense>
    </div>
  );
}

export default DisplayInfo;
