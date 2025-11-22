// src/pages/Directors.js
import { useState, useEffect } from "react";
import NavBar from "../components/NavBar";

function Directors() {
  const [directors, setDirectors] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3000/directors")
      .then((r) => r.json())
      .then((data) => setDirectors(data))
      .catch((error) => console.error("Error fetching directors:", error));
  }, []);

  return (
    <>
      <NavBar />
      <div className="directors">
        <h1>Directors Page</h1>
        {directors.map((director) => (
          <article key={director.id}>
            <h2>{director.name}</h2>
            <ul>
              {director.movies.map((movie, index) => (
                <li key={index}>{movie}</li>
              ))}
            </ul>
          </article>
        ))}
      </div>
    </>
  );
}

export default Directors;
