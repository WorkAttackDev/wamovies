import { Result } from "../models/Result";

export const TMDB_API_KEY = process.env.TMDB_API_KEY;

type QueryArgs = {
  page: number;
};

export const requests = {
  fetchTrending: {
    title: "Tendência",
    url: ({ page = 1 }: QueryArgs) =>
      `/trending/movie/week?api_key=${TMDB_API_KEY}&language=pt-BR&page=${
        page || 1
      }`,
  },
  // fetchPopular: {
  //   title: "Popular",
  //   url: ({ page = 1 }: QueryArgs) =>
  //     `/trending/movie/popular?api_key=${TMDB_API_KEY}&language=pt-BR&page=${
  //       page || 1
  //     }`,
  // },
  fetchRated: {
    title: "Melhor Avaliados",
    url: ({ page = 1 }: QueryArgs) =>
      `/movie/top_rated?api_key=${TMDB_API_KEY}&language=pt-BR&page=${
        page || 1
      }`,
  },
  fetchActionMovies: {
    title: "Acção",
    url: ({ page = 1 }: QueryArgs) =>
      `/discover/movie?api_key=${TMDB_API_KEY}&language=pt-BR&with_genres=28&page=${
        page || 1
      }`,
  },
  fetchComedyMovies: {
    title: "Comedia",
    url: ({ page = 1 }: QueryArgs) =>
      `/discover/movie?api_key=${TMDB_API_KEY}&language=pt-BR&with_genres=35&page=${
        page || 1
      }`,
  },
  fetchHorrorMovies: {
    title: "Terror",
    url: ({ page = 1 }: QueryArgs) =>
      `/discover/movie?api_key=${TMDB_API_KEY}&language=pt-BR&with_genres=27&page=${
        page || 1
      }`,
  },
  fetchRomanceMovies: {
    title: "Romance",
    url: ({ page = 1 }: QueryArgs) =>
      `/discover/movie?api_key=${TMDB_API_KEY}&language=pt-BR&with_genres=10749&page=${
        page || 1
      }`,
  },
  fetchMisteryMovies: {
    title: "Misterio",
    url: ({ page = 1 }: QueryArgs) =>
      `/discover/movie?api_key=${TMDB_API_KEY}&language=pt-BR&with_genres=9648&page=${
        page || 1
      }`,
  },
  fetchAnimationMovies: {
    title: "Animação",
    url: ({ page = 1 }: QueryArgs) =>
      `/discover/movie?api_key=${TMDB_API_KEY}&language=pt-BR&with_genres=16&page=${
        page || 1
      }`,
  },
  fetchTVMovies: {
    title: "Filmes TV",
    url: ({ page = 1 }: QueryArgs) =>
      `/discover/movie?api_key=${TMDB_API_KEY}&language=pt-BR&with_genres=10770&page=${
        page || 1
      }`,
  },
};

export const fetchMovies = async (
  searchKey: string,
  page?: number
): Promise<Result | {}> => {
  const data = await (
    await fetch(
      `https://api.themoviedb.org/3${
        searchKey
          ? requests[searchKey]?.url({ page })
          : requests.fetchTrending.url({ page })
      }`
    )
  ).json();

  if (data.success === false) return {};
  return data;
};
