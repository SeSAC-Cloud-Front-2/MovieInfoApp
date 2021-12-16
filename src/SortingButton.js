import React, { useCallback } from "react";

const SortingButton = ({ id, movies, setMovies, reset, text }) => {
  const handleClick = useCallback((e) => {
    sorting(e.target.id);
  }, []);

  const sorting = useCallback(
    (id) => {
      const nextMovies = movies.concat();
      if (id === "0") {
        //home
        reset();
      } else if (id === "1") {
        //popular
        setMovies(nextMovies.sort((a, b) => (a.rate > b.rate ? -1 : 1)));
      } else if (id === "2") {
        //new=
        setMovies(nextMovies.sort((a, b) => (a.date > b.date ? -1 : 1)));
      } else if (id === "3") {
        //genre
      }
      console.log(movies);
    },
    [movies]
  );

  return (
    <>
      <li id={id} key={id} onClick={handleClick}>
        {text}
      </li>
    </>
  );
};

export default SortingButton;
