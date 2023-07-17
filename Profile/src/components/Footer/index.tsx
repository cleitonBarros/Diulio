import * as S from "./style";
import logo from "../../assets/Logo.svg";
import flag from "../../assets/Emoji.svg";
import { Button } from "../Button/default";

export function Footer() {
  return (
    <>
      <S.Contact id="Contact">
        <S.Content>
          <div className="wpp">
            <h2>Me contate</h2>
            <p>
              Entre em contato comigo para fazer um orçamento ou para sanar
              algum duvida que apareceu
            </p>
            <Button title="entra em contato" />
          </div>
          <label htmlFor="img">
            <div id="img" className="Qr-code"></div>
          </label>
        </S.Content>
      </S.Contact>

      <S.container>
        <S.Footer>
          <a href="#">
            <img src={logo} alt="Logo do site" />
          </a>
          <div className="divider"></div>
          <p>Copyright ©2023 Diulio R. Silva- Todos os direitos reservados.</p>
          <span>
            Feito por <img src={flag} alt="bandiera lgbt" />
            <a
              href="https://github.com/cleitonBarros"
              target="_blank"
              rel="noreferrer"
            >
              Cleiton Barros
            </a>
          </span>
        </S.Footer>
      </S.container>
    </>
  );
}
