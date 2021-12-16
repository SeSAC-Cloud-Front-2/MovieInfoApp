import React, { useState } from "react";

const Search = ({ movies, setMovies, reset }) => {
  const [value, setValue] = useState("");
  const handleChange = (e) => {
    const text = e.target.value;
    setValue(text);

    if (text.trim() == "") {
      reset();
      return;
    }

    setMovies(movies.concat().filter((movie) => movie.name.includes(text)));
  };
  return (
    <>
      <input type="text" value={value} onChange={handleChange} />
    </>
  );
};

export default Search;
