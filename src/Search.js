import React, { useState } from "react";
import "./Search.css";

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
      <input
        className="searchBar"
        type="text"
        value={value}
        onChange={handleChange}
        placeholder="영화 제목을 입력해주세요"
      />
    </>
  );
};

export default Search;
