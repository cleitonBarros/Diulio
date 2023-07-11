import { useContext, useEffect, useState } from "react";
import { Hamburguer } from "../Button/hamburguer";
import * as S from "./style";
import { ThemeContext } from "../../context/useContext";
import {
  Camera,
  House,
  IdentificationCard,
  Images,
  Phone,
  Tag
} from "@phosphor-icons/react";
import { UseWindowSize } from "../../hooks/useWidthSize";

export function Header() {
  const [width] = UseWindowSize();
  const UseContext = useContext(ThemeContext);

  useEffect(() => {
    const close = () => {
      UseContext?.setClose(false);
    };
    if (width >= 1130) {
      window.addEventListener("resize", close);
    }
  }, [width]);


  return (
    <>
      <S.container>
        <S.Nav>
          <ul>
            <li>
              <a href="#">Inicio</a>
            </li>
            <li>
              <a href="#">Sobre</a>
            </li>
            <li>
              <a href="#">Serviços</a>
            </li>
            <li>
              <a href="#">Galeria</a>
            </li>
            <li>
              <a href="#">Promoção</a>
            </li>
            <li>
              <a href="#">contato</a>
            </li>
          </ul>
        </S.Nav>
        <Hamburguer
          onClick={UseContext?.showSideBar}
          className={UseContext?.open ? "open" : ""}
        />
      </S.container>
      <S.Mobile className={UseContext?.open ? "open" : ""}>
        <ul>
          <li>
            <a href="#">
              <House size={32} />
            </a>
          </li>
          <li>
            <a href="#">
              <IdentificationCard size={32} />
            </a>
          </li>
          <li>
            <a href="#">
              <Camera size={32} />
            </a>
          </li>
          <li>
            <a href="#">
              <Images size={32} />
            </a>
          </li>
          <li>
            <a href="#">
              <Tag size={32} />
            </a>
          </li>
          <li>
            <a href="#">
              <Phone size={32} />
            </a>
          </li>
        </ul>
      </S.Mobile>
    </>
  );
}
