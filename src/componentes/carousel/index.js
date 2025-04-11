import * as React from 'react';
import AspectRatio from '@mui/joy/AspectRatio';
import Typography from '@mui/joy/Typography';
import Card from '@mui/joy/Card';
import Box from '@mui/joy/Box';
import { useEffect, useState } from "react";
import styled, { keyframes } from 'styled-components';

const slide = keyframes`
  0% {
    transform: translateX(0);
  }
  100% {
    transform: translateX(-50%);
  }
`;

const CarouselContainer = styled.div`
  display: flex;
  justify-content: center;
  overflow: hidden;
  width: 100%;
  padding: 40px 0;
`;

const CarouselTrack = styled.div`
  display: flex;
  gap: 20px;
  animation: ${slide} 70s linear infinite;
  width: fit-content;
`;

export default function CarouselRatio() {
  const [livros, setLivros] = useState([]);

  useEffect(() => {
    fetch("http://localhost:8000/livros")
      .then((res) => res.json())
      .then((data) => setLivros(data))
      .catch((err) => console.error("Erro ao buscar livros:", err));
  }, []);

  const livrosDuplicados = [...livros, ...livros]; 

  return (
    <CarouselContainer>
      <CarouselTrack>
        {livrosDuplicados.map((livro, index) => (
          <Card
            key={index}
            orientation="vertical"
            variant="outlined"
            sx={{
              minWidth: 160,
              minHeight: 220,
              borderRadius: '16px',
              bgcolor: '#6317EB',
              boxShadow: 'lg',
            }}
          >
            <AspectRatio ratio="2/3" sx={{ borderRadius: '12px' }}>
              <img
                src={livro.imagem}
                alt={livro.nome}
                style={{ objectFit: 'cover' }}
              />
            </AspectRatio>
            <Box sx={{ p: 1, textAlign: 'center' }}>
              <Typography level="title-md" sx={{ fontWeight: 'bold', color: '#fff' }}>
                {livro.nome}
              </Typography>
            </Box>
          </Card>
        ))}
      </CarouselTrack>
    </CarouselContainer>
  );
}
