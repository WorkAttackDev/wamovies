import { ArrowLeftIcon, ArrowRightIcon } from "@heroicons/react/outline";
import Link from "next/link";
import { useRouter } from "next/router";
import React from "react";

type Props = {
  page: number;
  maxPages?: number;
};

const Pagination: React.FC<Props> = ({ page, maxPages }) => {
  const { query } = useRouter();

  const extractSearchKey = (pageAction: number) => {
    const key = query.key;
    return key ? `?key=${key}&page=${pageAction}` : `?page=${pageAction}`;
  };

  return (
    <span className='flex w-full justify-center items-center mb-8'>
      {page > 1 && (
        <Link href={`/${extractSearchKey(page - 1)}`}>
          <a>
            <ArrowLeftIcon className='w-4' />
          </a>
        </Link>
      )}
      <p className='mx-4 text-lg'>{page}</p>

      <Link href={`/${extractSearchKey(page + 1)}`}>
        <a>
          <ArrowRightIcon className='w-4' />
        </a>
      </Link>
    </span>
  );
};

export default Pagination;
