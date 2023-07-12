import styled from "styled-components";

export const Section = styled.section`
  width: 100%;
  max-width: 90rem;
  padding: 0 1.5rem;

  display: flex;
  justify-content: center;
  flex-direction: column;

  @media ${({ theme }) => theme.DEVICE.laptop} {
    align-items: center;
    padding: 6rem 2.5rem;
  }
`;
