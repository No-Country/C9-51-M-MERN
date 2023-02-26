import styled from "styled-components";
import Header from "./Header";
import { Link } from "react-router-dom";


const CargaTarjeta = () => {
  return (
    <>
      <Header />
      <ContainerCard>
        <SectionForm>
          <FormField>
            <Title>Datos de la tarjeta</Title>
            <Label>Numero de la tarjeta</Label>
            <InputField placeholder="Ingresa el número de la tarjeta" />
            <Label>Titular de la tarjeta</Label>
            <InputField placeholder="Nombre completo como figura en la tarjeta" />
            <CardSecurity>
              <LabelSecurity>Vencimiento</LabelSecurity>
              <LabelSecurity>Cod. de seguridad</LabelSecurity>
              <InputSecurity placeholder="MM/AA" />
              <InputSecurity placeholder="3 dígitos" />
            </CardSecurity>
            <Label>Numero de documento</Label>
            <InputField placeholder="Como figura en el documento a presentar" />
            <Label>Sexo (como figura en el DNI)</Label>
          </FormField>
          <Gender>
            <InputCheck type="radio" name="genero" id="hombre" value="Hombre" />
            <LabelCheck for="hombre">Hombre</LabelCheck>
            <InputCheck type="radio" name="genero" id="mujer" value="Mujer" />
            <LabelCheck for="mujer">Mujer</LabelCheck>
          </Gender>
        </SectionForm>

        <SectionCard>
            <Card />
          <TextCard>
            <strong>Atención: </strong> 
            al pulsar en “Realizar compra”, se comenzará a procesar el
            pago y se aplicarán cargos en la tarjeta ingresada.
          </TextCard>
        </SectionCard>

        <SectionPurchase>
            <CardPurchase>
              <TitlePurchase>Alga Spirulina - 60 capsulas x 500mg</TitlePurchase>
              <PricePurchase>$1650</PricePurchase>
              <InstallmentsPurchase>en 6 x $340</InstallmentsPurchase>
              <TextPayPurcharse>Ver todos los medios de pago</TextPayPurcharse>
              <FlavorPurchase>Sabor: Espirulina</FlavorPurchase>
              <QuantityPurchase>Cantidad (4 disponibles)</QuantityPurchase>
              <Link to="/tarjetacd">
             <ButtonPurcharse>Realizar compra</ButtonPurcharse>
              </Link>
            </CardPurchase>
        </SectionPurchase>
      </ContainerCard>
    </>
  );
}

export default CargaTarjeta;

 const ContainerCard = styled.div`
   display: flex;
   justify-content: center;
   font-size: "Poppins";
   min-height: 100vh;
   width: 100%;
   /* background: gold; */
 `;

 const SectionCard = styled.section`
   /* background: green; */
   display: flex;
   flex-direction: column;
   height: auto;
   width: 25%;
 `;

 const Card = styled.img`
   background: #181818;
   border: none;
   border-radius: 10px;
   height: 180px;
   display: flex;
   flex-direction: column;
   margin-top: 80px;
   width: 90%;
 `;

 const TextCard = styled.p`
   /* background: red; */
   font-family: "Poppins";
   font-size: 14px;
   text-align: right;
   margin-top: 80px;
   width: 90%;
 `;

 const CardSecurity = styled.section`
   width: 480px;
 `;

 const LabelSecurity = styled.label`
   font-size: 16px;
   margin-bottom: 10px;
   margin-right: 10px;
   width: 45%;
 `;

 const InputSecurity = styled.input`
   width: 45%;
   border: none;
   border: 1px solid black;
   border-radius: 5px;
   font-size: 14px;
   font-style: italic;
   padding: 6px;
   margin-right: 10px;
 `;

 const SectionForm = styled.section`
   /* background: tomato; */
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
   width: 90%;
 `;

 const Label = styled.label`
   font-size: 16px;
   margin-left: 1px;
   width: 100%;
 `;

 const LabelCheck = styled.label`
   font-size: 16px;
   margin-left: 2px;
 `;

 const InputCheck = styled.input`
   border-radius: 50px;
   cursor: pointer;
   margin-left: 20px;
 `;

 const Gender = styled.section`
   margin-top: -15px;
 `;

 const SectionPurchase = styled.section`
   width: 25%;
   /* background: blue; */
   font-size: "Poppins";
 `;

 const CardPurchase = styled.figure`
   background: #ffffff;
   box-shadow: 4px 4px 4px rgba(0, 0, 0, 0.25);
   border-radius: 10px;
   cursor: pointer;
   display: flex;
   flex-direction: column;
   height: 320px;
   justify-content: space-between;
   margin: 40px;
   padding: 20px;
   width: 230px;
   /* background: pink; */
 `;

 const ButtonPurcharse = styled.button`
   background: #e16913;
   border-radius: 5px;
   border: none;
   box-shadow: 0 3px 3px 0 rgba(0, 0, 0, 0.2), 0 3px 3px 0 rgba(0, 0, 0, 0.19);
   color: #ffffff;
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