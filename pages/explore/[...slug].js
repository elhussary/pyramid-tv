import Head from 'next/head'
import Info from "../../components/pages/explore/Info";
import Actors from "../../components/pages/explore/Actors";
import Morelike from "../../components/pages/explore/Morelike";

export default function TV({ data, similarData, actorsData, Trailer }) {
  return (
    <main
      className="bg-cover bg-center bg-no-repeat min-h-screen flex flex-col justify-end pt-20 "
      style={{
        backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.1), rgb(0, 0, 0) 90%, rgb(0, 0, 0))
  ,url(https://www.themoviedb.org/t/p/w1920_and_h800_multi_faces/${data.backdrop_path})`,
      }}
    >
      <Head>
        <title>PyramidTV | {data.name ? data.name : data.title}</title>
        <meta name="description" content="FOR LATER" />
      </Head>

      <section className="grid grid-cols-1 lg:grid-cols-2 py-14 px-6 gap-10">
        <Info data={data} Trailer={Trailer} />
        <div>
          <Morelike similarData={similarData} />
          <Actors actorsData={actorsData} />
        </div>
      </section>
    </main>
  );
}

export async function getServerSideProps(context) {
  // Fetch APIS
  console.log(context);
  const data = await fetch(
    `https://api.themoviedb.org/3/${context.params.slug[0]}/${context.params.slug[1]}?api_key=284324d34929646388e9917f8c8608b0&page=1`
  ).then((response) => response.json());

  const similarData = await fetch(
    `https://api.themoviedb.org/3/${context.params.slug[0]}/${context.params.slug[1]}/similar?api_key=284324d34929646388e9917f8c8608b0`
  ).then((response) => response.json());

  const Trailer = await fetch(
    `https://api.themoviedb.org/3/${context.params.slug[0]}/${context.params.slug[1]}/videos?api_key=284324d34929646388e9917f8c8608b0`
  ).then((response) => response.json());

  const actorsData = await fetch(
    `https://api.themoviedb.org/3/${context.params.slug[0]}/${context.params.slug[1]}/credits?api_key=284324d34929646388e9917f8c8608b0`
  ).then((response) => response.json());

  return {
    props: {
      data: data,
      similarData: similarData,
      Trailer: Trailer,
      actorsData: actorsData,
    },
  };
}
