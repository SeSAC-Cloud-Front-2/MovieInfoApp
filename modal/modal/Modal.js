// import { IoClose } from "react-icons/io5";
import "./Modal.scss";
import Icons from "./Icons";

import { AiFillStar } from "react-icons/ai";
export default function Modal({
  modalPosterImg,
  key,
  title,
  releaseDate,
  overView,
  voteAverage,
  closeModal,
}) {
  return (
    //화면 blur 처리할 overlay
    <div className="modal_overlay" id="modal">
      {/* 실제 modal창 */}
      <div
        className="modal_window"
        id={key}
        onClick={(e) => e.stopPropagation()}
      >
        {/* closeBtn*/}
        <button className="close_btn" id="closeBtn" onClick={closeModal}>
          X
        </button>
        {/* 영화 포스터 */}
        <img className="poster_img" src={modalPosterImg}></img>
        {/* 영화 title*/}
        <div className="title" id={key}>
          <h3>{title}</h3>
        </div>
        <div className="movieInfo">
          {/* 영화 summary*/}
          <div className="content">
            <span className="summary">{overView}</span>
          </div>
        </div>
        <dl className="summaryInfo">
          {/* <dt>Genre</dt>
          <dd>{props.genre}</dd> */}
          <dt>ReleaseDate</dt>
          <dd>{releaseDate}</dd>
          <dt>Rating</dt>
          <dd>
            <AiFillStar className="star" />
            {voteAverage}
          </dd>
          {/* <dt>관객수</dt>
            <dd>{watched}</dd> */}
        </dl>
        {/* icons*/}
        <Icons />
      </div>
    </div>
  );
}
