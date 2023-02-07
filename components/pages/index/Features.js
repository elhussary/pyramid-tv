import React from "react";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/react-splide/css";
import Link from "next/link";

const Features = ({ title, data }) => {
  return (
    <section className="px-16 pt-10 pb-0">
      <header className="mb-6 flex justify-between items-center">
        <h1 className="text-3xl">{title}</h1>
        <Link href={`/${title.toLowerCase().replace(/\s/g, "")}`}>
          <a className="dark:text-gray-300">View more ➡️</a>
        </Link>
      </header>
      <Splide
        options={{
          perPage: 7,
          pagination: false,
          arrows: true,
          breakpoints: {
            623: {
              perPage: 2,
              perMove: 2,
              gap: "1rem",
            },
            935: {
              perPage: 3,
              perMove: 3,
              gap: "1rem",
            },
            1247: {
              perPage: 5,
              perMove: 5,
            },
          },
        }}
      >
        {data.results.map((movie) => {
          return (
            <SplideSlide key={movie.id}>
              <div>
                <Link
                  href={`${
                    movie.name
                      ? `/explore/tv/${movie.id}`
                      : `/explore/movie/${movie.id}`
                  }`}
                >
                  <a>
                    <img
                      src={`https://image.tmdb.org/t/p/w200//${movie.poster_path}`}
                      alt=""
                      className="rounded-xl mb-2"
                    />
                  </a>
                </Link>
                <header className="px-2 py-4">
                  <h1>{movie.name ? movie.name : movie.title}</h1>
                  <div className="text-gray-500">
                    <ul className="flex gap-2 py-1 items-center">
                      <li className="text-sm">
                        Rating {movie.vote_average.toString().slice(0, 3)}
                      </li>
                      <li title={"Vote count"}>
                        <p>| ❤️ {movie.vote_count} </p>
                      </li>
                    </ul>
                  </div>
                </header>
              </div>
            </SplideSlide>
          );
        })}
      </Splide>
    </section>
  );
};

export default Features;
