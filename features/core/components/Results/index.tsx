import React from "react";
import { ResultItem } from "../../models/Result";
import Thumbnail from "../Thumbnail";

import FlipMove from "react-flip-move";

type Props = {
  results: ResultItem[];
};

const Results: React.FC<Props> = ({ results }) => {
  return (
    <FlipMove className='px-4 py-4 sm:grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 '>
      {results.map((_v) => (
        <Thumbnail key={_v.id} result={_v} />
      ))}
    </FlipMove>
  );
};

export default Results;
