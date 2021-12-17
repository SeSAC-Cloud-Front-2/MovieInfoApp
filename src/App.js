import { useMemo, useState } from "react";
import "./App.css";
import MainPage from "./components/MainPage";
import NavBar from "./NavBar";

const GlobalStyle = createGlobalStyle`
    body {
        background: #141414;
    }
`;

const App = () => {
  return (
    <>
        <GlobalStyle />
        <MainPage />
    </>
  );
};

export default App;
