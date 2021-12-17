import { useMemo, useState } from "react";
import "./App.css";
import MainPage from "./components/MainPage";
import NavBar from "./NavBar";

const App = () => {
  return (
    <>
      <header></header>
      <section className="mainArticles">
        <article className="cards">
          <MainPage></MainPage>
        </article>
      </section>
    </>
  );
};

export default App;
