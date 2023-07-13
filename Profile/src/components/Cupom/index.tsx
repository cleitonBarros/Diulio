import * as S from "./style";

export function Cupom() {
  return (
    <S.Container>
      <div className="left">
        <h2>Desconto especial</h2>
        <h4>10%</h4>
        <p>Valido para o primeiro ensaio</p>
      </div>
      <div className="right">
        <div className="content">
          <h3>Cupom</h3>
          <p>Apenas um cupom valido por pessoa</p>
        </div>
      </div>
    </S.Container>
  );
}
