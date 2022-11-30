import styled from "styled-components";
import setaPlay from "../assets/img/seta_play.png";
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

  if (!perguntaAberta.includes(id)) {
    return (
      <PerguntaFechada perguntaAberta={perguntaAberta} id={id}>
        <p> Pergunta {id}</p>
        <input
          onClick={abrirPergunta}
          type="image"
          src={setaPlay}
          alt="setaPlay"
        />
      </PerguntaFechada>
    );
  } else if(!verResposta.includes(id)){
    return (
      <PerguntaAberta>
        <p> {question}</p>
        <img onClick={handleVerResposta} src={setaVirar}></img>
      </PerguntaAberta>
    );
  }
  else {
    return (
      <PerguntaAberta>
        <p> {answer}</p>
        <ContainerBotoes>
          <button>Não Lembrei!</button>
          <button> Quase não Lembrei</button>
          <button>Zap</button>
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

  p {
    font-family: "Recursive";
    font-style: normal;
    font-weight: 700;
    font-size: 16px;
    line-height: 19px;
    color: #333333;
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
