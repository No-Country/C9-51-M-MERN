import React from "react";
import styled from "styled-components";

const Message = ({ msg, bgColor }) => {


  return ( 
    <ContainerMsg bgColor={bgColor}>
      <p>{msg}</p>
    </ContainerMsg>
  )
};

export default Message;

const ContainerMsg= styled.div`
    padding:1rem;
    margin-bottom:1rem;
    text-align:center;
    color:#fff;
    font-weight:bold;
    background-color: ${props => props.bgColor};
`