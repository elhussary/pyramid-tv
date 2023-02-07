import React from "react";
import Head from "next/head";
import Grid from "../components/Layout/Grid";

export default function tvseries({ tvseries }) {
  return (
    <>
      <Head>
        <title>PyramidTV | TV Series</title>
        <meta
          name="description"
          content="browse all TV Series with Pyramid TV"
        />
      </Head>
      <Grid data={tvseries} url={"tvseries"} />
    </>
  );
}

export async function getServerSideProps({ query }) {
  const tvseries = await fetch(
    `https://api.themoviedb.org/3/discover/tv?api_key=284324d34929646388e9917f8c8608b0&page=${query.page}&sort_by=popularity.desc`
  ).then((response) => response.json());

  return {
    props: {
      tvseries: tvseries,
    },
  };
}
