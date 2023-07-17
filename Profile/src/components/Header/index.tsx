import { useContext, useEffect } from "react";
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
              <a href="#Inicio">Inicio</a>
            </li>
            <li>
              <a href="#Bio">Sobre</a>
            </li>
            <li>
              <a href="#Service">Serviços</a>
            </li>
            <li>
              <a href="#Gallery">Galeria</a>
            </li>
            <li>
              <a href="#Field">Promoção</a>
            </li>
            <li>
              <a href="#Contact">contato</a>
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
            <a href="#Inicio">
              <House size={32} />
            </a>
          </li>
          <li>
            <a href="#Bio">
              <IdentificationCard size={32} />
            </a>
          </li>
          <li>
            <a href="#Service">
              <Camera size={32} />
            </a>
          </li>
          <li>
            <a href="#Gallery">
              <Images size={32} />
            </a>
          </li>
          <li>
            <a href="#Field">
              <Tag size={32} />
            </a>
          </li>
          <li>
            <a href="#Contact">
              <Phone size={32} />
            </a>
          </li>
        </ul>
      </S.Mobile>
    </>
  );
}
