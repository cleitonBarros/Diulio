import { useContext, useEffect } from "react";
import { Link } from "react-scroll";
import { Hamburguer } from "../Button/hamburguer";
import * as S from "./style";
import { ThemeContext } from "../../context/useContext";
import {
  House,
  IdentificationCard,
  Images,
  Phone
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
              <Link to="Inicio"  smooth={true} spy={true} offset={-10} duration={100}>
                Inicio
              </Link>
            </li>
            <li>
              <Link to="Bio"  smooth={true} spy={true} offset={-10} duration={100}>
                Sobre
              </Link>
            </li>
            {/* <li>
              <Link to="Service"  smooth={true} spy={true} offset={-10} duration={100}>
                Serviços
              </Link>
            </li> */}
            <li>
              <Link to="Gallery"  smooth={true} spy={true} offset={-10} duration={100}>
                Galeria
              </Link>
            </li>
            <li>
              <Link to="Contact"  smooth={true} spy={true} offset={0} duration={100}>
                contato
              </Link>
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
          {/* <li>
            <a href="#Service">
              <Package size={32} />
            </a>
          </li> */}
          <li>
            <a href="#Gallery">
              <Images size={32} />
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
