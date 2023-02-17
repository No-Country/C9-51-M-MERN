import styled from "styled-components"
import ImgHome from "../assets/images/ImgHome.webp"

const Home = () => {
  return (
    <HomeSection>
      <img src={ImgHome} alt="Img Home" />
    </HomeSection>
  )
}

export default Home


const HomeSection = styled.div`
  width: 100%;
  height: 100%;
  position: relative;
  top: 140px;
`;
