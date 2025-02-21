import React from "react";
import styled from "styled-components";
import { livros } from "../pesquisa/dadosPesquisa";

const ModalBackground = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
`;

const ModalContainer = styled.div`
  background: white;
  padding: 20px;
  border-radius: 8px;
  box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.1);
  width: 300px;
  text-align: center;
  color: black;
`;

const LivroItem = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  border-bottom: 1px solid #ddd;
  padding: 10px;
  img {
    width: 50px;
    margin-right: 10px;
  }
`;
const CloseButton = styled.button`
  margin-top: 10px;
  padding: 8px 15px;
  background-color: #e63f00;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  &:hover {
    background-color: #c23300;
  }
`;
const Sinopse = styled.p `
    font-size: 15px;
    text-align: justify;
`;
function Modal({ Aberto, SetFechado, livro }) {
    if (!Aberto) return null;
    if (!livros) return null; // Se livro for null, não exibe o modal


    return (
        <ModalBackground onClick={SetFechado}>
        <ModalContainer onClick={(e) => e.stopPropagation()}>
            <LivroItem>
                <img src={livro.src} alt={livro.nome} />
                <h3>{livro.nome}</h3>
                <p><strong>Autor:</strong> {livro.autor}</p>
                <Sinopse> <strong>Sinopse:</strong> {livro.sinopse} </Sinopse>
                <CloseButton onClick={SetFechado}>Fechar</CloseButton>
            </LivroItem>
        </ModalContainer>
    </ModalBackground>
);
  }
export default Modal