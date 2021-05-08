import { useRouter } from "next/router";
import React, { useEffect } from "react";

// import { Container } from './styles';

const MoviesPage: React.FC = () => {
  const { replace } = useRouter();

  useEffect(() => {
    replace("/");
  }, []);

  return <main></main>;
};

export default MoviesPage;
