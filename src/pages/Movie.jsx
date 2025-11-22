// src/pages/Movie.js
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import NavBar from "../components/NavBar";

function Movie() {
  const { id } = useParams();
  const [movie, setMovie] = useState(null);

  useEffect(() => {
    fetch(`http://localhost:3000/movies/${id}`)
      .then((r) => r.json())
      .then((data) => setMovie(data))
      .catch((error) => console.error("Error fetching movie:", error));
  }, [id]);

  if (!movie) return <div>Loading...</div>;

  return (
    <>
      <NavBar />
      <div className="movie">
        <h1>{movie.title}</h1>
        <p>Time: {movie.time} minutes</p>
        <div className="genres">
          {movie.genres.map((genre, index) => (
            <span key={index} className="genre-tag">
              {genre}
            </span>
          ))}
        </div>
      </div>
    </>
  );
}

export default Movie;
