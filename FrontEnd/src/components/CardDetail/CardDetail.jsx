import React from "react";
import styled from "styled-components";

function CardDetail() {
  return (
    <>
      <ImgContainer>
        <ImgOne>
          <img src="https://picsum.photos/id/237/200/300" alt="" />
        </ImgOne>
        <ImgTwo>
          <img src="https://picsum.photos/id/238/200/300" alt="" />
        </ImgTwo>
        <ImgThree>
          <img src="https://picsum.photos/id/239/200/300" alt="" />
        </ImgThree>
        <DetailDiv>
          <DetailTitle>Alga Spirulina - 60 capsulas x 500mg</DetailTitle>
          <DetailPrice>$1650</DetailPrice>
          <DetailCount>en 6x $350</DetailCount>
          <DetailPagos>Ver todos los medios de pagos</DetailPagos>
          <DetailDescription>Sabor: Espirulina</DetailDescription>
          <DetailTotal>
            Cantidad: <span>(4 disponibles)</span>{" "}
          </DetailTotal>
          <DetailButton>
            <DetailBuy>Comprar</DetailBuy>
            <DetailAdd>Agregar al carrito</DetailAdd>
          </DetailButton>
        </DetailDiv>
        <DetailTextContainer>
          <h2>Conoce todos sus componentes y beneficios:</h2>
          <h3>Spirulina</h3>
          <p>
            La espirulina es un una micro alga azul verdosa que se destaca por
            su valor nutritivo ya que es una importante fuente de proteínas,
            vitaminas y minerales. Además, contiene un gran porcentaje de fibra
            que aumenta su tamaño en el interior del cuerpo, lo que brinda la
            sensación de haber comido mas que lo que realmente ingerimos.
          </p>
          <h3>Garcinia Cambogia</h3>
          <p>
            El acido hidroxicitrico (HCA) extraído de la corteza del fruto de la
            Garnicia cambogia ayuda a reducir la transformación de hidratos de
            carbono en grasa, mediante la inhibición de la enzima ATP-citrato
            liasa. Diferentes estudios comprueban que la Garcinia ayuda a
            reducir la acumulación de grasa abdominal.
          </p>
          <h3>Café Verde</h3>
          <p>
            El extracto de café verde, obtenido a partir de los granos de café
            que no han sido tostados, contiene un importante antioxidante
            denominado acido clorogénico. Este compuesto ha demostrado en
            estudios científicos que ayuda a disminuir el Índice de Masa
            Corporal (IMC) y la grasa corporal a través de la regulación del
            metabolismo de la glucosa.
          </p>
        </DetailTextContainer>
      </ImgContainer>
    </>
  );
}

export default CardDetail;

const ImgContainer = styled.div`
  margin-top: 110px;
  margin-left: auto;
  margin-right: auto;
  max-width: 1200px;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: repeat(2, 1fr);
  grid-column-gap: 10px;
  grid-row-gap: 10px;
  place-content: center;

  /* Movil */
  @media only screen and (max-width: 600px) {
    grid-template-columns: 1fr;
    grid-template-rows: repeat(2, 1fr);
    grid-column-gap: 0px;
    grid-row-gap: 0px;
  }

  /* Tablet */
  @media only screen and (min-width: 601px) and (max-width: 992px) {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-template-rows: repeat(1, 1fr);
    grid-column-gap: 10px;
    grid-row-gap: 20px;
    margin-left: auto;
    margin-right: auto;
    margin: 52px;
  }
`;

const ImgOne = styled.div`
  border-radius: 10px;
  height: 440px;
  box-shadow: 4px 4px 4px rgba(0, 0, 0, 0.25);
  grid-area: 1 / 1 / 3 / 2;

  img {
    object-fit: cover;
    width: 100%;
    height: 100%;
  }

  /* Movil */
  @media only screen and (max-width: 600px) {
    grid-area: 1 / 1 / 2 / 2;
    margin: 25px;
  }

  /* Tablet */
  @media only screen and (min-width: 601px) and (max-width: 992px) {
    grid-area: 1 / 1 / 2 / 3;
    
    height: 400px;
    border-radius: 10px;
    
  }
`;

const ImgTwo = styled.div`
  border-radius: 10px;
  box-shadow: 4px 4px 4px rgba(0, 0, 0, 0.25);
  height: 210px;
  max-width: 340px;
  grid-area: 1 / 2 / 2 / 3;

  img {
    object-fit: cover;
    width: 100%;
    height: 100%;
  }
  /* Movil */
  @media only screen and (max-width: 600px) {
    display: none;
  }
  /* Tablet */
  @media only screen and (min-width: 601px) and (max-width: 992px) {
    grid-area: 2 / 1 / 3 / 2;
    width: 183px;
    height: 136px;
    margin: auto;
  }
`;

const ImgThree = styled.div`
  border-radius: 10px;
  box-shadow: 4px 4px 4px rgba(0, 0, 0, 0.25);
  height: 210px;
  max-width: 340px;
  grid-area: 2 / 2 / 3 / 3;

  img {
    object-fit: cover;
    width: 100%;
    height: 100%;
  }
  @media only screen and (max-width: 600px) {
    display: none;
  }

  /* Tablet */
  @media only screen and (min-width: 601px) and (max-width: 992px) {
    grid-area: 2 / 2 / 3 / 3;
    width: 183px;
    height: 136px;
    margin: auto;
  }
`;

const DetailDiv = styled.div`
  grid-area: 1 / 3 / 3 / 4;
  max-width: 310px;
  height: 440px;
  box-shadow: 4px 4px 4px rgba(0, 0, 0, 0.25);


  /* Movil */
  @media only screen and (max-width: 600px) {
    grid-area: 2 / 1 / 3 / 2;
    margin: auto;
    width: auto;
    box-shadow: none;
  }

  /* Tablet */
  @media only screen and (min-width: 601px) and (max-width: 992px) {
    grid-area: 1 / 3 / 2 / 4;
    
    height: 400px;
    border-radius: 10px;
  }
`;

const DetailTitle = styled.h2`
  font-family: Poppins;
  font-size: 24px;
  font-weight: 400px;
  margin-top: 24px;
  margin-left: 19px;

  /* Tablet */
  @media only screen and (min-width: 601px) and (max-width: 992px) {
    font-size: 20px;
    line-height: 30px;
  }
`;

const DetailPrice = styled.p`
  font-family: Poppins;
  font-size: 36px;
  margin-left: 19px;
  margin-top: 24px;
  font-weight: 300px;

  /* Tablet */
  @media only screen and (min-width: 601px) and (max-width: 992px) {
    font-size: 30px;
    margin-top: 13px;
    line-height: 45px;
  }
`;

const DetailCount = styled.p`
  font-family: Poppins;
  font-size: 20px;
  margin-top: 10px;
  font-weight: 300px;
  margin-left: 19px;

  /* Tablet */
  @media only screen and (min-width: 601px) and (max-width: 992px) {
    font-size: 16px;
    line-height: 45px;
    margin-top: 0px;
    line-height: 24px;
  }
`;

const DetailPagos = styled.p`
  font-family: Poppins;
  font-size: 14px;
  margin-top: 8px;
  margin-left: 19px;
  font-weight: 300px;

  /* Tablet */
  @media only screen and (min-width: 601px) and (max-width: 992px) {
    font-size: 12px;
    margin-top: 8px;
    line-height: 18px;
  }
`;

const DetailDescription = styled.p`
  font-family: Poppins;
  font-size: 16px;
  margin-top: 32px;
  margin-left: 19px;
  font-weight: 300px;

  /* Tablet */
  @media only screen and (min-width: 601px) and (max-width: 992px) {
    font-size: 12px;
    margin-top: 21px;
    line-height: 18px;
  }
`;

const DetailTotal = styled.p`
  font-family: Poppins;
  font-size: 16px;
  margin-top: 28px;
  margin-left: 19px;
  font-weight: 300px;
  color: #000000;

  span {
    color: #747474;
  }

  /* Tablet */
  @media only screen and (min-width: 601px) and (max-width: 992px) {
    font-size: 12px;
    margin-top: 10px;
    line-height: 18px;
  }
`;

const DetailButton = styled.div`
  margin-top: 24px;
  /* Tablet */
  @media only screen and (min-width: 601px) and (max-width: 992px) {
    display: flex;
    align-items: center;
    flex-direction: column-reverse;
    margin-top: -8px;
  }
`;

const DetailBuy = styled.button`
  font-family: Poppins;
  width: 99px;
  height: 36px;
  border-radius: 5px;
  border: none;
  /* margin-right: 12px; */
  margin-left: 19px;
  background: #d9d9d9;
  font-size: 16px;
  font-weight: 300px;
  cursor: pointer;

  /* Tablet */
  @media only screen and (min-width: 601px) and (max-width: 992px) {
    width: 162px;
    margin: auto;
  }
`;

const DetailAdd = styled.button`
  font-family: Poppins;
  width: 162px;
  height: 36px;
  border-radius: 5px;
  border: none;
  cursor: pointer;
  margin: 12px;
  background: #e16913;
  font-size: 16px;
  font-weight: 300px;
  color: white;
  cursor: pointer;

  /* Tablet */
  @media only screen and (min-width: 601px) and (max-width: 992px) {
  }
`;

const DetailTextContainer = styled.div`
  grid-area: 3 / 1 / 4 / 3;
  margin-top: 80px;
  margin-bottom: 20px;
  font-family: 'Poppins';

  h2 {
    font-family: 'Poppins';
    font-size: 24px;
    font-weight: 300px;
  }
  h3 {
    font-family: Poppins;
    margin-top: 15px;
    font-size: 24px;
    font-weight: 300px;
  }

  p {
    font-family: Poppins;
    margin-top: 15px;
    font-size: 24px;
    font-weight: 300px;
  }
  /* Movil */
  @media only screen and (max-width: 600px) {
    display: none;
  }

  /* Tablet */
  @media only screen and (min-width: 601px) and (max-width: 992px) {
    grid-area: 3 / 1 / 4 / 3;
    margin-left: 12px;
  }
`;
