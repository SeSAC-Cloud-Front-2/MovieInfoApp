import React, { useCallback, useEffect, useState } from "react";
import { API_URL, API_KEY, IMAGE_URL } from "./api";
import MainImage from "./MainImage";
import GridCards from "./GridCards";
import styled from "styled-components";
import Header from "./Header";

const MainPageBlock = styled.div`
  width: 100%;
  margin: 0px;
`;

const MovieCardBlock = styled.div`
  width: 90%;
  margin: 1rem auto;
  .genre {
    color: white;
  }
`;

const MovieCardBody = styled.div`
  height: 100vh;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  margin: 0 auto;
  width: 90%;
`;

const ButtonBlock = styled.div`
  display: flex;
  justify-content: center;
`;

const Button = styled.button`
  width: 104px;
  height: 34px;
  background-color: rgba(0, 0, 0, 0.2);
  color: rgba(250, 250, 250, 0.9);
  border: 1px solid rgba(255, 255, 255, 0.3);
  border-radius: 4px;
  outline: none;
  &:hover {
    cursor: pointer;
  }
  &:active {
    box-shadow: 1px 1px 0 rgb(0, 0, 0, 0.5);
    position: relative;
    top: 2px;
  }
`;

function MainPage() {
  const [movies, setMovies] = useState([]);
  const [moviesCopy, setMoviesCopy] = useState(movies.concat());
  const [filterFlags, setFilterFlags] = useState(
    //home, popular, latest, genre
    [true, false, false, false]
  );
  // mainMovieImage : 0번째 인덱스의 배열
  const [mainMovieImage, setMainMovieImage] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [page, setPage] = useState(0);

  // 최초 브라우저 redering되었을 때 실행
  useEffect(() => {
    const response = `${API_URL}movie/popular?api_key=${API_KEY}&language=en-US&page=1`;
    movieCall(response);
  }, []);

  const movieCall = (response) => {
    fetch(response)
      .then((response) => response.json())
      .then((response) => {
        console.log(response);
        // 메인Image가 초기에는 null
        setMainMovieImage(mainMovieImage || response.results[0]);
        // 기존 배열 얕은 복사 후 movies에 세팅
        setMovies([...movies, ...response.results]);
        // 페이지 셋팅
        setPage(response.page);
      });
  };
  useEffect(() => {
    setMoviesCopy(movies.concat());
    filterFlags.forEach((f, i) => {
      if (f) {
        filter(i);
      }
    });
  }, [movies]);

  const onClick = () => {
    // 페이지 1추가하여 api 쿼리 생성
    const response = `${API_URL}movie/popular?api_key=${API_KEY}&language=en-US&page=${
      page + 1
    }`;

    // movieCall 호출
    movieCall(response);
  };

  const filter = useCallback((id) => {
    const nextMovies = moviesCopy.concat();
    if (id === "0") {
      //home
      reset();
    } else if (id === "1") {
      //popular
      setMoviesCopy(
        nextMovies.sort((a, b) => (a.popularity > b.popularity ? -1 : 1))
      );
    } else if (id === "2") {
      //new=
      setMoviesCopy(
        nextMovies.sort((a, b) =>
          new Date(a.release_date) > new Date(b.release_date) ? -1 : 1
        )
      );
    } else if (id === "3") {
      //genre
    }
  });

  const reset = () => {
    setMoviesCopy(movies.concat());
  };

  return (
    <MainPageBlock>
      <Header
        setFilterFlags={setFilterFlags}
        filter={filter}
        movies={movies}
        moviesCopy={moviesCopy}
        setMoviesCopy={setMoviesCopy}
        reset={reset}
      />
      {/* Main Image */}
      {/* image는 url을 갖고있음 */}
      {mainMovieImage && (
        <MainImage
          image={`${IMAGE_URL}w1280${mainMovieImage.backdrop_path}`}
          title={mainMovieImage.original_title}
          overview={mainMovieImage.overview}
        />
      )}
      <MovieCardBlock>
        {/* 추후 여기에 장르를 넣기 */}
        <h2 className="genre">최신 영화 입니다</h2>
        {/* Movie Grid Cards */}
        {/* <Row gutter={[16, 16]}> */}
        <MovieCardBody>
          {moviesCopy &&
            moviesCopy.map((movie, index) => (
              <div key={index}>
                <GridCards
                  posterpath={
                    movie.poster_path
                      ? `${IMAGE_URL}w500${movie.poster_path}`
                      : null
                  }
                  id={movie.id}
                  originaltitle={movie.original_title}
                  //
                  //modal에 전달해줄 props 받아오기
                  releaseDate={movie.release_date}
                  overView={movie.overview}
                  voteAverage={movie.vote_average}
                  modalPosterPath={
                    movie.poster_path
                      ? `${IMAGE_URL}original${movie.poster_path}`
                      : null
                  }
                  //
                />
              </div>
            ))}
        </MovieCardBody>

        {/* </Row> */}
      </MovieCardBlock>
      {/* TODO : 버튼 위치 조정 */}
      <ButtonBlock>
        <Button onClick={onClick}>더보기</Button>
      </ButtonBlock>
    </MainPageBlock>
  );
}

export default MainPage;