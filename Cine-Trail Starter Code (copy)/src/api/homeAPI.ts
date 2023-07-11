import axios from 'axios';

const API_KEY = 'cda39dcbab0c3cf1fb9f37d48e4a7bf4';
axios.defaults.baseURL = `https://api.themoviedb.org/3`;


export const fetchhome = async (
  year: string,
  page: number,
  limit?: number | null,
  genresId?: number | null
) => {
  const response = await axios.get(
    `discover/movie?api_key=${API_KEY}&sort_by=homeity.desc&primary_release_year=${year}&with_genres=${
      genresId ? genresId : ''
    }&page=${page}`
  );

  if (limit) response.data.results.length = limit;
  return response.data;
};
