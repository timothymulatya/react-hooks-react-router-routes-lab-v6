// src/pages/Directors.js
import NavBar from "../components/NavBar";

const directors = [
  {
    name: "Scott Derrickson",
    movies: ["Doctor Strange", "Sinister", "The Exorcism of Emily Rose"],
  },
  {
    name: "Mike Mitchell",
    movies: ["Trolls", "Alvin and the Chipmunks: Chipwrecked", "Sky High"],
  },
  {
    name: "Edward Zwick",
    movies: ["Jack Reacher: Never Go Back", "Blood Diamond", "The Siege"],
  },
];

function Directors() {
  return (
    <div>
      <NavBar />
      <h1>Directors Page</h1>

      {directors.map((d, i) => (
        <article key={i}>
          <h2>{d.name}</h2>
          <ul>
            {d.movies.map((m, j) => (
              <li key={j}>{m}</li>
            ))}
          </ul>
        </article>
      ))}
    </div>
  );
}

export default Directors;
