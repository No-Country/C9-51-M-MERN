import React from 'react';
import styled from "styled-components";
import { Link } from "react-router-dom";

const Form = () => {
  return (
      <ContainerCard>
        <SectionForm>
          <FormField>
            <Title>Datos de envío</Title>
            <Label>Nombre completo</Label>
            <InputField/>
            <Label>Numero de documento</Label>
            <InputField/>
            <Label>Provincia</Label>
            <InputField/>
            <Label>Localidad</Label>
            <InputField/>
            <Label>Código postal</Label>
            <InputField/>
            <Label>Calle</Label>
            <InputField/>
            <CardSecurity>
              <LabelSecurity>Numero de vivienda</LabelSecurity>
              <LabelSecurity>Piso/Departamento</LabelSecurity>
              <InputSecurity  />
              <InputSecurity  />
            </CardSecurity>
          </FormField>
        </SectionForm>

        <SectionPurchase>
            <CardPurchase>
              <TitlePurchase>Alga Spirulina - 60 capsulas x 500mg</TitlePurchase>
              <PricePurchase>$1650</PricePurchase>
              <InstallmentsPurchase>en 6 x $340</InstallmentsPurchase>
              <TextPayPurcharse>Ver todos los medios de pago</TextPayPurcharse>
              <FlavorPurchase>Sabor: Espirulina</FlavorPurchase>
              <QuantityPurchase>Cantidad (4 disponibles)</QuantityPurchase>
              <Link to="/cargatarjeta">
             <ButtonPurcharse>Realizar compra</ButtonPurcharse>
              </Link>
            </CardPurchase>
        </SectionPurchase>
      </ContainerCard>
  )
}

export default Form;

const ContainerCard = styled.div`
   display: flex;
   justify-content: center;
   font-size: "Poppins";
   min-height: 100vh;
   width: 100%;
 `;

 const CardSecurity = styled.section`
   width: 380px;
 `;

 const LabelSecurity = styled.label`
   font-size: 16px;
   margin-right: 24px;
 `;

 const InputSecurity = styled.input`
   width: 40%;
   border: none;
   border: 1px solid black;
   border-radius: 5px;
   font-size: 14px;
   font-style: italic;
   padding: 6px;
   margin-right: 10px;
   margin-top: 10px;
 `;

 const SectionForm = styled.section`
   margin-left: 10px;
   width: 45%;
 `;

 const Title = styled.p`
   font-family: "Poppins";
   font-size: 32px;
   font-weight: 00;
 `;

 const FormField = styled.div`
   height: auto;
   display: flex;
   flex-direction: column;
   gap: 8px;
   padding: 20px;
   width: 75%;
 `;

 const InputField = styled.input`
   border: none;
   border: 1px solid black;
   border-radius: 5px;
   font-size: 14px;
   font-style: italic;
   padding: 6px;
   width: 65%;
 `;

 const Label = styled.label`
   font-size: 16px;
   margin-left: 1px;
   width: 100%;
 `;

 const SectionPurchase = styled.section`
   width: 25%;
   font-size: "Poppins";
 `;

 const CardPurchase = styled.figure`
   background: #ffffff;
   box-shadow: 4px 4px 4px rgba(0, 0, 0, 0.25);
   border-radius: 10px;
   display: flex;
   flex-direction: column;
   height: 320px;
   justify-content: space-between;
   margin: 40px;
   padding: 20px;
   width: 230px;
 `;

 const ButtonPurcharse = styled.button`
   background: #e16913;
   border-radius: 5px;
   border: none;
   box-shadow: 0 3px 3px 0 rgba(0, 0, 0, 0.2), 0 3px 3px 0 rgba(0, 0, 0, 0.19);
   color: #ffffff;
   cursor: pointer;
   font-family: "Poppins";
   font-style: normal;
   font-weight: 500;
   font-size: 16px;
   height: 30px;
   margin-left: 10%;
   width: 80%;

   &:hover {
     opacity: 0.8;
   }
 `;

 const TitlePurchase = styled.p`
   font-size: 20px;
   font-weight: 500;
 `;

 const PricePurchase = styled.p`
   font-size: 26px;
 `;

 const QuantityPurchase = styled.p`
   font-size: 16px;
 `;

 const FlavorPurchase = styled.p`
   font-size: 16px;
 `;

 const TextPayPurcharse = styled.p`
   font-size: 12px;
   margin-top: -10px;
 `;
 
 const InstallmentsPurchase = styled.p`
   font-size: 18px;
   font-weight: normal;
   margin-top: -20px;
 `;