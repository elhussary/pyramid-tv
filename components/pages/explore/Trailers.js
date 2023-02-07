import React from "react";
import YouTube from "react-youtube";
import ClickOutside from "../../../hooks/ClickOutside";
const Trailers = ({ Trailer, setTra }) => {
  const domNode = ClickOutside(() => {
    setTra(false);
  });
  return (
    <div className="fixed top-0 left-0 bg-black bg-opacity-40 z-50 w-full h-screen">
      <div
        className=" max-w-md mx-auto flex justify-center translate-y-40"
        ref={domNode}
      >
        <YouTube videoId={Trailer.results[0].key} opts={{ width: "720" }} />
      </div>
    </div>
  );
};

export default Trailers;
