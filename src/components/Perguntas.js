import styled from "styled-components";
import setaPlay from "../assets/img/seta_play.png";
export default function Perguntas() {

// array that has elements form 1 to 8
  const array = [...Array(8).keys()].map((x) => x + 1);


  return (
    <ul>
        {array.map((x) => <Pergunta  key={x} numero={x}></Pergunta>)}
    </ul>
  )
  ;
}

function Pergunta(props) {
  return (
    <PerguntaFechada>
      <p> Pergunta {props.numero}</p>
      <button onClick={() => console.log("Clicou na pergunta: ", props.numero)}><img src={setaPlay}></img></button>
    </PerguntaFechada>
  );
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
  font-family: 'Recursive';
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
