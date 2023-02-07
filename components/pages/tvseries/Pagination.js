import React from "react";
import { useRouter } from "next/router";

const Pagination = ({ data, url }) => {
  const router = useRouter();

  const handlePrevious = (e) => {
    e.preventDefault();
    router.push(`/${url}?page=${data.page - 1}`);
  };

  const handleNext = (e) => {
    e.preventDefault();
    router.push(`/${url}?page=${data.page + 1}`);
  };

  return (
    <div className="flex items-center justify-between">
      <div>
        <p className="text-sm text-gray-400">
          Showing <span className="font-medium">1</span> to
          <span className="font-medium"> {data.results.length}</span> of
          <span className="font-medium"> {data.total_pages}</span> results
        </p>
      </div>
      <div className="lg:translate-y-2">
        <button
          className="text-center w-20 py-2 rounded-md bg-white text-sm font-medium text-black cursor-pointer mx-2"
          disabled={data.page === 1 ? true : false}
          onClick={handlePrevious}
        >
          Previous
        </button>

        <button
          className="text-center w-20 py-2 rounded-md bg-yellow-400 text-sm font-medium text-black cursor-pointer"
          onClick={handleNext}
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default Pagination;
