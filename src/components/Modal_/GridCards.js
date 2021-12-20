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
  const handleModal = () => {
    setOpenModal(!openModal);
  };
  //
  return (
    <div>
      {/* a tag -> div tag */}
      <div className="id" onClick={handleModal}>
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
            handleModal={handleModal}
          />
        )}
      </div>
    </div>
  );
}
export default GridCards;
