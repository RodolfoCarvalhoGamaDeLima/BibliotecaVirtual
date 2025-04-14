import * as React from "react";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import Typography from "@mui/material/Typography";
import styled from "styled-components";
import { ImHeart } from "react-icons/im";


const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: "70%",
  maxWidth: 400,
  bgcolor: "background.paper",
  borderRadius: 2,
  boxShadow: 24,
  p: 3,
  outline: "none",
};

const LivroItem = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 12px;
  text-align: center;
  color: black;

  img {
    width: 100px;
    border-radius: 6px;
  }
`;

const ButtonDIV = styled.div`
  display: flex;
  justify-content: space-around;
  gap: 10px;
  margin-top: 15px;
`;

const ButtonFavorito = styled.button`
  padding: 8px 15px;
  background-color: #6a0daf;
  color: white;
  border: none;
  border-radius: 6px;
  cursor: pointer;
  transition: background-color 0.3s;
  font-weight: bold;

  &:hover {
    background-color: #b530fc;
  }
`;

const ButtonFechar = styled.button`
  padding: 8px 15px;
  background-color: #6a0daf;
  color: white;
  border: none;
  border-radius: 6px;
  cursor: pointer;
  transition: background-color 0.3s;
  font-weight: bold;

  &:hover {
    background-color: #b530fc;
  }
`;

const Sinopse = styled.p`
  font-size: 15px;
  text-align: justify;
`;



export default function ModalLivro({ Aberto, SetFechado, livro, insereFavorito }) {

  if (!livro) return null;

  return (
    <Modal
      open={Aberto}
      onClose={SetFechado}
      aria-labelledby="modal-livro-title"
      aria-describedby="modal-livro-description"
    >
      <Box sx={style}>
        <LivroItem>
          <img src={livro.imagem} alt={livro.nome} />
          <Typography variant="h6" id="modal-livro-title">
            {livro.nome}
          </Typography>
          <Typography variant="body2">
            <strong>Autor:</strong> {livro.autor}
          </Typography>
          <Sinopse>
            <strong>Sinopse:</strong> {livro.sinopse}
          </Sinopse>

          <ButtonDIV>
            <ButtonFavorito onClick={() => insereFavorito(livro.id)}>
              Favoritar <ImHeart style={{ marginLeft: 5 }} />
            </ButtonFavorito>
            <ButtonFechar onClick={SetFechado}>Fechar</ButtonFechar>
          </ButtonDIV>
        </LivroItem>
      </Box>
    </Modal>
  );
}
