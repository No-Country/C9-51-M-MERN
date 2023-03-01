import styled from 'styled-components'


const BotonHamburguesa = () => {
  return (


    <Hamburguesa>
    <div className="icon nav-icon-7">
        <span></span>
        <span></span>
        <span></span>
    </div>
    </Hamburguesa>
  )
}

export default BotonHamburguesa

const Hamburguesa = styled.div`
  .nav-icon-7{
    width: 30px;
    height: 25px;
    margin: 10px 10px;
    position: relative;
    cursor: pointer;
    display: inline-block;
    
  };
  .nav-icon-7 span{
    background-color:#FFF;
    position: absolute;
    border-radius: 2px;
    transition: .3s cubic-bezier(.8, .5, .2, 1.4);
    width:100%;
    height: 4px;
  };
  .nav-icon-7 span:nth-child(1){
    top:0px;
    left: 0px;
  };
  .nav-icon-7 span:nth-child(2){
    top:13px;
    left: 0px;
  };
  .nav-icon-7 span:nth-child(3){
    top:24px;
    left: 0px;
  };
  .nav-icon-7:not(.open):hover span:nth-child(1){
    transform: scaleX(.8);
  };
  .nav-icon-7:not(.open):hover span:nth-child(2){
    transform: scaleX(.5);
  };
  .nav-icon-7:not(.open):hover span:nth-child(3){
    transform: scaleX(.8);
  };
  .nav-icon-7.open span:nth-child(1){
    transform: rotate(90deg);
    top: 13PX;
  };
  .nav-icon-7.open span:nth-child(2){
    transform: scale(0);
    transition-duration: 50ms
  }
  .nav-icon-7.open span:nth-child(3){
    top: 13PX;
  };
  
  
  @media screen and (min-width: 768px) {
      display: none}
    `;  