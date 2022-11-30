import styled from "styled-components";
import errada from "../assets/img/icone_erro.png";
import quase from "../assets/img/icone_quase.png";
import certa from "../assets/img/icone_certo.png";
import party from "../assets/img/party.png";
import sad from "../assets/img/sad.png";

export default function Footer({ respondido }) {
  return (
    <FooterConcluidos data-test="footer">
      <Resultado respondido={respondido}></Resultado>
      {respondido.length}/8 Concluídos
      <ContainerBotoes>
        {respondido.map((e) =>
          e.resposta === "certa" ? (
            <img
              data-test="zap-icon"
              key={e.id}
              src={certa}
              alt="icone certo"
            />
          ) : e.resposta === "quase" ? (
            <img
              data-test="partial-icon"
              key={e.id}
              src={quase}
              alt="icone quase"
            />
          ) : (
            <img
              data-test="no-icon"
              key={e.id}
              src={errada}
              alt="icone errada"
            />
          )
        )}
      </ContainerBotoes>
    </FooterConcluidos>
  );
}

function Resultado(props) {
  // check se todas as respostas estao certas
  const todasRespondidas = props.respondido.length === 8;
  const todasCertas = props.respondido.every((e) => e.resposta === "certa");

  // se todas estao certas
  if (todasRespondidas) {
    if (todasCertas) {
      return (
        <ContainerCongratulacoes data-test="finish-text">
          <span>
            <img src={party} alt="sad"></img>
            Parabéns!
          </span>
          <p>Você não esqueceu de nenhum flashcard!</p>
        </ContainerCongratulacoes>
      );
    } else {
      return (
        <ContainerCongratulacoes data-test="finish-text">
          <span>
            <img src={sad} alt="sad"></img>
            Putz...
          </span>
          <p>Ainda faltam alguns... Mas não desanime!</p>
        </ContainerCongratulacoes>
      );
    }
  }
}

const FooterConcluidos = styled.div`
  width: 100%;
  min-height: 50px;
  background-color: #ffffff;
  position: fixed;
  bottom: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  font-family: "Recursive";
  font-weight: 400;
  font-size: 18px;
  color: #333333;
  padding: 10px;
  gap: 10px;
 
  
`;

const ContainerBotoes = styled.div`
  display: flex;
  width: 80%;
  gap: 5px;
  justify-content: center;
  
  img {
    width: 23px;
  }
`;

const ContainerCongratulacoes = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 15px;

  img{
    box-sizing: border-box;
    padding-right: 13px;
  }
  `