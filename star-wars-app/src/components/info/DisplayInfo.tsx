import SearchBar from "@/components/search/SearchBar";
import usePagination from "@/hooks/usePagination";
import { ReactNode, useState } from "react";
import Basic from "../../../models/basic.dto";
import PaginationLayout from "../layout/PaginationLayout";

function DisplayInfo<T extends Basic>({
  asset,
  displaySearchBar,
  searchPlaceholder,
  getGridDisplay,
}: {
  asset: string;
  displaySearchBar: boolean;
  searchPlaceholder: string;
  getGridDisplay: Function;
}) {
  const [name, setName] = useState("");

  const { page, totalPages, content, onNext, onPrev, resetPagination } =
    usePagination<T>(asset, name);

  return (
    <div className="flex flex-col h-92vh bg-black">
      {displaySearchBar && (
        <SearchBar setName={setName} placeholder={searchPlaceholder} />
      )}
      <PaginationLayout
        page={page}
        totalPages={totalPages}
        onPrev={onPrev}
        onNext={onNext}
      >
        {getGridDisplay(content)}
      </PaginationLayout>
    </div>
  );
}

export default DisplayInfo;
