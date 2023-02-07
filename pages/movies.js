import React from "react";
import Head from "next/head";
import Grid from "../components/Layout/Grid";

export default function movies({ movies }) {
  return (
    <>
      <Head>
        <title>PyramidTV | Movies</title>
        <meta name="description" content="browse all movies with Pyramid TV" />
      </Head>
      <Grid data={movies} url={"movies"} />
    </>
  );
}

export async function getServerSideProps({ query }) {
  const trending = await fetch(
    `https://api.themoviedb.org/3/discover/movie?api_key=284324d34929646388e9917f8c8608b0&page=${query.page}&sort_by=popularity.desc`
  ).then((response) => response.json());

  return {
    props: {
      movies: trending,
    },
  };
}
