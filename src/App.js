import styled from "styled-components";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Perguntas from "./components/Perguntas";
import logo from "./assets/img/logo.png";
import { useState } from "react";

import GlobalStyle from "./theme/GlobalStyles";

export default function App() {
  const [perguntaAberta, setperguntaAberta] = useState([]);
  const [verResposta, setverResposta] = useState([]);
  const [respondido, setrespondido] = useState([]);
  const [iniciar, setIniciar] = useState(false);
  console.log("perguntaAberta", perguntaAberta);
  console.log("verResposta", verResposta);
  console.log("respondido", respondido);

  if (iniciar) {
    return (
      <>
        <GlobalStyle />
        <ScreenContainer>
          <Header></Header>
          <Perguntas
            perguntaAberta={perguntaAberta}
            setperguntaAberta={setperguntaAberta}
            verResposta={verResposta}
            setverResposta={setverResposta}
            respondido={respondido}
            setrespondido={setrespondido}></Perguntas>
          <Footer respondido={respondido}></Footer>
        </ScreenContainer>
      </>
    );
  } else {
    return (
      <>
        <GlobalStyle />
        <TelaIniciarContainer>
          <img src={logo} alt="logo"></img>
          <h1>ZapRecall</h1>
          <button data-test="start-btn" onClick={setIniciar}>
            Iniciar Recall!
          </button>
        </TelaIniciarContainer>
      </>
    );
  }
}

const ScreenContainer = styled.div`
  background-color: #fb6b6b;
  width: 100vw;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 0px;
  padding: 0px;
  padding-bottom: 200px;
`;

const TelaIniciarContainer = styled.div`
  background-color: #fb6b6b;
  width: 100vw;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap:25px;

  h1 {
    font-family: "Righteous";
    font-style: normal;
    font-weight: 400;
    font-size: 36px;
    line-height: 45px;
    display: flex;
    align-items: center;
    text-align: center;
    letter-spacing: -0.012em;
    color: #ffffff;
  }

  button {
    width: 246px;
    height: 54px;
    background: #ffffff;
    border: 1px solid #d70900;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.15);
    border-radius: 5px;
    color: #d70900;
    font-family: "Recursive";
    font-style: normal;
    font-weight: 400;
    font-size: 18px;
    line-height: 22px;
    /* identical to box height */

    text-align: center;
  }

  button:hover {
    cursor: pointer;
    opacity: 0.9;
  }
`;

