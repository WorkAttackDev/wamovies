import React from "react";

type Props = React.DetailedHTMLProps<
  React.HTMLAttributes<HTMLParagraphElement>,
  HTMLParagraphElement
> & {};

const Label: React.FC<Props> = ({ className, children, ...props }) => {
  return (
    <p
      className={
        "text-sm bg-gray-600 rounded-full px-4 py-1 mb-3 mr-3" + " " + className
      }
      {...props}
    >
      {children}
    </p>
  );
};

export default Label;
