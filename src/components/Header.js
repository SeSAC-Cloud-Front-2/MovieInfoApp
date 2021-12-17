import React, { useState } from 'react';
import styled from 'styled-components';
import { API_KEY } from './api';
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
function Header({ movieCall }) {
    const [state, setState] = useState({
        home: '',
        popular: '',
        latest: '',
        genre: '',
    });
    let { home, popular, latest, genre } = state;
    let vari = {}
    const response = `https://api.themoviedb.org/${vari}?api_key=${API_KEY}&language=en-US&page=1`;
    return (
        <HeaderBlock>
            <H2>
                {/* https://api.themoviedb.org/3/movie/popular?api_key={API_KEY} */}
                <a
                    onClick={() => {
                        setState({
                            ...state,
                            home: '3/movie/popular',
                        });
                    }}
                >
                    홈
                </a>
            </H2>
            <H2>
                {/* https://api.themoviedb.org/3/movie/popular?api_key={API_KEY} */}
                <a
                    onClick={() => {
                        setState({
                            ...state,
                            popular: '3/movie/popular',
                        });
                    }}
                >
                    인기
                </a>
            </H2>
            <H2>
                {/* queryString: 3/movie/latest */}
                {/* https://api.themoviedb.org/3/movie/latest?api_key={API_KEY} */}
                <a
                    onClick={() => {
                        setState({
                            ...state,
                            latest: '3/movie/latest',
                        });
                    }}
                >
                    최신
                </a>
            </H2>
            <H2>
                {/* https://api.themoviedb.org/3/genre/movie/list?api_key={API_KEY} */}
                <a
                    onClick={() => {
                        setState({
                            ...state,
                            genre: '3/genre/movie/list',
                        });
                    }}
                >
                    장르
                </a>
            </H2>
            <form>
                <input type="text" />
                <button>검색</button>
            </form>
        </HeaderBlock>
    );
    console.log(home);
}

export default Header;
