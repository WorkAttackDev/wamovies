import React from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import { requests } from "../../utils/request";

const Nav: React.FC = () => {
  const { query } = useRouter();

  return (
    <nav className='flex justify-center relative'>
      <ul className='flex overflow-x-auto pb-4 scrollbar-hide '>
        {Object.entries(requests).map((_en) => (
          <li
            key={_en[0]}
            className={`mx-4 whitespace-nowrap cursor-pointer transition-transform duration-300  transform hover:scale-110 hover:text-workattack sm:text-lg ${
              query?.key === _en[0] ? "text-workattack scale-110" : ""
            }`}
          >
            <Link href={`/?key=${_en[0]}&page=1`}>{_en[1].title}</Link>
          </li>
        ))}
      </ul>
      <span className='absolute top-0 right-0 bg-gradient-to-l from-workattack-dark to-transparent h-10 w-1/12 pointer-events-none'></span>
      <span className='absolute top-0 left-0 bg-gradient-to-l from-transparent to-workattack-dark h-10 w-1/12 pointer-events-none'></span>
    </nav>
  );
};

export default Nav;
