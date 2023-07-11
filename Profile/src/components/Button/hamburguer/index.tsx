import * as S from "./style";
import { HTMLAttributes } from "react";

interface buttonprops extends HTMLAttributes<HTMLAnchorElement> {
  onClick?: (event: React.MouseEvent<HTMLElement>) => void;
  className: string;
}
export function Hamburguer({ onClick, className }: buttonprops) {
  return (

      <S.Container onClick={onClick} className={className}>
        <span className="um"></span>
        <span className="dois"></span>
        <span className="tres"></span>
      </S.Container>
  );
}
