import { Slider } from "rsuite";
import { addStyle } from "rsuite/esm/DOMHelper";
import styled from "styled-components";

export const Container = styled.div`
    @import url('https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,200;0,400;0,600;0,700;1,500&display=swap');
`


export const BoxPrincipal = styled.div`
width: 100%;
height: 900px;
background-image: url(https://res.cloudinary.com/grupo-delsud/image/upload/v1656009739/DESARROLLOSGRUPODELSUD/PromoJunio/fondo_ls99i1.webp);
background-size: contain;
background-repeat: no-repeat;
@media (max-width: 480px) { 
  height: 65vh;
  background-size: cover;
  background-position: center;
    }
    @media (max-width: 767px) { 
      height: 65vh;
      background-size: cover;
      background-position: center;
     }
`
export const SubBox = styled.div`
width: 80%;
height: 900px;
margin: auto;
display: flex;
flex-direction: column;
justify-content: center;

@media (max-width: 480px) { 
      width: 90%;
      height: auto;
    }
    @media (max-width: 767px) { 
      width: 90%;
      height: auto;
     }
`
export const Box1 = styled.div`
width: 100%;
height: 350px;

@media (max-width: 480px) { 
  height: 30vh;
    }
    @media (max-width: 767px) { 
      height: 200px;
      margin-bottom: 30px;
     }
`
export const Box2 = styled.div`
width: 100%;
height: 550px;

@media (max-width: 480px) { 
  height: 60vh;
  width: 100%;
    }
    @media (max-width: 767px) { 
      height: 500px;
      width: 100%;
     }
`
export const Logo = styled.img`

`
export const Titulo = styled.h1`
color: white;
font-family:'Poppins';
font-size: 60px;
font-weight: 700;
text-shadow: 3px 1px 2px black;
line-height: 1.3em;

@media (max-width: 480px) { 
  font-size: 30px;
    }
    @media (max-width: 767px) { 
      font-size: 30px;
     }
`
export const SubTitulo = styled.p`
color: white;
font-family:'Poppins';
font-size: 30px;
font-weight: 500;
text-shadow: 3px 1px 2px black;
@media (max-width: 480px) { 
  font-size: 18px;
    }
    @media (max-width: 767px) { 
      font-size: 18px;
     }
`
export const ContenedorForm = styled.form`
width: 80%;
height: 100%;
margin: auto;
display: flex;
flex-direction: column;
justify-content: center;

background-color: #1D2142;
border-radius: 10px;

@media (max-width: 480px) { 
  width: 100%;
  height: 90%;
}
`
export const TituloForm = styled.h2`
color: white;
font-family:'Poppins';
font-size: 40px;
font-weight: 600;
text-align: center;

@media (max-width: 480px) { 
      font-size: 18px;
    }
    @media (max-width: 767px) { 
      font-size: 18px;
     }
`

export const ContenedorInputs = styled.div`
width: 35%;
display:flex;
flex-direction: column;
justify-content: center;

@media (max-width: 480px) { 
      width: 90%;
    }
    @media (max-width: 767px) { 
      width: 90%;
     }

`
export const LabelInputs = styled.p`
color: white;
font-family:'Poppins';
font-size: 20px;
font-weight: 600;

@media (max-width: 480px) { 
      font-size: 13px;
    }
    @media (max-width: 767px) { 
      font-size: 13px;
     }
`
export const InputForm  = styled.input`
height: 45px !important;
border-radius: 10px !important;
border: 0;
font-size: 18px;
font-family: 'Poppins';
text-indent: 10px;
text-align: center;

@media (max-width: 480px) { 
      font-size: 15px;
    }
    @media (max-width: 767px) { 
      font-size: 15px;
     }
`
export const ButtonForm = styled.button`
width: 25%;
height: 8vh;
font-size: 30px;
font-family: 'Poppins';
font-weight: 600;
color: white !important;
border: 0;
border-radius: 10px;
background-color: #759D01;


:disabled {
      background-color: #C4C4C4;
    }

    @media (max-width: 480px) { 
      width: 35%;
      height: 5vh;
      font-size: 14px;
    }
    @media (max-width: 767px) { 
      height: 5vh;
      font-size: 14px;
     }
`
export const SubContenedorForm = styled.div`
    width: 100%;
    height: 100px;
    display: flex;
    flex-direction: row;
    justify-content: space-around;

    @media (max-width: 480px) { 
      flex-direction: column;
      justify-content: space-around;
      align-items: center;
      height: 135px;
    }
    @media (max-width: 767px) { 
      flex-direction: column;
    justify-content: space-around;
    align-items: center;
    height: 135px;
     }
`
export const InputSelect = styled.select`
    height: 45px;
    border-radius: 10px;
    border: 0 !important;
    font-size: 14px;
    color: #000E4A;
    appearance: none;
    background-image: url(https://res.cloudinary.com/grupo-delsud/image/upload/v1655823583/ascascascasca_prxyc5.png);
    background-repeat: no-repeat;
    background-position-x: 95%;
    background-position-y: 17px;
    background-size: 7%;

option {
    color: #000E4A;
    font-family: Poppins;
    font-size: 18px;
    background: white;
    display: flex;
    white-space: pre;
    min-height: 20px;
    padding: 0px 2px 1px;
    text-align: center;
  }

  @media (max-width: 480px) { 
      font-size: 13px;
      text-align: center;
      option {
        font-size: 13px;
        text-align: center;
      }
    }
    @media (max-width: 767px) { 
      font-size: 13px;
      option {
        font-size: 13px;
      }
     }
`
export const ContenedorInputRange = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    width: 100%;
    height: 180px;
    align-items: center;

    
@media (max-width: 480px) { 
      height: 80px;
    }
    @media (max-width: 767px) { 
      height: 80px;
     }
`
export const InputRange = styled.input`
color: white;
font-family:'Poppins';
font-size: 20px;
font-weight: 600;
line-height: 0.5em;

`
export const BoxButton = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
    width: 100%;
    margin-top: -40px;
    @media (max-width: 480px) { 
      margin-top: -20px;
    }

`
export const BoxTitulo = styled.div`


@media (max-width: 480px) { 
      height: 40px;
    }
    @media (max-width: 767px) { 
      height: 40px;
     }
`
export const LabelInputRange = styled.label`
color: white;
font-size: 20px;
font-family: 'Poppins';
font-weight: 500;

@media (max-width: 480px) { 
      font-size: 14px;
    }
    @media (max-width: 767px) { 
      font-size: 14px;
     }
`
export const ContenedorNumeros = styled.div`
width: 90%;
display: flex;
flex-direction: row;
justify-content: space-between;
`
export const NumerosSlider = styled.span`
color: white;
font-size: 20px;
font-family: 'Poppins';
font-weight: 500;
@media (max-width: 480px) { 
      font-size: 10px;
    }
    @media (max-width: 767px) { 
      font-size: 10px;
     }

`
export const Errores  = styled.p`
color: white;
font-family: 'Poppins';
font-size: 15px;
`
export const BoxPrincipalModal = styled.div`
width: 100%;
display: flex;
    flex-direction: column;
    justify-content: center;

    /* @media (max-width: 480px) { 
      height: 60vh;
    }
    @media (max-width: 767px) { 
      height: 60vh;
     } */
`
export const BoxTituloModal = styled.div`
padding: 10px;
`
export const TituloModal = styled.h1`
color: #000E4A;
font-size: 50px;
font-family: 'Poppins';
line-height: 1.3em;
font-weight: 500;
text-align: center;
@media (max-width: 480px) { 
      font-size: 20px;
      line-height: 1.3em;
    }
    @media (max-width: 767px) { 
      font-size: 20px;
     }
`

export const ContenedorBoxsModal = styled.div`
    padding: 10px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;

    @media (max-width: 480px) { 
      padding: 0px;
    }
`
export const Box1Modal = styled.div`
width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: space-evenly;
    align-items: center;
    padding: 20px;

    @media (max-width: 480px) { 
      flex-direction: column;
      padding: 10px;
    }
    @media (max-width: 767px) { 
      flex-direction: column;
      padding: 10px;
     }
`
export const Box2Modal = styled.div`
width: 70%;
margin: auto;
align-items: center;
display: flex;
flex-direction: row;
justify-content: space-evenly;
padding: 20px;

@media (max-width: 480px) { 
  flex-direction: column;
  justify-content: center;
  width: 100%;
  padding: 0px;
    }
    @media (max-width: 767px) { 
      flex-direction: column;
      justify-content: center;
      width: 100%;
      padding: 0px;
     }
`
export const BoxButtonModal = styled.div`
  width: 80%;
  margin: auto;
  padding: 10px;
  align-items: center;
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  @media (max-width: 480px) { 
      width: 100%;
     }
`

export const SubtitulosModal = styled.p`
color: #000E4A;
font-size: 20px;
font-family: 'Poppins';
font-weight: 500;
text-align: center;

@media (max-width: 480px) { 
      font-size: 18px;
    }
    @media (max-width: 767px) { 
      font-size: 18px;
     }
`

export const BoxImagenDesarrolloModal = styled.div`
height: 140px;
width: 320px;
background-color: #1D2142;
border-radius: 10px;
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;

@media (max-width: 480px) { 
          height: 80px;
          width: 160px;
    }
    @media (max-width: 767px) { 
          width: 160px;
          width: 160px;
     }
`

export const ImagenDesarrolloModal = styled.img`
width: 70%;
height: auto;
background-position: center;
`

export const NumeroMonto = styled.p`
color: #000E4A;
font-size: 30px;
font-family: 'Poppins';
font-weight: 700;
text-align: center;
@media (max-width: 480px) { 
      font-size: 18px;
    }
    @media (max-width: 767px) { 
      font-size: 18px;
     }
`

export const Box3Modal= styled.div`
border: 2px #000E4A solid;
border-radius: 10px;
padding: 10px;

`
export const Box4Modal = styled.div`
@media (max-width: 480px) { 
      padding: 0;
    }
    @media (max-width: 767px) { 
      padding: 0;
     }

`
export const ButtonModal = styled.button`
background: white;
width: 25%;
height: 60px;
border: 2px solid #000E4A;
border-radius: 5px;
color: #000E4A;
font-size: 15px;
font-family: 'Poppins';
font-weight: 700;
@media (max-width: 480px) { 
      font-size: 10px;
      width: 50%;
    }
    @media (max-width: 767px) { 
      font-size: 10px;
      width: 50%;
     }
`

export const Parrafito = styled.p`
color:#C4C4C4;
font-size: 15px;
font-family: 'Poppins';
font-weight: 500;
text-align: center;
@media (max-width: 480px) { 
      font-size: 10px;
    }
    @media (max-width: 767px) { 
      font-size: 10px;
     }

` 
export const ButtonFormFalso = styled.input`
width: 25%;
height: 8vh;
font-size: 30px;
font-family: 'Poppins';
font-weight: 600;
color: white !important;
border: 0;
border-radius: 10px;
background-color: #759D01;
`

export const CajaLogo = styled.div`
display: flex;
flex-direction: row;
justify-content: flex-start;
margin-left: -23px;

@media (max-width: 480px) { 
  justify-content: center;
  margin: 0;
    }
    @media (max-width: 767px) { 
      justify-content: center;
      margin: 0;
     }

`