import styled from "styled-components";
import Pesquisa from "../componentes/pesquisa";
import CarouselRatio from "../componentes/carousel";



const AppContainer = styled.div`
  width: 100vw;
  height: 100vh;
  gap: 25px;
  display: flex;
  flex-direction: column;

  @media (max-width: 760px) {
        gap: 10px;
        width: 100vw;
  }
`;

const PesquisaContainer = styled.div `
  display:flex;
  align-items: center;
  justify-content:center;
  
  @media (max-width: 760px) {
        gap: 15px;
  }
  
`;

const CarouselContainer = styled.div`
  display: flex;
  justify-content: center;

`;



function MinhaEstante() {

  return (
    <AppContainer>
      <PesquisaContainer>
      <Pesquisa />
      </PesquisaContainer>
      <CarouselContainer>
        <CarouselRatio/>
      </CarouselContainer>
    </AppContainer>
  );
}

export default MinhaEstante;
