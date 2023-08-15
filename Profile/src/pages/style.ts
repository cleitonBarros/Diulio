import styled, { keyframes } from "styled-components";
import gift from "../assets/gift2.png";
import back1 from "../assets/background/back.jpg";
import back2 from "../assets/background/back2.jpg";
import back4 from "../assets/background/back4.jpg";
import back5 from "../assets/background/back5.jpg";

const UpDown = keyframes`
100% {
    transform:  translateY(calc(15vh - 100px));
}
`;
export const treme = keyframes`

  0% { transform: rotate(0deg); }
  25% { transform: rotate(5deg); }
  50% { transform: rotate(0deg); }
  75% { transform: rotate(-5deg); }
  100% { transform: rotate(0deg); }

`;
export const bounceIn = keyframes`
  0% {
    opacity: 0;
    transform: scale(.3);
  }
  50% {
    opacity: 1;
    transform: scale(1.05);
  }
  70% { transform: scale(.9); }
  100% { transform: scale(1); }
`;
export const Banner = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 100%;
  height: 100vh !important;
  position: relative;
  overflow: hidden;
  background-position: 50% 50%;
  background-repeat: no-repeat;
  background-attachment: fixed;
  background-size: cover;
  -webkit-background-size: cover;
  -moz-background-clip-size: cover;

  &.paralax-1 {
    background-image: url(${back1});
  }
  &.paralax-2 {
    background-image: url(${back2});
  }
  &.paralax-3 {
    background-image: url(${back4});
  }
  &.paralax-5 {
    background-image: url(${back5});
  }

  .text {
    position: relative;
    text-align: center;

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
  display: block;
  margin: 0 auto;
  padding: 0 1.5rem;
  @media ${({ theme }) => theme.DEVICE.tablet} {
    padding: 1rem 1.5rem 0;
  }
  @media ${({ theme }) => theme.DEVICE.laptop} {
    padding: 0 5rem;
  }
`;
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
    justify-content: center;
    align-items: center;
  }
  span {
    position: absolute;
    top: 5px;
    right: 20px;
    font-size: 50px;
    font-weight: bolder;
    z-index: 1000;
    cursor: pointer;
    color: #111;
    user-select: none;
  }
  .model {
    width: 34rem;
    height: 15rem;
    border-radius: 1rem;
  }
  @media ${({ theme }) => theme.DEVICE.tablet} {
    span {
      color: #fff;
    }
  }
`;
export const PopUpImg = styled.div`
  height: 100vh;
  overflow-y: hidden;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 1000;
  background-color: rgba(0, 0, 0, 0.8);
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: flex-start;
  align-items: flex-start;
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
  @media ${({ theme }) => theme.DEVICE.mobile} {
    img {
      top: 15%;
    }
  }
  @media ${({ theme }) => theme.DEVICE.laptop} {
    img {
      top: 6%;
      max-height: 90%;
    }
  }
`;
export const Modal = styled.div`
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
    justify-content: center;
    align-items: center;
  }
  span {
    position: absolute;
    top: 5px;
    right: 20px;
    font-size: 50px;
    font-weight: bolder;
    z-index: 1000;
    cursor: pointer;
    color: #111;
    user-select: none;
  }
  .model {
    width: 34rem;
    height: 15rem;
    border-radius: 1rem;
  }
  @media ${({ theme }) => theme.DEVICE.tablet} {
    span {
      color: #fff;
    }
  }
`;
export const Biography = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  gap: 3rem;
  .profileImg {
    width: 100%;
    height: auto;
  }
  .text {
    width: 100%;
    max-height: 80%;
    display: flex;
    align-items: start;
    flex-direction: column;

    h2 {
      color: #000;
      font-size: 2.25rem;
      font-weight: 700;
      line-height: normal;
      text-transform: uppercase;
    }
    p {
      color: #000;
      font-size: 1.25rem;
      font-weight: 400;
      line-height: normal;
    }
  }
  @media ${({ theme }) => theme.DEVICE.mobile} {
    .profileImg {
      width: 80%;
    }
  }
  @media ${({ theme }) => theme.DEVICE.laptop} {
    flex-direction: row;
    .text {
      justify-content: center;
    }
  }
`;
export const galery = styled.div`
  max-width: 90rem;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  gap: 2rem;
  img.view {
    width: 100%;
    height: 100%;
    transition: all 1s;
  }

  @media ${({ theme }) => theme.DEVICE.tablet} {
    img.view {
      width: 70%;
      height: 70%;
    }
  }
  @media ${({ theme }) => theme.DEVICE.desktop} {
    img.view {
      width: 50%;
      height: 50%;
    }
    /* display: grid;
    grid-template-areas:
      "F-01 F-01 F-01 F-01"
      "F-02 F-02 F-02 F-03"
      "F-04 F-04 F-04 F-04"
      "F-05 F-05 F-06 F-06"; */
  }
  /* #F-01 {
    grid-area: F-01;
  }
  #F-02 {
    grid-area: F-02;
  }
  #F-03 {
    grid-area: F-03;
  }
  #F-04 {
    grid-area: F-04;
  }
  #F-05 {
    grid-area: F-05;
  }
  #F-06 {
    grid-area: F-06;
  } */
`;
export const Card = styled.div`
  max-width: 90rem;
  width: 100%;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 3rem;

  .card {
    padding: 0.5rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;

    img {
      width: clamp(15rem, 80vw, 100%);
      height: 100%;
    }
    .body {
      margin-top: 2rem;
      gap: 1rem;
      display: flex;
      flex-direction: column;
      gap: 1rem;
      width: clamp(15rem, 80vw, 100%);

      .title {
        font-size: 1.4rem;
        font-weight: 600;
      }

      .text {
        width: 100%;
        min-height: 16rem;
        display: none;
        padding: 1rem 0;
        p {
        }
      }
    }
  }

  @media ${({ theme }) => theme.DEVICE.mobile} {
    .card {
      .body {
        .text {
          display: block;
        }
      }
    }
  }
  @media ${({ theme }) => theme.DEVICE.tablet} {
    flex-direction: row;
    .card {
      .body {
        .text {
          display: block;
        }
      }
    }
  }
`;
