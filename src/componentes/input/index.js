import styled from "styled-components";

const Input = styled.input `
    order: 1px solid #fff;
    background-color: transparent;
    border: 2px solid #6317EB;
    padding: 20px 140px;
    border-radius: 50px;
    color: #6317EB;
    font-size: 16px;
    margin-bottom: 10px;
    
    @media (max-width: 760px) {
        gap: 15px;
        width: 100px;
  }
`;
export default Input;