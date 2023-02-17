import styled from 'styled-components'

const ButtonRegistrate = () => {
  return (
    <StyledButton>Registrate</StyledButton>
  )
}

export default ButtonRegistrate

const StyledButton = styled.button`
background: rgb(239, 132, 86);
text-transform: uppercase;
letter-spacing: 0.2rem;
width: 45%;
height: 5rem;
border: none;
color: rgb(251,243,232);
border-radius: 2rem;
font-family: var(--text-font);
box-shadow: 0 3px 5px 0 rgba(31, 38, 135, 0.37);
cursor: pointer;


@media screen and (min-width: 1200px){
  width: 30%;
}
`