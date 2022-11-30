import styled from "styled-components";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Perguntas from "./components/Perguntas";
import { useState } from "react";

export default function App() {
  const [perguntaAberta, setperguntaAberta] = useState([]);
  const [verResposta, setverResposta] = useState([]);
  const [respondido, setrespondido] = useState([])
  console.log("perguntaAberta", perguntaAberta);
  console.log("verResposta", verResposta);
  console.log("respondido", respondido);

  return (
    <ScreenContainer>
      <Header></Header>
      <Perguntas
        perguntaAberta={perguntaAberta}
        setperguntaAberta={setperguntaAberta}
        verResposta={verResposta}
        setverResposta={setverResposta}
        respondido = {respondido}
        setrespondido = {setrespondido}>        

        </Perguntas>
      <Footer></Footer>
    </ScreenContainer>
  );
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
