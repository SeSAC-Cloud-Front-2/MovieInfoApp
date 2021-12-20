import React from "react";
import styled from "styled-components";
import { useState } from "react";
import Modal from "./Modal";
const MovieCardImg = styled.div`
  display: flex;
  justify-content: center;
  margin: 0 auto;
`;

//id, originaltitle 제거
function GridCards({ posterpath, movie, modalPosterPath }) {
  //modal on/off
  const [openModal, setOpenModal] = useState(false);
  const showModal = () => {
    setOpenModal(!openModal);
  };
  const closeModal = () => {
    setOpenModal(!openModal);
  };
  //
  return (
    <div>
      {/* a tag -> div tag */}
      <div className="id" href={`/movie/${movie.id}`} onClick={showModal}>
        <img
          className="image"
          style={{
            width: "90%",
            height: "320px",
          }}
          src={posterpath}
          alt={movie.original_title}
        />
        {openModal && (
          <Modal
            movie={movie}
            modalPosterImg={modalPosterPath}
            closeModal={closeModal}
          />
        )}
      </div>
    </div>
  );
}
export default GridCards;
