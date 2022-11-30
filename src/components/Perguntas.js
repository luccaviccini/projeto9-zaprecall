import styled from "styled-components";
import setaPlay from "../assets/img/seta_play.png";
import iconeErro from "../assets/img/icone_erro.png";
import iconeQuase from "../assets/img/icone_quase.png";
import iconeCerto from "../assets/img/icone_certo.png";
import { useState } from "react";
import setaVirar from "../assets/img/seta_virar.png";
import Deck from "./Deck";

export default function Perguntas(props) {
  return (
    <ul>
      {Deck.map((card) => (
        <Pergunta
          key={card.id}
          id={card.id}
          question={card.question}
          answer={card.answer}
          {...props}></Pergunta>
      ))}
    </ul>
  );
}

function Pergunta({
  id,
  question,
  answer,
  perguntaAberta,
  setperguntaAberta,
  verResposta,
  setverResposta,
  respondido,
  setrespondido,
}) {
  function abrirPergunta() {
    // checando se a pergunda já foi aberta
    perguntaAberta.includes(id)
      ? setperguntaAberta(
          perguntaAberta.filter((x) => x !== id) // se tiver o id tirar
        )
      : setperguntaAberta([...perguntaAberta, id]); // se nao tiver adicionar
  }

  function handleVerResposta() {
    // checando se a resposta já foi aberta
    verResposta.includes(id)
      ? setverResposta(verResposta.filter((x) => x !== id)) // se tiver o id tirar
      : setverResposta([...verResposta, id]); // se nao tiver adicionar
  }

  const [respondida, setRespondida] = useState(false);
  function handleRespondido(id, resposta) {
    // se ainda nao estiver respondida adicionar no arr respondido e seta 
    if (!respondido.some((x) => x.id === id)) {
      setrespondido([...respondido, { id, resposta }]);
      setRespondida(true);
    }
  }

  function checkResposta() {
    // checando o tipo de resposta
    if (respondido.some((x) => x.id === id && x.resposta === "erro")) {
      return { icone: iconeErro, color: "#FF3030" };
    } else if (respondido.some((x) => x.id === id && x.resposta === "quase")) {
      return { icone: iconeQuase, color: "#FF922E" };
    } else if (respondido.some((x) => x.id === id && x.resposta === "certa")) {
      return { icone: iconeCerto, color: "#2FBE34" };
    } else {
      return { icone: setaPlay, color: "#333333" };
    }
  }


  // returns dependendo da condição
  if (!perguntaAberta.includes(id) || respondida) {
    console.log(id);
    return (
      <PerguntaFechada
        perguntaAberta={perguntaAberta}
        id={id}
        respondida={respondida}
        respondido={respondido}
        checkResposta = {checkResposta}>
        <p> Pergunta {id}</p>
        <input
          onClick={abrirPergunta}
          type="image"
          src={checkResposta().icone}
          alt="setaPlay"
        />
      </PerguntaFechada>
    );
  } else if (!verResposta.includes(id)) {
    return (
      <PerguntaAberta>
        <p> {question}</p>
        <img
          onClick={handleVerResposta}
          src={setaVirar}
          alt="botaoSetaVirar"></img>
      </PerguntaAberta>
    );
  } else {
    return (
      <PerguntaAberta>
        <p> {answer}</p>
        <ContainerBotoes>
          <button onClick={() => handleRespondido(id, "erro")}>
            Não Lembrei!
          </button>
          <button onClick={() => handleRespondido(id, "quase")}>
            {" "}
            Quase não Lembrei
          </button>
          <button onClick={() => handleRespondido(id, "certa")}>Zap</button>
        </ContainerBotoes>
      </PerguntaAberta>
    );
  }
}

const PerguntaFechada = styled.li`
  width: 300px;
  height: 35px;
  background-color: #ffffff;
  margin: 12px;
  padding: 15px;
  box-shadow: 0px 4px 5px rgba(0, 0, 0, 0.15);
  border-radius: 5px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  text-decoration: ${(props) => (props.respondida ? "line-through" : "none")};
  color: ${(props) =>props.checkResposta().color};

  p {
    font-family: "Recursive";
    font-style: normal;
    font-weight: 700;
    font-size: 16px;
    line-height: 19px;
  }

  img {
    width: 20px;
    
  }

  button {
    background-color: transparent;
    border: none;
    cursor: pointer;
  }
`;

const PerguntaAberta = styled.li`
  width: 300px;
  margin: 12px;
  padding: 15px;
  min-height: 100px;
  background: #ffffd5;
  box-shadow: 0px 4px 5px rgba(0, 0, 0, 0.15);
  border-radius: 5px;
  font-family: "Recursive";
  font-style: normal;
  font-weight: 400;
  font-size: 18px;
  line-height: 22px;
  color: #333333;
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  img {
    position: absolute;
    bottom: 10px;
    right: 10px;
  }

  img:hover {
    cursor: pointer;
  }
`;

const ContainerBotoes = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;

  button {
    width: 90px;
    font-family: "Recursive", "sans-serif";
    font-style: normal;
    font-weight: 400;
    font-size: 13px;
    line-height: 14px;
    display: flex;
    align-items: center;
    justify-content: center;
    text-align: center;
    color: #ffffff;
    background: #ff3030;
    border-radius: 5px;
    border: none;
    padding: 5px;
  }

  button:nth-child(2) {
    background: #ff922e;
  }

  button:nth-child(3) {
    background: #2fbe34;
  }

  button:hover {
    opacity: 0.8;
    cursor: pointer;
  }
`;
