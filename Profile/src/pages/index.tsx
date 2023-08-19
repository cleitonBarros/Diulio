import * as S from "./style";
import { ArrowCircleDown } from "@phosphor-icons/react";
import { useState } from "react";
import { Container } from "../components/HTMLElement/container/style";
import { Section } from "../components/HTMLElement/section/styles";
import { Cupom } from "../components/Cupom";
import { BioPhoto } from "../assets";
import Confetti from "react-confetti";
import { UseWindowSize } from "../hooks/useWidthSize";
// import edit from "../assets/edit.jpg";
// import studio from "../assets/studio.jpg";
import { Tabs } from "../components/Tab";
import { useContext } from "react";
import { ImageContext } from "../context/useContext";

import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
// import { Button } from "../components/Button/default";

export function Main() {
  const { file, model, setModel } = useContext(ImageContext);
  const [open, setClose] = useState<boolean>(false);

  function statusModal() {
    setClose(!open);
  }
  const [width, height] = UseWindowSize();

  return (
    <>
      <S.Banner className="paralax-1" id="Inicio">
        <div className="text">
          <h1>Diulio</h1>
          <p>Serviço de fotografia e edição de imagem</p>
          <a href="#Bio">
            <ArrowCircleDown color="white" weight="thin" size={82} />
          </a>
        </div>
      </S.Banner>

      <Container>
        <S.Container>
          <Section id="Bio">
            <S.Biography>
              <div className="profileImg">
                <Carousel
                  autoPlay
                  infiniteLoop
                  showThumbs={false}
                  emulateTouch
                  swipeable
                  statusFormatter={() => ""}
                >
                  {BioPhoto.map((photo) => {
                    return (
                      <div key={photo.id}>
                        <img src={photo.url} alt={photo.alt} />
                      </div>
                    );
                  })}
                </Carousel>
              </div>
              <div className="text">
                <h2>Sobre mim </h2>
                <p>
                  Olá, meu nome é Diulio, sou fotógrafo e gastrônomo. Estou
                  focado em fotografia publicitária, mas estou aberto a outras
                  oportunidades. Sou atencioso aos detalhes e acredito que os
                  pequenos detalhes podem fazer muita diferença. Uma boa foto
                  pode diferenciar você de seus concorrentes.
                </p>
                <p>
                  Tenho experiência em fotografia de alimentos, fotografia de
                  produtos (publicitária) e fotografia de natureza. Também sou
                  apaixonado por cozinhar e experimentar novos sabores. Estou
                  sempre procurando novas maneiras de combinar minha fotografia
                  e minha paixão para criar imagens únicas e envolventes.
                </p>
                <p>
                  Se você está procurando alguém que possa capturar a beleza de
                  seu produto, entre em contato comigo hoje mesmo! Estou ansioso
                  para saber mais sobre o seu projeto e ajudá-lo a criar imagens
                  que irão encantar seus clientes.
                </p>
              </div>
            </S.Biography>
          </Section>
        </S.Container>
      </Container>
      <S.Banner className="paralax-2"></S.Banner>

      {/* <Container>
        <S.Container>
          <Section id="Service">
            <S.Card>
              <div className="card">
                <img src={studio} />
                <div className="body">
                  <div className="title">Fotografia</div>
                  <div className="text">
                    <p>
                      Minha câmera principal é a Canon EOS SL3, acompanhada da
                      versátil Sony Nex F3 como câmera secundária. Conto com uma
                      variedade de lentes, como a Canon 18-55mm, 50mm, 24mm e
                      70-300mm, além da lente Samyang 8mm para composições
                      criativas. Quanto à iluminação, confio nos flashes Godox
                      TT685C e Meike MK320, com controle através do rádio Godox
                      X2Tc. Para efeitos especiais, utilizo o softbox Godox
                      60x60cm e a sombrinha translúcida de 80cm.
                    </p>
                  </div>
                  <Button href="#Contact" title="Saiba mais" />
                </div>
              </div>
              <div className="card">
                <img src={edit} />
                <div className="body">
                  <div className="title">Edição</div>
                  <div className="text">
                    <p>
                      Como editor de imagens profissional, utilizo ferramentas
                      como Adobe Lightroom, Adobe Photoshop e Google Snapseed
                      para aprimorar fotos com precisão e qualidade. Sou membro
                      da Adobe Creative Cloud, o que me proporciona acesso a
                      recursos exclusivos e amplia minha criatividade. Além
                      disso, conto com o Canon Digital Photo Professionals 4
                      para otimizar meu fluxo de trabalho com equipamentos da
                      Canon. Para toques especiais, utilizo o Iluminar 4.
                    </p>
                  </div>
                  <Button href="#Contact" title="Saiba mais" />
                </div>
              </div>
            </S.Card>
          </Section>
        </S.Container>
      </Container> */}

      <Container>
        <S.Container>
          <Section id="Gallery">
            <S.galery>
              <Tabs />
            </S.galery>
          </Section>
        </S.Container>
      </Container>

      <S.Banner className="paralax-3"></S.Banner>

      <S.Gift onClick={statusModal} className="gift"></S.Gift>
      <S.PopUp onClick={statusModal} className={open ? "show" : ""}>
        <span onClick={statusModal}>&times;</span>
        <div className="model">
          <Confetti
            numberOfPieces={500}
            width={width}
            height={height}
            initialVelocityY={1000}
          />
          <Cupom />
        </div>
      </S.PopUp>
      <S.PopUpImg
        onClick={() => setModel(!model)}
        style={{ display: model ? "block" : "none" }}
      >
        <div>
          <span onClick={() => setModel(!model)}>&times;</span>
          <Carousel
            autoPlay
            infiniteLoop
            showThumbs={false}
            emulateTouch
            swipeable
            statusFormatter={() => ""}
          ></Carousel>
          <img src={file?.url} alt={file?.alt} />
        </div>
      </S.PopUpImg>
    </>
  );
}
