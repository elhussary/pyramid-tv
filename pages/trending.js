import React from "react";
import Head from "next/head";
import Grid from "../components/Layout/Grid";

export default function trending({ trending }) {
  return (
    <>
      <Head>
        <title>PyramidTV | Trending</title>
        <meta
          name="description"
          content="browse trending movies and TV shows & more with Pyramid TV"
        />
      </Head>
      <Grid data={trending} url={"trending"} />
    </>
  );
}

export async function getServerSideProps({ query }) {
  const trending = await fetch(
    `https://api.themoviedb.org/3/trending/all/day?api_key=284324d34929646388e9917f8c8608b0&page=${
      query.page ? query.page : 1
    }`
  ).then((response) => response.json());

  return {
    props: {
      trending: trending,
    },
  };
}
