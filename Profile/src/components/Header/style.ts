import styled from "styled-components";

export const container = styled.header`
  position: fixed;
  left: 0;
  margin: 0.5rem;
  width: 3rem;
  height: 3rem;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;

  background-color: #000000;
  box-shadow: 0px 4px 19px 0px rgba(0, 0, 0, 0.5);
  z-index: 10;

  transition: all 0.6s;

  @media ${({ theme }) => theme.DEVICE.laptop} {
    margin: 0;
    width: 100%;
    border-radius: 0;
    padding: 0 3rem;
    height: 6rem;
  }
`;
export const Nav = styled.nav`
  display: none;

  @media ${({ theme }) => theme.DEVICE.laptop} {
    width: min(100%, 90rem);
    display: flex;
    justify-content: center;
    align-items: center;

    ul {
      display: flex;
      justify-content: center;
      align-items: center;
      gap: 2rem;
    }
    a {
      color: #f9f9f9;
      font-size: 1rem;
      font-style: normal;
      font-weight: 600;
      line-height: normal;
      text-transform: uppercase;
      transition: letter-spacing 0.2s ease-in-out;

      &:hover {
        color: #84bd00;
        letter-spacing: 0.5px;
      }
    }
  }
`;

export const Mobile = styled.div`
  position: fixed;
  margin: 0.5rem;
  background-color: #a7d71f;
  top: 10px;
  left: 0;
  width: 3rem;
  height: 0rem;
  z-index: -10;
  border-radius: 3rem;

  display: flex;
  justify-content: center;
  align-items: center;

  transition: all 0.2s ease;
  z-index: 1;

  &.open {
    height: 25rem;
  }
  ul {
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;

    align-items: center;
    a {
      position: fixed;
      left: 15px;
      color: #000;
      transition: all 0.5s ease;

      &:hover {
        transform: scale(1.1);
      }
    }
  }
  @media ${({ theme }) => theme.DEVICE.laptop} {
    display: none;
    visibility: hidden;
    opacity: 0;
  }
`;
