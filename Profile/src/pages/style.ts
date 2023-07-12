import styled, { keyframes } from "styled-components";
import gift from "../assets/gift2.png";

const UpDown = keyframes`
100% {
    transform:  translateY(calc(15vh - 100px));
}
`;
const treme = keyframes`

  0% { transform: rotate(0deg); }
  25% { transform: rotate(5deg); }
  50% { transform: rotate(0deg); }
  75% { transform: rotate(-5deg); }
  100% { transform: rotate(0deg); }

`;
export const Banner = styled.div`
  width: 100%;
  height: auto;
  position: relative;
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;

  img {
    width: 100%;
    height: auto;
  }

  .text {
    position: absolute;
    text-align: center;

    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 0.5rem;

    h1 {
      color: #ffffff;
      font-size: 3rem;
      font-weight: 200;
      line-height: normal;
    }
    p {
      display: none;
    }

    svg {
      animation: ${UpDown} 0.8s linear infinite alternate;
      cursor: pointer;
    }
  }
  @media ${({ theme }) => theme.DEVICE.laptop} {
    padding-top: 5rem;

    .text {
      gap: 2rem;

      h1 {
        font-size: 6rem;
      }
      p {
        display: block;
        color: #ffffff;
        font-size: 1.5rem;
        font-weight: 700;
        line-height: normal;
      }
    }
  }
`;
export const Container = styled.main`
  width: 100%;
  max-width: 90rem;
  min-height: 100vh;
  display: block;
  margin: 0 auto;
  padding: 0 1.5rem;
  
  @media ${({ theme }) => theme.DEVICE.laptop} {
    padding: 0 5rem;
  }
`
export const Gift = styled.div`
  width: 90px;
  height: 90px;
  background-image: url(${gift});
  background-repeat: no-repeat;
  background-position: center center;
  background-size: cover;
  position: fixed;
  bottom: 30px;
  right: 30px;
  animation: ${treme} 0.8s infinite;
  cursor: pointer;
  @media ${({ theme }) => theme.DEVICE.tablet} {
    width: 130px;
    height: 130px;
  }
`;
export const PopUp = styled.div`
  display: none;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 1000;
  width: 100%;
  height: 100%;
  justify-content: flex-start;
  align-items: flex-start;

  &.show {
    display: flex;
  }

  img {
    position: absolute;
    top: 25%;
    left: 50%;
    transform: translate(-50%);
    display: block;
    max-width: 90%;
    max-height: 70%;
    object-fit: contain;
    border: 3px solid white;
  }
  span {
    position: absolute;
    top: 5px;
    right: 20px;
    font-size: 50px;
    font-weight: bolder;
    z-index: 1000;
    cursor: pointer;
    color: #fff;
    user-select: none;
  }
`;
