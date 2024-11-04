import React from "react";

function Pagination({ hasNext, hasPrev, pageState, currPage, numberOfPages, numOfItemsPerPage }) {
  return (
    <div className="mx-auto flex justify-center">
      <div className="rounded-md overflow-hidden flex items-center justify-center border">
        <button
          className="h-10 bg-silicon-red text-white text-sm px-3 disabled:bg-silicon-gray disabled:cursor-not-allowed"
          disabled={!hasPrev}
          onClick={() => pageState((prev) => prev - 1)}
        >
          Prev
        </button>
        <span className="w-10 block text-center text-sm">{currPage}</span>
        <button
          className="h-10 bg-silicon-green text-white text-sm px-3 disabled:bg-silicon-gray"
          disabled={!hasNext}
          onClick={() => pageState((prev) => prev + 1)}
        >
          Next
        </button>
      </div>
    </div>
  );
}

export default Pagination;
