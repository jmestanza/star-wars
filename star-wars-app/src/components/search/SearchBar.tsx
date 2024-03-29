const SearchBar = ({
  setName,
  placeholder,
}: {
  setName: Function;
  placeholder: string;
}) => {
  const searchNameHandler = (e: any) => {
    setName(e.target.value);
  };

  return (
    <div className="flex justify-center items-center">
      <div className="w-3/4 flex justify-center sm:justify-end">
        <div className="relative">
          <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
            <svg
              className="w-4 h-4 text-gray-500 dark:text-gray-400"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 20 20"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
              />
            </svg>
          </div>
          <input
            onChange={searchNameHandler}
            type="search"
            id="default-search"
            className="p-4 pl-10 text-sm text-gray-900 border border-gray-300 rounded-lg focus:ring-yellow-500 bg-black dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-yellow-500 dark:focus:border-yellow-500"
            placeholder={placeholder}
            required
          />
        </div>
      </div>
    </div>
  );
};

export default SearchBar;
