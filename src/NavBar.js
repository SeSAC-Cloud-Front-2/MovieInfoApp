import React from "react";
import Search from "./Search";
import SortingButton from "./SortingButton";

const NavBar = ({ movies, setMovies, reset }) => {
  const filters = [
    {
      id: 0,
      text: "홈",
    },
    {
      id: 1,
      text: "인기",
    },
    {
      id: 2,
      text: "최신",
    },
    {
      id: 3,
      text: "장르",
    },
  ];

  const filterList = filters.map((filter) => (
    <SortingButton
      key={filter.id}
      id={filter.id}
      movies={movies}
      setMovies={setMovies}
      reset={reset}
      text={filter.text}
    />
  ));

  return (
    <div>
      <ul>
        {filterList}
        <Search movies={movies} setMovies={setMovies} reset={reset} />
      </ul>
    </div>
  );
};

export default NavBar;
