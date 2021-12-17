import React from 'react';
import styled from 'styled-components';

const MovieCardImg = styled.div`
    display: flex;
    justify-content: center;
    margin: 0 auto;
`;

function GridCards({ posterpath, id, originaltitle }) {
    return (
        // 한컬럼에 24size 6*4 xs: 한컬럼이 모든 사이즈를 차지하게
        // <Col lg={6} md={8} xs={24}>
        // <div style={{ position: 'relative' }}>
        <div>
            <a className="id" href={`/movie/${id}`}>
                <img
                    className="image"
                    style={{
                        width: '90%',
                        height: '320px',
                        // margin: '10px 10px',
                    }}
                    src={posterpath}
                    alt={originaltitle}
                />
            </a>
        </div>
    );
}
export default GridCards;
