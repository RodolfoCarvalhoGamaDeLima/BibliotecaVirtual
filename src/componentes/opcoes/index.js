import styled from "styled-components";
import { Link } from "react-router-dom";
import { MdOutlineMenuBook, MdCategory } from "react-icons/md";
import { FaHeart } from "react-icons/fa";


const Opcao = styled.li`
  font-size: 16px;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  padding: 0 5px;
  gap: 5px;
  cursor: pointer;
  color: white;

  @media (max-width: 760px) {
    justify-content: center;
  }
`;

const Opcoes = styled.ul`
  display: flex;
  
  @media (max-width: 760px) {
    flex-direction: column;
  }
`;

const Texto = styled.h1`
  color: #fff;
  font-size: 25px;
`;

const mock = [
  {
    name: "Minha Estante", 
    icon: <MdOutlineMenuBook/>,
  },
  {
    name: "Categorias", 
    icon: <MdCategory/>,
  },
  {
    name: "Favoritos", 
    icon: <FaHeart/>,
  }
];

function OpcoesHeader() {
  return (
    <Opcoes>
      {mock.map((item, index) => (
        <Link to={`/${item.name.toLowerCase()}`} key={index}>
          <Opcao>
            <div>{item.icon}</div>
            <Texto>{item.name}</Texto>
          </Opcao>
        </Link>
      ))}
    </Opcoes>
  );
}


export default OpcoesHeader;
