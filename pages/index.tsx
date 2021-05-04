import { GetServerSideProps } from "next";
import Head from "next/head";
import React from "react";
import Header from "../features/core/components/Header";
import Nav from "../features/core/components/Nav";
import Pagination from "../features/core/components/Pagination";
import Results from "../features/core/components/Results";
import WithoutResults from "../features/core/components/WithoutResults";
import { Result } from "../features/core/models/Result";
import { fetchMovies } from "../features/core/utils/request";

type Props = {
  result?: Result;
};

const HomePage: React.FC<Props> = ({ result }) => {
  return (
    <div>
      <Head>
        <title>WorkAttack Movies</title>
        <link rel='icon' href='/favicon.ico' />
      </Head>

      <Header />
      <Nav />
      {Object.keys(result).length === 0 ? (
        <WithoutResults />
      ) : (
        <Results results={result.results} />
      )}
      <Pagination page={result.page} maxPages={result.total_pages} />
    </div>
  );
};

export const getServerSideProps: GetServerSideProps = async (context) => {
  const searchKey = context.query?.key;
  const page = context.query?.page;

  const data = await fetchMovies(searchKey as string, parseInt(page as string));

  return {
    props: {
      result: data,
    },
  };
};

export default HomePage;
