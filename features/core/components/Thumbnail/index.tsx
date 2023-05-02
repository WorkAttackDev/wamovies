import React, { forwardRef } from "react";
import { ResultItem } from "../../models/Result";
import Image from "next/image";
import { ThumbUpIcon } from "@heroicons/react/outline";
import Link from "next/link";
import { BASE_IMAGE_PATH } from "../../utils/request";
// import ColorThief from "colorthief";

type Props = {
  result: ResultItem;
};

const Thumbnail = forwardRef<HTMLDivElement, Props>(({ result }, ref) => {
  return (
    <div
      ref={ref}
      className='group cursor-pointer transition ease-out transform duration-300 hover:z-40 sm:hover:scale-105 sm:p-4'
    >
      <Link href={`/movies/${result.id}`}>
        <a>
          <Image
            width={920}
            height={540}
            // onLoad={(e) => console.log(new ColorThief().getColor(e.currentTarget))}
            src={`${BASE_IMAGE_PATH}${result.backdrop_path || result.poster_path
              }`}
            alt="movie image"
          />
        </a>
      </Link>
      <div>
        <p title={result.overview} className='line-clamp-2'>
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
