import React from 'react'
import styled from 'styled-components';
import Logo from "../assets/images/nutrilboost.png";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <Wrapper>
      <FooterSection>
        <SectionMain>
          <LogoFooter src={Logo} />
          <Link
            to="/products"
            style={{ textDecoration: "none", color: "#fff" }}
          >
            <Item>Productos</Item>
          </Link>
          <Link to="/login" style={{ textDecoration: "none", color: "#fff" }}>
            <Item>Mi cuenta</Item>
          </Link>
          <Link to="/cart" style={{ textDecoration: "none", color: "#fff" }}>
            <Item>Carrito</Item>
          </Link>
        </SectionMain>

        <SectionContact>
          <ItemTitle>Contacto:</ItemTitle>
          <Item>info@nutrilboost.com</Item>
          <Item>11 de abril 90, Bahía Blanca</Item>
          <Item>+54 9 2964488652</Item>
        </SectionContact>

        <SectionFollow>
          <ItemTitle>Seguinos</ItemTitle>
          <Item>@nutrilboost</Item>
          <Item>/nutrilboost</Item>
        </SectionFollow>
      </FooterSection>
    </Wrapper>
  );
};

export default Footer;

const Wrapper = styled.section`
  background: #181818;
  height: 192px;
  display: flex;
  font-family: "Poppins";
  flex-direction: row;
  width: 100%;

  @media (max-width: 600px) {
    height: auto;
  }
`;

const Item = styled.p`
  font-family: "Poppins";
`;

const FooterSection = styled.section`
  width: 100%;
  display: flex;
  flex-direction: row;
  padding: 20px 40px;

  @media (max-width: 600px) {
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
    width: 100%;
    align-items: center;
  }
`;

const LogoFooter = styled.img`
  width: 100px;
`;

const SectionMain = styled.section`
  color: #ffffff;
  font-size: 14px;
  margin-left: 40px;
  width: 30%;

  @media (max-width: 600px) {
    margin: 0;
    text-align: center;
    width: 100%;
  }
`;

const SectionFollow = styled.section`
  color: #ffffff;
  font-size: 14px;
  width: 30%;

  @media (max-width: 600px) {
    text-align: center;
    width: 100%;
  }
`;

const SectionContact = styled.section`
  color: #ffffff;
  font-size: 14px;
  width: 30%;

  @media (max-width: 600px) {
    text-align: center;
    width: 100%;
  }
`;

const ItemTitle = styled.p`
  font-size: 20px;
`;