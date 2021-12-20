import { createGlobalStyle } from 'styled-components';
import './App.css';
import MainPage from './components/MainPage';

const GlobalStyle = createGlobalStyle`
    body {
        background: #141414;
    }
`;

// 새로고침 시 scrollTop
window.onbeforeunload = function () {
    window.scrollTo({ top: 0 });
};

const App = () => {
    return (
        <>
            <GlobalStyle />
            <MainPage />
        </>
    );
};

export default App;
