// src/pages/Actors.js
import NavBar from "../components/NavBar";

const actors = [
  {
    name: "Benedict Cumberbatch",
    movies: ["Doctor Strange", "The Imitation Game", "Sherlock"],
  },
  {
    name: "Scarlett Johansson",
    movies: ["Lucy", "Black Widow", "The Avengers"],
  },
];

function Actors() {
  return (
    <div>
      <NavBar />
      <h1>Actors Page</h1>

      {actors.map((a, i) => (
        <article key={i}>
          <h2>{a.name}</h2>
          <ul>
            {a.movies.map((m, j) => (
              <li key={j}>{m}</li>
            ))}
          </ul>
        </article>
      ))}
    </div>
  );
}

export default Actors;
