import styled from "styled-components";

export const Container = styled.button`
  width: 15rem;
  height: 3.5rem;
  color: #000;
  font-size: 1.2rem;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
  outline: none;
  border: none;
  background-color: #a6d12a;
  cursor: pointer;
  transition: all 0.5s;

  &:hover {
    transform: scale(1.05);
    background-color: #A7d71f;
  }

  @media ${({ theme }) => theme.DEVICE.laptop} {
  }
`;
