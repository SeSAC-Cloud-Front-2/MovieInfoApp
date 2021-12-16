import React from "react";
import ReactModal from "react-modal";
const MovieModal = ({ isOpen }) => {
  return (
    //isOpen prop을 받아서 모달의 open/close를 컨트롤
    <ReactModal isOpen={isOpen}>
      <div>모달입니다</div>
    </ReactModal>
  );
};

export default MovieModal;
