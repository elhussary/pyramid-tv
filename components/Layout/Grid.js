import Link from "next/link";
import React from "react";
import Pagination from "../pages/tvseries/Pagination";

const Grid = ({ data, url }) => {
  return (
    <main className="flex flex-col justify-center min-h-screen p-20 px-10 text-white">
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-2 mb-4">
        {data.results
          .filter((el) => !el.known_for)
          .map((result) => {
            return (
              <React.Fragment key={result.id}>
                <Link
                  href={`${
                    result.name
                      ? `/explore/tv/${result.id}`
                      : `/explore/movie/${result.id}`
                  }`}
                >
                  <a>
                    <div
                      title={result.name ? result.name : result.title}
                      className="relative h-80 lg:h-96 rounded-xl"
                      style={{
                        backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.1), rgb(0, 0, 0) 105%, rgb(0, 0, 0))
,url(https://image.tmdb.org/t/p/w300//${result.poster_path})`,
                      }}
                    >
                      <div
                        className={`absolute w-9 h-9 rounded-full flex justify-center items-center left-2 top-1.5 text-sm border-4 border-green-400 ${
                          result.vote_average.toString().slice(0, 3) <= 5
                            ? "border-red-500"
                            : ""
                        }`}
                      >
                        {result.vote_average.toString().slice(0, 3)}
                      </div>
                      <header className="px-2 py-4 absolute bottom-0 left-2">
                        <h1>{result.name ? result.name : result.title}</h1>
                      </header>
                    </div>
                  </a>
                </Link>
              </React.Fragment>
            );
          })}
      </div>
      <Pagination data={data} url={url} />
    </main>
  );
};

export default Grid;
