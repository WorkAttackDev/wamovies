export interface Genre {
  id: number;
  name: string;
}

export interface MovieProducer {
  id: number;
  logo_path?: string;
  name: string;
  origin_country: string;
}

type MovieStatus =
  | "Rumored"
  | "Planned"
  | "In Production"
  | "Post Production"
  | "Released"
  | "Canceled";

export interface Movie {
  adult: boolean;
  backdrop_path?: string;
  belongs_to_collection?: {};
  budget: number;
  genres: Genre[];
  homepage?: string;
  id: number;
  imdb_id?: string;
  original_language: string;
  original_title: string;
  overview: string;
  popularity: number;
  poster_path?: string;
  production_companies: MovieProducer[];
  production_countries: {
    iso_3166_1: string;
    name: string;
  }[];

  release_date: string;
  revenue: number;
  runtime?: number;
  spoken_languages: {
    iso_639_1: string;
    name: string;
    english_name: string;
  }[];
  status: MovieStatus;
  tagline?: string;
  title: string;
  video: boolean;
  vote_average: number;
  vote_count: number;
}

export const movieStatusPt: Record<MovieStatus, string> = {
  Rumored: "Rumor",
  Planned: "Em Planejamento",
  "In Production": "Em Produção",
  "Post Production": "Pós Produção",
  Released: "Já Lançado",
  Canceled: "Cancelado",
};
