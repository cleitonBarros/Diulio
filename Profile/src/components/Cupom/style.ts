import styled from "styled-components";
import { bounceIn } from "../../pages/style";

export const Container = styled.div`
  position: relative;
  height: max(100%, 15rem);
  width: max(100%, 18rem);
  background-color: #7a9860;

  display: flex;
  align-items: center;
  justify-content: space-between;
  border-radius: 1rem;
  -webkit-box-shadow: 0px 12px 19px 4px rgba(0, 0, 0, 0.54);
  -moz-box-shadow: 0px 12px 19px 4px rgba(0, 0, 0, 0.54);
  box-shadow: 0px 12px 19px 4px rgba(0, 0, 0, 0.54);

  animation: ${bounceIn} 2s ease;

  &::before {
    position: absolute;
    top: 0;
    left: 0;
    color: black;
  }
  .left {
    padding: 1.5rem 0 1.5rem 2.4rem;
    width: 75%;
    height: 100%;
    font-family: "Montserrat";
    display: flex;
    align-items: flex-start;
    flex-direction: column;
    justify-content: space-between;
    color: white;
    text-transform: uppercase;

    h2,
    p {
      font-weight: 300;
      font-size: 0%.875;
      margin-bottom: 0;
    }
    h4 {
      font-size: 3.25rem;
      font-weight: 500;
      margin-bottom: 0;
    }
  }

  .right {
    background-color: white;
    padding: 2rem;
    width: 25%;
    height: 100%;
    display: flex;
    align-items: center;
    flex-direction: column;
    justify-content: center;
    color: #7a9860;
    border-left: 2px dotted black;
    text-transform: uppercase;
    border-bottom-right-radius: 1rem;
    border-top-right-radius: 1rem;

    .content {
      transform: rotate(270deg);
      text-align: center;
      width: 150px;
      h3 {
        margin-bottom: 0;

        font-size: 2rem;
      }
      p {
        font-size: 0.675rem;
        margin-bottom: 0;
      }
    }
  }

  @media (min-width: 620px) {
    width: max(100%, 34rem);
    .left {
      h2,
      p {
        font-size: 1rem;
      }
      h4 {
        font-size: 6.25rem;
        font-weight: 600;
      }
    }
  }
`;
