import { CalendarIcon, ChatIcon } from "@heroicons/react/outline";
import { GetServerSideProps } from "next";
import Image from "next/image";
import React from "react";
import Label from "../../features/core/components/Label";
import WithoutResults from "../../features/core/components/WithoutResults";
import { Movie, movieStatusPt } from "../../features/core/models/Movie";
import { BASE_IMAGE_PATH, fetchMovie } from "../../features/core/utils/request";

type Props = {
  movie?: Movie;
};

const MoviePage: React.FC<Props> = ({ movie }) => {

  return (
    <main>
      {!movie ? (
        <WithoutResults />
      ) : (
        <section className='grid grid-cols-1'>
          <div className='relative'>
            <Image
              layout='responsive'
              width={1920}
              height={1080}
              src={`${BASE_IMAGE_PATH}${
                movie.backdrop_path || movie.poster_path
              }`}
            />
            <span className='absolute -bottom-4 w-full h-full px-4 flex flex-col items-center justify-end  bg-gradient-to-t from-workattack-dark sm:p-8'>
              <small>{movieStatusPt[movie.status]}</small>
              <h1 className='w-full my-1 text-center text-2xl  text-white sm:text-4xl '>
                {movie.title || movie.original_title}
              </h1>
              <small>Avaliação: {movie.vote_average}</small>
            </span>
          </div>
          <div className='p-4 pt-12 sm:p-8 sm:pt-12'>
            <h2 className='text-xl  mb-4'>Descrição</h2>
            <p>{movie.overview}</p>
            <h2 className='text-xl  my-4'>Géneros</h2>
            <span className='flex flex-wrap'>
              {movie.genres.map((_g) => (
                <Label key={_g.id}>{_g.name}</Label>
              ))}
            </span>
            <h2 className='text-xl  my-4'>Mais Detalhes</h2>
            <ul>
              <li className='flex flex-wrap items-center mb-3 text-sm'>
                <CalendarIcon className='w-4 mr-2' />
                <strong className='mr-2'>Data de Lançamento: </strong>
                {movie.release_date}
              </li>
              <li className='flex flex-wrap items-center mb-3 text-sm'>
                <ChatIcon className='w-4 mr-2' />
                <strong className='mr-2'>Idiomas:</strong>
                {movie.spoken_languages.map((_l) => (
                  <p key={_l.iso_639_1} className='mr-2 last:mr-0'>
                    {_l.iso_639_1.toUpperCase()} - {_l.english_name}
                  </p>
                ))}
                .
              </li>
            </ul>
          </div>
        </section>
      )}
    </main>
  );
};

export const getServerSideProps: GetServerSideProps = async (context) => {
  const id = context.params.id;

  if (!id)
    return {
      props: {},
    };

  const movie = await fetchMovie(id as string);

  if (!(movie as Movie).id)
    return {
      props: {},
    };

  return {
    props: {
      movie,
    },
  };
};

export default MoviePage;
