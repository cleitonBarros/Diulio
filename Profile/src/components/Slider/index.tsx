import * as S from "./style";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { slide } from "../../assets";

import { useContext } from "react";
import { ImageContext } from "../../context/useContext";

interface props {
  type?: string;
}
export function Carousel2({ type }: props) {
  const { setFile, setModel, model } = useContext(ImageContext);

  const abrirmodal = (imgs: any) => {
    setFile(imgs);
    setModel(!model);
  };

  var settings = {
    dots: true,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1130,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          initialSlide: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };
  return (
    <S.Container>
      <Slider {...settings}>
        {slide.map(
          (imgs) =>
            imgs.type === type && (
              <S.Box key={imgs.id}>
                <a>
                  <img
                    src={imgs.url}
                    alt={imgs.alt}
                    onClick={() => abrirmodal(imgs)}
                  />
                </a>
              </S.Box>
            )
        )}
      </Slider>
    </S.Container>
  );
}
