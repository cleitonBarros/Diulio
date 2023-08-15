import * as S from "./style";
import { HTMLAttributes } from "react";

interface buttonprops extends HTMLAttributes<HTMLAnchorElement> {
  onClick?: (event: React.MouseEvent<HTMLElement>) => void;
  title?: string;
  href?: string;
}
export function Button({ onClick, href, title }: buttonprops) {
  return (
    <S.Container target="_blank" href={href} onClick={onClick}>
      {title}
    </S.Container>
  );
}
