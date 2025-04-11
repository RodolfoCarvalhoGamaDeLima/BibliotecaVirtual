import styled from "styled-components";
import OpcoesHeader from "../../componentes/opcoes";

const HeaderContainer = styled.header`
  background-color: #6317EB; 
  display: flex;
  gap: 10px;
  justify-content: center;
  align-items: center;
  font-size: 1.5rem;
  font-weight: bold;
  box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.3);  
`;


function Header () {
    return (
        <HeaderContainer>
           <OpcoesHeader/>
        </HeaderContainer>
    )
}


export default Header;
