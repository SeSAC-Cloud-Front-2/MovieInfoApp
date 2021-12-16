import { useState } from "react";
import "./App.css";

import MovieModal from "./modal/MovieModal";

function App() {
  const [isOpen, setOpen] = useState(false);
  function handleClick() {
    setOpen(true);
  }
  return (
    <div className="App">
      <button onClick={handleClick}>모달 열기</button>
      <MovieModal isOpen={isOpen} />
    </div>
  );
}

export default App;
