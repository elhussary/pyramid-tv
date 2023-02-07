import React from "react";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/react-splide/css";
import actorpicnotfound from "/assets/images/actorpicnotfound.png";

const Actors = ({ actorsData }) => {
  return (
    <div className="text-white">
      <h1 className="font-bold mb-4">CAST</h1>

      <Splide
        options={{
          perPage: 3,
          pagination: false,
          arrows: false,
          breakpoints: {
            623: {
              perPage: 2,
              perMove: 2,
            },
          },
        }}
      >
        {actorsData.cast.map((actor) => {
          return (
            <SplideSlide key={actor.id}>
              <div className="flex gap-2 mb-3">
                <img
                  src={
                    actor.profile_path
                      ? `https://image.tmdb.org/t/p/w300//${actor.profile_path}`
                      : actorpicnotfound.src
                  }
                  alt={actor.name}
                  className="w-11 h-11 object-contain rounded-full"
                />

                <div className="text-xs">
                  <h3 className="mb-0.5">{actor.name}</h3>
                  <p>{actor.character}</p>
                </div>
              </div>
            </SplideSlide>
          );
        })}
      </Splide>
    </div>
  );
};

export default Actors;
