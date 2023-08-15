import { styled } from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: auto;
  min-height: 400px;
  color: #84bd00;
  font-size: 1rem;
  font-weight: 600;
  border-radius: 2rem;
  @media (max-width: 769px) {
    padding: 2rem 0;
  }
`;
export const Nav = styled.ul`
  width: 60%;
  margin: 0 auto 2rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  border: 1px solid #84bd00;
  border-radius: 2rem;
  padding-left: 0px;
  @media (max-width: 768px) {
    width: 90%;
  }

  li {
    width: 80%;
    padding: 1rem;
    list-style: none;
    text-align: center;
    cursor: pointer;
    transition: all 0.7s;

    &:first-child {
      border-bottom-left-radius: 2rem;
      border-top-left-radius: 2rem;
    }
    &:last-child {
      border-bottom-right-radius: 2rem;
      border-top-right-radius: 2rem;
    }
    &:hover {
      background: #84bd00;
      color: #fff;
    }
    &.active {
      background: #84bd00;
      color: #fff;
      svg {
        fill: #fff;
      }
    }
  }
  @media (max-width: 768px) {
    width: 90%;
  }
  @media (max-width: 550px) {
    li {
      padding: 0.125rem;
    }
  }
`;
export const Outlet = styled.div`
  width: 100%;
  height: auto;
  display: flex;
  align-items: center;
  justify-content: center;

  > .TabContent {
    width: 100%;
    max-width: 90rem;
  }
  img {
    width: 100%;
    height: auto;
  }
`;
