const PaginationStatus = ({
  page,
  totalPages,
}: {
  page: number;
  totalPages: number;
}) => {
  const canDisplay = page >= 1 && totalPages != Number.MAX_VALUE;

  return (
    <div className="flex items-center justify-center font-primary bg-black">
      {canDisplay ? (
        <p className="text-xl text-white font-bold">
          Page: {page} of {totalPages}
        </p>
      ) : (
        <div className="animate-pulse rounded flex">
          <p className="text-xl text-white font-bold">Loading ...</p>
        </div>
      )}
    </div>
  );
};

export default PaginationStatus;
