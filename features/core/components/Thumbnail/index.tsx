import React, { forwardRef } from "react";
import { ResultItem } from "../../models/Result";
import Image from "next/image";
import { ThumbUpIcon } from "@heroicons/react/outline";

type Props = {
  result: ResultItem;
};

const Thumbnail = forwardRef<HTMLDivElement, Props>(({ result }, ref) => {
  const BASE_IMAGE_PATH = "https://image.tmdb.org/t/p/original";

  return (
    <div
      ref={ref}
      className='group cursor-pointer transition ease-out transform duration-300 hover:z-40 sm:hover:scale-105 sm:p-4'
    >
      <Image
        layout='responsive'
        width={640}
        height={360}
        src={`${BASE_IMAGE_PATH}${result.backdrop_path || result.poster_path}`}
      />
      <div>
        <p title={result.overview} className='truncate'>
          {result.overview}
        </p>
        <h1 className='text-xl font-bold transition-all ease-out duration-200 group-hover:text-white'>
          {result.title || result.original_title}
        </h1>
        <p className='flex items-center opacity-0 transition duration-300 group-hover:opacity-100'>
          {result.release_date} *
          <ThumbUpIcon className='h-5 mx-2' />
          {result.vote_count}
        </p>
      </div>
    </div>
  );
});

export default Thumbnail;
