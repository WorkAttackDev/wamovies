import { GetServerSideProps } from "next";
import Head from "next/head";
import React, { useState } from "react";
import Header from "../features/core/components/Header";
import Modal from "../features/core/components/Modal";
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
  const [showModal, setShowModal] = useState(true);

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
      {showModal && (
        <Modal>
          <div className='flex flex-col items-center text-center p-4 overflow-y-auto'>
            <img
              className='w-32 sm:w-60'
              src='/images/logo.svg'
              alt='WorkAttack Logo svg'
            />
            <p>Este site é uma demo de um catalogo de filmes online.</p>
            <p>
              O proposito deste site é simplesmente demonstrativo, ao utilizar
              poderá notar algumas funcionalidades em falta.
            </p>
            <p>
              Se Gostou do site entre em contacto em:{" "}
              <a
                className='text-workattack'
                href='https://workattackangola.com'
              >
                workattackangola.com
              </a>{" "}
            </p>
            <button
              className='bg-workattack shadow-sm flex items-center justify-center px-4 py-1 my-8 rounded-full transition duration-300 hover:bg-workattack-dark hover:shadow-xl'
              onClick={() => setShowModal(false)}
            >
              Fechar
            </button>
          </div>
        </Modal>
      )}
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
