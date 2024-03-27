import { ReactNode } from "react";
import NextButton from "../pagination/NextButton";
import PaginationStatus from "../pagination/PaginationStatus";
import PrevButton from "../pagination/PrevButton";

type LayoutTypes = {
  children: ReactNode;
  page: number;
  totalPages: number;
  onPrev: Function;
  onNext: Function;
};

const PaginationLayout = ({
  children,
  page,
  totalPages,
  onPrev,
  onNext,
}: LayoutTypes) => {
  return (
    <div>
      <div className="flex flex-row items-center justify-center bg-black">
        <PrevButton disabled={page <= 1} onClick={() => onPrev()} />
        {children}
        <NextButton
          disabled={totalPages !== undefined && page >= totalPages}
          onClick={() => onNext()}
        />
      </div>
      <PaginationStatus page={page} totalPages={totalPages} />
    </div>
  );
};

export default PaginationLayout;
