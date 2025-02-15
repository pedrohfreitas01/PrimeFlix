import React, { useEffect, useState } from "react";
import api from "../../service/api";
import "./style.css";
import { Link } from "react-router-dom";

function Home() {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function loadMovies() {
      const res = await api.get("movie/now_playing", {
        params: {
          api_key: "2e963f4c3e1b02490fac8abe4f9fddcb",
          language: "en-US",
          page: 1,
        },
      });

      let movies = res.data.results.slice(0, 10);
      console.log(movies);
      setMovies(movies);
      setLoading(false);
    }

    loadMovies();
  }, []);

  if (loading) {
    return (
      <div className="loading">
        <h2>Please wait, movies loading</h2>
        <h2>. . .</h2>
      </div>
    );
  }

  return (
    <div>
      <div className="container">
        <div className="movieList">
          {movies.map((movie) => {
            return (
              <div key={movie.id} className="movie">
                <h2>{movie.title}</h2>
                <img
                  src={`https://image.tmdb.org/t/p/w200${movie.poster_path}`}
                  alt={movie.title}
                />

                <Link to={`movie/${movie.id}`} className="link">
                  Details
                </Link>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default Home;
