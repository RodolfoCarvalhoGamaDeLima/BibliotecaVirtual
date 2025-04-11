import { useEffect, useState } from "react";
import styled from "styled-components";
import { GetFavoritos } from "../servicos/favoritos";

const FavoritosContainer = styled.div`
  display: flex;
  flex-direction: column;
  background-image: linear-gradient(90deg, #a612ea 35%, #6317eb 165%);
  
`;

const ResultadoContainer = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    overflow: auto;
    scroll-snap-type: x mandatory;
`;

const Resultado = styled.div`
    display: flex;
    align-items: center;
    width: 300px;
    gap:35px;
    margin: 20px 0;
    cursor: pointer;
    text-align: center;
    padding: 0 100px;
    p {
        width: 200px;
        color: #FFF;
    }
    img {
        width: 100px;
    }
    &:hover {
        border: 1px solid white;
    }
`;

const Titulo = styled.h2`
     color: #FFF;
     font-size: 36px;
     text-align: center;
     width: 100%;
     padding-top: 35px;
`;

const Nome = styled.h2`
     color: #FFF;
     font-size: 30px;
     text-align: center;

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
