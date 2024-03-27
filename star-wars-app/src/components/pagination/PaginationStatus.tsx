import Skeleton from "../skeleton/Skeleton";

const PaginationStatus = (props: any) => {
  const canDisplay = props.page >= 1 && props.totalPages != Number.MAX_VALUE;

  return (
    <div className="flex items-center justify-center font-primary bg-black">
      {canDisplay ? (
        <p className="text-xl text-white font-bold">
          Page: {props.page} of {props.totalPages}
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
