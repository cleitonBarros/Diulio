import { styled } from "styled-components";

export const Container = styled.div`
  padding: 2rem 0;

  .slick-slide > div {
   padding: 0 0.875rem;
  }
  .slick-prev:before,
  .slick-next:before {
    color: #84bd00;
  }
  .slick-dots li.slick-active button:before {
    color: #84bd00;
  }
  .slick-dots li button:before {
    color: #fff;
    font-size: 1rem;
    top: 2rem;
  }
`;

export const Box = styled.div`

  height: 300px;
  cursor: pointer;
  transition: all 0.5s ease-in-out;

  &:hover {
    filter: brightness(1.2);
  }

  @media ${({ theme }) => theme.DEVICE.laptop} {
   height: 600px;
  }
`;
