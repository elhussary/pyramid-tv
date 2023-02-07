import Link from "next/link";
import React, { useEffect, useRef } from "react";
import { RiSearch2Line } from "react-icons/ri";
import NavLinks from "./NavLinks";
import actorpicnotfound from "/assets/images/actorpicnotfound.png";
import InfiniteScroll from "react-infinite-scroll-component";

const Navbar = () => {
  const searchInput = useRef();
  const filterRef = useRef("tv");
  const pageRef = useRef(1);

  const [searchResults, setSearchResults] = React.useState([]);
  const [hasMore, sethasMore] = React.useState(true);
  const [oldValues, setoldValues] = React.useState({
    search: "",
    filter: "",
  });

  const handleSearch = async () => {
    setoldValues({
      ...oldValues,
      search: searchInput.current.value,
      filter: filterRef.current.value,
    });
    if (
      searchInput.current.value != oldValues.search ||
      filterRef.current.value != oldValues.filter
    ) {
      pageRef.current = 1;
    }
    if (searchInput.current.value) {
      const res = await fetch(
        `https://api.themoviedb.org/3/search/${filterRef.current.value}?api_key=284324d34929646388e9917f8c8608b0&query=${searchInput.current.value}&page=${pageRef.current}`
      );
      const data = await res.json();
      setSearchResults(data.results);
      return data;
    } else {
      setSearchResults([]);
    }
  };

  const fetchData = async (e) => {
    pageRef.current = pageRef.current + 1;
    const Results = await handleSearch();
    setSearchResults([...searchResults, ...Results.results]);
    if (Results.results.length <= 0) {
      sethasMore(false);
    }
  };

  return (
    <header>
      <nav className="sm:flex flex-wrap pb-3 px-6 items-center pt-4 fixed  w-full bg-white dark:bg-[#060507] z-20 justify-between">
        <NavLinks />
        <button className="fixed top-5 right-6 sm:hidden">
          <RiSearch2Line size={22} />
        </button>

        <div>
          <div className="relative hidden sm:flex items-center shadow-md">
            <div className="absolute left-2 top-2.5 dark:text-gray-300">
              <RiSearch2Line size={19} />
            </div>
            <div className="absolute top-0 right-2 dark:text-gray-300">
              <select
                name="filter"
                ref={filterRef}
                onChange={handleSearch}
                className="p-2  border-none outline-0 dark:bg-zinc-800"
              >
                <option value="tv">Tv Series</option>
                <option value="movie">Movies</option>
              </select>
            </div>

            <input
              type="text"
              placeholder="Serach..."
              autoComplete="true"
              className=" dark:bg-zinc-800 p-2 w-56 md:w-80 rounded-sm pl-8 border-none outline-0"
              ref={searchInput}
              onChange={handleSearch}
            />
          </div>

          {searchResults.length > 0 && (
            <div className="absolute bg-white dark:bg-zinc-800 w-80 right-0.5 translate-y-2 p-4  z-30 rounded-sm h-80 overflow-hidden ">
              <InfiniteScroll
                dataLength={searchResults.length} //This is important field to render the next data
                next={fetchData}
                hasMore={hasMore}
                height={320}
                loader={<h4 className="mb-8 text-sm">Loading...</h4>}
                endMessage={
                  <p className="mb-8 text-sm">No more results to show...</p>
                }
              >
                {searchResults.map((result) => {
                  return (
                    <Link
                      href={`${
                        result.name
                          ? `/explore/tv/${result.id}`
                          : `/explore/movie/${result.id}`
                      }`}
                      key={result.id}
                    >
                      <a>
                        <div className="flex gap-1 text-sm dark:text-gray-300 mb-4">
                          <img
                            src={
                              result.poster_path
                                ? `https://image.tmdb.org/t/p/w300//${result.poster_path}`
                                : actorpicnotfound.src
                            }
                            alt={result.name ? result.name : result.title}
                            className="h-10 w-10 rounded-full object-contain"
                          />
                          <p>{result.name ? result.name : result.title}</p>
                        </div>
                      </a>
                    </Link>
                  );
                })}
              </InfiniteScroll>
            </div>
          )}
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
