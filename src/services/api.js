// services/api.js

const API_KEY = "YOUR_TMDB_API_KEY"; 
const BASE_URL = "https://api.themoviedb.org/3";

export const getPopularMovies = async () => {
  try {
    const res = await fetch(`${BASE_URL}/movie/popular?api_key=${API_KEY}`);
    if (!res.ok) throw new Error("Failed to fetch movies");
    return await res.json();
  } catch (err) {
    console.error(err);
    return null;
  }
};
