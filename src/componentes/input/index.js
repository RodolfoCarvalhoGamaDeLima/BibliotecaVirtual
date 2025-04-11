import styled from "styled-components";

const Input = styled.input `
    order: 1px solid #fff;
    background-color: transparent;
    border: 1px solid #fff;
    padding: 20px 140px;
    border-radius: 50px;
    color: #fff;
    font-size: 16px;
    margin-bottom: 10px;
    @media (max-width: 760px) {
        gap: 15px;
        width: 100px;
  }

    &::placeholder {
        color: #fff;
        font-size: 16px;
    }
`;
export default Input;