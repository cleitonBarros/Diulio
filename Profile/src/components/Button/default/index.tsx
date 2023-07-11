import * as S from "./style";
import { HTMLAttributes } from "react";

interface buttonprops extends HTMLAttributes<HTMLButtonElement> {
  onClick?: (event: React.MouseEvent<HTMLElement>) => void;
  className?: string;
  title?: string;
}
export function Button({ onClick, className, title }: buttonprops) {
  return (
    <S.Container onClick={onClick} className={className}>
      {title}
    </S.Container>
  );
}
