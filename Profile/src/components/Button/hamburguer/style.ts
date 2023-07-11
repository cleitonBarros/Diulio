import styled from "styled-components";

export const Container = styled.a`
  width: 50px;
  height: 50px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  gap: 0.475rem;
  cursor: pointer;
  position: relative;
  border-radius: 50%;
  padding: 0.675rem;

  span {
    width: 1.9rem;
    height: 3px;
    border-radius: 5px;
    background-color: #84bd00;
    transition: all .5s;
  }
  &.open .um {
    position: absolute;
    transform: rotate(135deg);
    top: 23px;
  }
  &.open .dois {
    position: absolute;
    transform: rotate(45deg);
    top: 23px;
  }
  &.open .tres{
    position: absolute;
    transform: rotate(135deg);
    top: 23px;
  }

  @media ${({ theme }) => theme.DEVICE.laptop} {
    display: none;
    visibility: hidden;
    opacity: 0;
  }
`;
