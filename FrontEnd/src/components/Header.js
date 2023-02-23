import styled from "styled-components";
import Logo from "../assets/images/nutrilboost.png";

const Header = () => {
  return (
    <HeaderWrap>
      <LogoHeader src={Logo} />
    </HeaderWrap>
  )
}

export default Header;

const HeaderWrap = styled.section`
  background: #181818;
  height: 96px;
`

const LogoHeader = styled.img`
  margin: 20px 0 0 60px;
 `

