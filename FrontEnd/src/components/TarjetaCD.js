import styled from "styled-components";
import Search from "../assets/images/lupa.png";
import Checked from "../assets/images/checked.png"
import Header from "./Header";
import { Link } from "react-router-dom";

const TarjetaCD = () => {
  return (
    <>
      <Header />
      <CardContainer>
        <Purchase>
         <Confirmed src={Checked}/>
         <Title>¡Listo! Tu compra ha sido confirmada</Title>
         <Description>
         El proceso de pago fue exitoso. Te enviaremos el ticket electrónico y todos los detalles de envío a la casilla de mail ingresada. 
         </Description>
        </Purchase>
        <Shipment>
          <Searcher src={Search}/>
          <Title> Seguí el estado de tu envío </Title>
          <Description>
            Podés hacer un seguimiento del estado de tu envío en el link que te enviaremos al mail.<br />
         Número de compra: 1888996 - 554  </Description>
        </Shipment>
        <Link to="/" style={{textDecoration: "none"}}>
        <ButtonWrapper>
          <ButtonStart>Volver al inicio</ButtonStart>
        </ButtonWrapper>
        </Link>
      </CardContainer>
      </>
  );
}

export default TarjetaCD

const ButtonStart = styled.button`
  background: #e16913;
  border: none;
  border-radius: 10px;
  color: #fff;
  font-family: "Poppins";
  font-size: 24px;
  font-style: normal;
  font-weight: 300;
  height: 49px;
  margin-top: 15px;
  width: 200px;
`;

const ButtonWrapper = styled.div`
  display: flex;
  justify-content: center;
`;

const CardContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  height: auto;
  margin: 30px 40px 60px;
  
  @media (max-width: 500px) {
    margin: 30px 15px 0;
    width: auto;
  }
`;

const Confirmed = styled.img`
  border-radius: 1px;
  margin: 30px 0 0 35px;
  position: absolute;
  width: 50px;

  @media (max-width: 500px) {
    margin-left: 20px;
    margin-top: 26px;
    width: 50px;
  }
`;

const Description = styled.p`
  color: #ffffff;
  font-family: "Poppins";
  font-style: normal;
  font-weight: 400;
  font-size: 20px;
  margin: 20px 0 0 40px;

  @media (max-width: 500px) {
    margin-left: 20px;
    margin-top: 30px;
    padding: 0 5px;
    }
`;

const Purchase = styled.div`
  background: #2e6b38;
  border-radius: 10px;
  height: 248px;
  padding: 8px 0 0 0;
  
  @media (max-width: 500px) {
    height: 320px;
  }

  @media (max-width: 800px) {
    height: 360px;
  }
`;

const Searcher = styled.img`
  border-radius: 1px;
  margin: 35px 0 0 35px;
  position: absolute;
  width: 50px;

  @media (max-width: 500px) {
    margin-left: 20px;
    margin-top: 26px;
    width: 55px;
  }
`;

const Shipment = styled.div`
  background: #181818;
  border-radius: 10px;
  height: 266px;
  padding: 8px 0 0 0;

  @media (max-width: 320px) {
    height: 360px;
  }

  @media (max-width: 500px) {
    height: 320px;
  }

  @media (max-width: 800px) {
    height: 360px;
  }
`;

const Title = styled.p`
  color: #ffffff;
  font-family: "Poppins";
  font-style: normal;
  font-weight: 600;
  font-size: 32px;
  height: 48px;
  margin: 30px 0 0 100px;
  width: 100%;

  @media (max-width: 500px) {
    font-size: 24px;
    line-height: 26px;
    margin-top: 20px;
    margin-left: 80px;
    padding-right: 15px;
    width: auto;
  }

  @media (max-width: 800px) {
    margin-bottom: 40px;
    line-height: 30px;
    width: auto;
  }
`;
