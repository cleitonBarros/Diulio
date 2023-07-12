import * as S from "./style";
import backgroundImage from "../assets/backgroundImage.png";
import { ArrowCircleDown } from "@phosphor-icons/react";
import logo from "../assets/Logo.svg";
import { useState } from "react";
import { Container } from "../components/HTMLElement/container/style";
import { Section } from "../components/HTMLElement/section/styles";

export function Main() {
  const [open, setClose] = useState(false);

  function statusModal() {
    setClose(!open);
  }

  return (
    <>
      <S.Banner>
        <img src={backgroundImage} alt="" />

        <div className="text">
          <h1>Diulio</h1>
          <p>Serviço de fotografia e edição de imagem</p>
          <ArrowCircleDown color="white" weight="thin" size={82} />
        </div>
      </S.Banner>
      <Container>
        <S.Container>
          <Section></Section>
        </S.Container>
      </Container>

      <S.Gift onClick={statusModal} className="gift"></S.Gift>
      <S.PopUp onClick={statusModal} className={open ? "show" : ""}>
        <span onClick={statusModal}>&times;</span>
        <img src={logo} alt="" />
      </S.PopUp>
    </>
  );
}
