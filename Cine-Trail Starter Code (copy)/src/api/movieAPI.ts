import axios from 'axios';

const API_KEY = 'cda39dcbab0c3cf1fb9f37d48e4a7bf4';
axios.defaults.baseURL = `https://api.themoviedb.org/3`;

export const fetchMovieItem = async (id: string) => {
  const response = await axios.get(`movie/${id}?api_key=${API_KEY}`);
  console.log(response.data)
  return response.data;
};

export const fetchReview = async (id: string) => {
  const response = await axios.get(`movie/${id}/reviews?api_key=${API_KEY}`);
  
  return response.data.results;

};



// export const fetchGenres = async () => {
//   // Write Your Code Here.
//   return 
// };

export const fetchGenres = async () => {
  try {
    const response = await axios.get(`/genre/movie/list?api_key=${API_KEY}`);
    return response.data.genres;
  } catch (error) {
    console.error('Error fetching genres:', error);
    throw error;
  }
};


