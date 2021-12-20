import React from "react";
import styled from "styled-components";
import Modal from "./Modal";
import { useState } from "react";
const MovieCardImg = styled.div`
  display: flex;
  justify-content: center;
  margin: 0 auto;
`;

// modal에 전달해 줄 props
function GridCards({
  posterpath,
  // id,
  // originaltitle,
  //
  //modal
  modalPosterPath,
  movie,
}) {
  //modal on/off state
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
      {/* onclick 시 modal on   a -> div로 바꿨음 링크를 가기전에 
      모달을 출력해서 링크로 가면 사라짐
      */}
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
        {/* modal에 전달  */}
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

///props를 전달받을 수 있게 하는게 좋을듯
///a태그로 이동 후
