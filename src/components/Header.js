import React, { useEffect, useState } from "react";
import styled from "styled-components";
import Search from "../Search";
import { API_KEY } from "./api";
const HeaderBlock = styled.div`
  z-index: 2;
  width: 100%;
  height: 60px;
  display: flex;
  position: fixed;
  justify-content: space-around;
  align-items: center;
  backdrop-filter: blur(0px);
  background-color: rgb(21, 21, 21, 0.55);
  border-bottom-color: rbg(35, 35, 35, 0.2);
  border: 1px solid black;
  box-sizing: border-box;
  color: rgb(250, 250, 250);
`;

const H2 = styled.h2`
  box-sizing: border-box;
  color: rgb(230, 230, 230);
  cursor: pointer;
  font-size: 18px;
  font-weight: 500;
  padding: 0px 10xp;
  text-align: center;
`;

// 부모로부터 moveCall 함수를 받음
function Header({ setFilterFlags, filter, movies, setMoviesCopy, reset }) {
  const handleClick = (e) => {
    const id = e.target.id;
    console.log(id);
    const newFilter = new Array(4);
    newFilter.fill(false);

    newFilter[id] = true;

    setFilterFlags(newFilter);
    filter(id);
  };

  useEffect(() => {});
  return (
    <HeaderBlock>
      <H2>
        {/* https://api.themoviedb.org/3/movie/popular?api_key={API_KEY} */}
        <a id="0" onClick={handleClick}>
          홈
        </a>
      </H2>
      <H2>
        {/* https://api.themoviedb.org/3/movie/popular?api_key={API_KEY} */}
        <a id="1" onClick={handleClick}>
          인기
        </a>
      </H2>
      <H2>
        {/* queryString: 3/movie/latest */}
        {/* https://api.themoviedb.org/3/movie/latest?api_key={API_KEY} */}
        <a id="2" onClick={handleClick}>
          최신
        </a>
      </H2>
      <H2>
        {/* https://api.themoviedb.org/3/genre/movie/list?api_key={API_KEY} */}
        <a id="3">장르</a>
      </H2>
      <Search movies={movies} setMoviesCopy={setMoviesCopy} reset={reset} />
    </HeaderBlock>
  );
}

export default Header;
