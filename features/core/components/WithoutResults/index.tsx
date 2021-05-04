import React from "react";

// import { Container } from './styles';

const WithoutResults: React.FC = () => {
  return (
    <section
      className='flex flex-col items-center justify-center mt-4 p-4 md:flex-row'
      style={{ height: "50vh" }}
    >
      <img
        className='w-48 md:w-60'
        src='/images/server_down.svg'
        alt='server down'
      />
      <div className='w-8 h-8'></div>
      <h1 className='text-2xl text-center text-gray-400'>
        Ocorreu um erro ao carregar os dados
      </h1>
    </section>
  );
};

export default WithoutResults;
