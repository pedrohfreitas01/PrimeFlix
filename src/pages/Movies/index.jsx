import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import "./style-info.css";

import api from "../../service/api";

function Movie() {
  const { id } = useParams();
  const [movie, setMovie] = useState({});
  const [loading, setLoading] = useState(true);

  const navigate = useNavigate();

  useEffect(() => {
    async function loadMovie() {
      await api
        .get(`/movie/${id}`, {
          params: {
            api_key: "2e963f4c3e1b02490fac8abe4f9fddcb",
            language: "en-US",
          },
        })
        .then((res) => {
          setMovie(res.data);
          setLoading(false);
        })
        .catch((err) => {
          console.log(err);
          navigate("/", { replace: true });
          return;
        });
    }

    loadMovie();
  });

  function favoriteMovie() {
    const movieList = localStorage.getItem("movieList");

    let movieListArray = JSON.parse(movieList) || [];

    const hasMovie = movieListArray.some((movieListArray) => 
      movieListArray.id === movie.id
    );

    if (hasMovie) {
      alert("Movie already in favorites");
      return;
    }

    movieListArray.push(movie);
    localStorage.setItem("movieList", JSON.stringify(movieListArray));
    alert("Movie added to favorites");
  }

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
      <div className="movieDetails">
        <h2>{movie.title}</h2>
        <img
          src={`https://image.tmdb.org/t/p/w200${movie.backdrop_path}`}
          alt={movie.title}
        />
        <div className="sinopse">
          <p>{movie.overview}</p>
          <div className="info-movie">
            <span>Release Date: {movie.release_date}</span>
            <span>Rating: {movie.vote_average}</span>
          </div>
        </div>

        <div className="area-buttons">
          <button onClick={favoriteMovie}>Favorite</button>
          <button>
            <a
              target="_blank"
              href={`https://youtube.com/results?search_query=${movie.title} trailer`}
            >
              Trailer
            </a>
          </button>
        </div>
      </div>
    </div>
  );
}

export default Movie;
