import React from "react";

type Props = {
  Icon: (props: React.ComponentProps<"svg">) => JSX.Element;
  title: string;
};

const HeaderItem: React.FC<Props> = ({ Icon, title }) => {
  return (
    <span className='group flex flex-col items-center cursor-pointer w-12 hover:text-white sm:w-auto'>
      <Icon className='w-4 h-auto group-hover:animate-bounce sm:w-5' />
      <p className='opacity-0 text-xs tracking-wider duration-300  transition-opacity group-hover:opacity-100 sm:text-base'>
        {title}
      </p>
    </span>
  );
};

export default HeaderItem;
