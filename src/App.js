import { useMemo, useState } from "react";
import "./App.css";
import NavBar from "./NavBar";

const tempMovies = [
  {
    name: "man",
    date: new Date(2011, 11, 11),
    rate: 2.11,
  },
  {
    name: "spiderman",
    date: new Date(2012, 6, 30),
    rate: 4.75,
  },
  {
    name: "spider",
    date: new Date(2009, 12, 25),
    rate: 3.0,
  },
  {
    name: "spy",
    date: new Date(2020, 1, 2),
    rate: 3.01,
  },
];

const App = () => {
  const [movies, setMovies] = useState(tempMovies.concat());

  const resetMovies = () => {
    setMovies(tempMovies.concat());
  };

  const movieList = useMemo(
    () =>
      movies.map((movie, index) => (
        <div key={index}>
          {movie.name}/{movie.date.toLocaleDateString()}/{movie.rate}
        </div>
      )),
    [movies]
  );

  return (
    <>
      <NavBar movies={movies} setMovies={setMovies} reset={resetMovies} />
      <div>{movieList}</div>
    </>
  );
};

export default App;
