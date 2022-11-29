import styled from "styled-components";
import Header from "./Header";
import Footer from "./Footer";
import Perguntas from "./Perguntas";

export default function App() {
  return (    
  <ScreenContainer>
    <Header></Header>
    <Perguntas></Perguntas>
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


