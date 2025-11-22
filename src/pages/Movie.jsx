// src/pages/Movie.js
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import NavBar from "../components/NavBar";

function Movie() {
  const { id } = useParams();
  const [movie, setMovie] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    fetch(`http://localhost:3000/movies/${id}`)
      .then((r) => {
        if (!r.ok) throw new Error("Movie not found");
        return r.json();
      })
      .then((data) => {
        setMovie(data);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching movie:", error);
        setLoading(false);
      });
  }, [id]);

  if (loading) return <div>Loading...</div>;
  if (!movie) return <div>Movie not found</div>;

  return (
    <>
      <NavBar />
      <div className="movie">
        <h1>{movie.title}</h1>
        <p>Time: {movie.time}</p>
        <div className="genres">
          {movie.genres &&
            movie.genres.map((genre, index) => (
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
