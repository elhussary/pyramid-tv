import Link from "next/link";
import React from "react";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/react-splide/css";

const Morelike = ({ similarData }) => {
  return (
    <section className="pb-6 text-white">
      <header className="flex justify-between items-center mb-3 font-semibold">
        You May Also Like
      </header>

      <Splide
        options={{
          perPage: 7,
          gap: "0.5rem",
          pagination: false,
          arrows: false,
          breakpoints: {
            640: {
              perPage: 4,
            },
          },
        }}
      >
        {similarData.results
          .filter((el) => el.id != "")
          .map((similar) => {
            return (
              <SplideSlide key={similar.id}>
                <div>
                  <Link
                    href={`${
                      similar.name
                        ? `/explore/tv/${similar.id}`
                        : `/explore/movie/${similar.id}`
                    }`}
                  >
                    <a title={similar.name}>
                      <img
                        src={`https://image.tmdb.org/t/p/w200//${similar.poster_path}`}
                        alt=""
                        className="rounded-xl h-24 xl:h-28"
                      />
                    </a>
                  </Link>
                </div>
              </SplideSlide>
            );
          })}
      </Splide>
    </section>
  );
};

export default Morelike;
