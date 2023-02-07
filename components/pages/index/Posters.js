import React from "react";
import PostersAPI from "../../../PostersAPI.json";
import Link from "next/link";

const Posters = () => {
  return (
    <section className="grid grid-cols-3 sm:grid-cols-6 ">
      {PostersAPI.map((movie) => {
        return (
          <div key={movie.id}>
            <Link href={`/explore/tv/${movie.id}`}>
              <a>
                <img
                  src={`https://image.tmdb.org/t/p/w300//${movie.poster_path}`}
                  alt=""
                />
              </a>
            </Link>
          </div>
        );
      })}
    </section>
  );
};

export default Posters;
