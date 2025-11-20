// pages/Movies.jsx

import { useEffect, useState } from "react";
import { getPopularMovies } from "../services/api";
import MovieCard from "../components/MovieCard";
import "../movies.css";

const Movies = () => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const data = await getPopularMovies();
      if (data && data.results) {
        setMovies(data.results);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="movies-container">
      <h1>🔥 Popular Movies</h1>

      <div className="movies-grid">
        {movies.map((movie) => (
          <MovieCard key={movie.id} movie={movie} />
        ))}
      </div>
    </div>
  );
};

export default Movies;
