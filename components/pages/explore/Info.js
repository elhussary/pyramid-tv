import React from "react";
import { RiPlayMiniFill, RiStarFill } from "react-icons/ri";
import Moment from "react-moment";
import Trailers from "./Trailers";

const Info = ({ data, Trailer }) => {
  const [tra, setTra] = React.useState(false);
  return (
    <>
      {tra && <Trailers Trailer={Trailer} setTra={setTra} />}
      <div className="w-full text-white">
        <h1 className="text-4xl sm:text-5xl mb-8 font-bold ">
          {data.name ? data.name : data.title}
        </h1>
        <div className="flex gap-6 mb-4">
          <div className="flex items-center gap-1">
            <RiStarFill size={20} className="text-yellow-400" />
            <p>
              {data.vote_average.toString().slice(0, 3)} | {data.vote_count}
            </p>
          </div>
          <div className="flex gap-2 text-gray-300 flex-wrap">
            <p>
              {data.episode_run_time ? data.episode_run_time : data.runtime} Min
            </p>
            {data.genres.map((genre) => {
              return <p key={genre.name}>{genre.name}</p>;
            })}

            <p>
              <Moment format="YYYY/MM/DD">
                {data.first_air_date ? data.first_air_date : data.release_date}
              </Moment>
            </p>
          </div>
        </div>
        <p className="mb-6 max-w-2xl leading-loose text-sm">{data.overview}</p>
        <div className="flex gap-6 mb-8 text-gray-300">
          <p>Language: {data.spoken_languages[0].english_name}</p>
          <p>
            Country:{" "}
            {data.production_countries.length > 0
              ? data.production_countries[0].name
              : ""}
          </p>
          {data.number_of_seasons && (
            <>
              <p>Total Seasons: {data.number_of_seasons}</p>
              <p>Total episodes: {data.number_of_episodes}</p>
            </>
          )}
        </div>

        <div className="flex gap-10 ">
          <button className="w-40 h-12 justify-center bg-yellow-400 text-black font-semibold rounded-sm flex items-center uppercase">
            <RiPlayMiniFill size={25} />
            Play Now
          </button>

          <button
            className="border h-12 w-40 p-1 flex items-center justify-center uppercase"
            onClick={() => setTra(true)}
          >
            Trailer
          </button>
        </div>
      </div>
    </>
  );
};

export default Info;
