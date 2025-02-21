import styled from "styled-components";

export const Titulo = styled.h2`
  font-size: 36px;
  font-weight: bold;
  text-align: center;
  color : ${props => props.cor || "#fc7f03"}
`;