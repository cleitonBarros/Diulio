import styled from "styled-components";

export const Container = styled.a`
  display: flex;
  align-items: center;
  justify-content: center;
  padding:1rem 1.4rem;
  color: #000;
  font-size: .9rem;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
  outline: none;
  border: none;
  background-color: #a6d12a;
  cursor: pointer;
  transition: all 0.5s;

  &:hover{
    filter: brightness(1.05);
    background-color: #A7d71f;
  }
`;
