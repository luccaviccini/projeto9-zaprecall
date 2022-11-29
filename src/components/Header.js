import styled from "styled-components";
import logoHeader from "../assets/img/logo.png";

export default function Header() {
  return (
    <HeaderContainer>
      <img src={logoHeader} alt="Header Logo"></img>
        <h1>ZapRecall</h1>
    </HeaderContainer>
  );
}

const HeaderContainer = styled.div`
  display: flex;
  align-items: center;
  margin: 40px 0 20px 0;

  img {
    width: 52px;
  }

  h1 {
    font-family: "Righteous";
    font-style: normal;
    font-weight: 400;
    font-size: 36px;
    line-height: 45px;
    color: #ffffff;
    margin-left: 20px;
  }
`;
