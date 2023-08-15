import styled from "styled-components";

export const Section = styled.section`
  width: 100%;
  max-width: 90rem;
  padding: 2rem;

  display: flex;
  justify-content: center;
  flex-direction: column;

  @media ${({ theme }) => theme.DEVICE.laptop} {
    align-items: center;
    padding: 7rem 2.5rem;
  }
`;
