import { useEffect, useState } from "react";
import styled from "styled-components";
import { GetFavoritos } from "../servicos/favoritos";

const FavoritosContainer = styled.div`
  display: flex;
  flex-direction: column;  
`;

const ResultadoContainer = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    overflow: auto;
    scroll-snap-type: x mandatory;
    gap: 35px;
`;

const Resultado = styled.div`
    display: flex;
    align-items: center;
    background-color:#6317EB;
    width: 300px;
    gap: 10px;
    cursor: pointer;
    text-align: center;
    padding: 10px 100px;
    border-radius: 16px;

    img {
        width: 100px;
    }
    &:hover {
        scale: 1.1;
    }

    @media (max-width: 760px) {
        width: 100px;
        gap: 15px;

        img {
        width: 65px;
    }

        &:hover {
        opacity: 0.35;
        scale:1;
    }

  }

`;

const Titulo = styled.h2`
     color: #7a7a7a;
     font-size: 36px;
     text-align: center;
     width: 100%;
     padding-top: 35px;
`;

const Nome = styled.h2`
     color: #FFF;
     font-size: 30px;
     text-align: center;

     @media (max-width: 760px) {
        width: 100px;
        gap: 15px;
        font-size: 12px;
  }
`;

function Favoritos() {
  const [favoritos, setFavoritos] = useState([]);
  async function fetchFavoritos() {
    try {
        const favoritosDaAPI = await GetFavoritos();
        console.log(favoritosDaAPI); // Verifique o que está sendo retornado
        setFavoritos(favoritosDaAPI);
    } catch (error) {
        console.error("Erro ao buscar favoritos:", error);
    }
}

  useEffect(() => {
    fetchFavoritos();
  });

  return (
    <FavoritosContainer>
    <ResultadoContainer>
      <Titulo>Livros favoritos:</Titulo>
      {favoritos.map(favorito => (
        <Resultado>
                  <img src={favorito.imagem} alt={favorito.nome} /> 
                  <Nome>{favorito.nome}</Nome>
        </Resultado>
      ))}
      </ResultadoContainer>
    </FavoritosContainer>
  );
}

export default Favoritos;
