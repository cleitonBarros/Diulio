import styled from "styled-components";
import QrCode from "../../assets/QR-code.png";

export const container = styled.footer`
  width: 100%;

  display: flex;
  justify-content: center;
  align-items: center;

  background-color: #e4e4e4;
`;
export const Footer = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  gap: 1.5rem;

  width: 90rem;
  height: 21.875rem;

  padding: 0 1.5rem;
  > a {
    cursor: pointer;
    display: flex;
    justify-content: center;
    align-items: center;
    img {
      width: 75%;
      max-width: 100%;
      height: auto;
    }
  }

  .divider {
    width: 8.75rem;
    max-width: 11rem;
    height: 2px;

    background-color: #000;
  }
  p {
    text-align: center;
    font-size: 1rem;
    font-weight: 700;
    color: #000;
  }
  span {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 0.5rem;

    font-size: 1rem;
    font-weight: 400;
    color: #111;

    a {
      font-size: 1.05rem;
      font-weight: 700;
      color: #111;

      &:hover {
        color: #a7d71f;
      }
    }
  }
`;

export const Contact = styled.div`
  width: 100%;

  display: flex;
  align-items: center;
  justify-content: center;

  background: #f9f9f9;
`;
export const Content = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  gap: 2rem;
  width: 100%;
  max-width: 90rem;
  max-height: 100vh;
  padding: 5rem 4.7rem;

  img {
    width: 60%;
    max-width: 100%;
    height: auto;
  }

  .wpp,
  .Qr-code {
    position: relative;
    max-width: 25rem;
    height: 12rem;
  }
  .wpp {
    height: 15rem;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: flex-start;

  }
  .Qr-code {
    display: none;
    background-image: url(${QrCode});
    background-size: contain;
    background-repeat: no-repeat;
    background-position: center center;
  }

  h2 {
    color: #000;
    font-size: 2rem;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
  }
  p {
    color: #000;
    font-size: 1rem;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
  }
  @media ${({ theme }) => theme.DEVICE.laptop} {
  flex-direction: row;
  justify-content: space-between;
  .Qr-code {
    width: 25rem;
    display: block;
    height: 25rem;
    background-size: 12vw;
    background-size: cover;
  }
  h2 {
    font-size: 2.25rem;
  }
  p {
    font-size: 1.25rem;
  }
}
`;
