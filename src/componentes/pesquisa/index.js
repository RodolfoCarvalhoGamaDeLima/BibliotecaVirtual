import Input from '../input';
import styled from 'styled-components';
import { useState } from 'react';
import { livros } from './dadosPesquisa';
import Modal from '../modal';
import { Titulo } from '../titulo';

const PesquisaContainer = styled.section`
    color: #FFF;
    text-align: center;
    padding: 85px 0;
    height: 270px;
    width: 100%;
`;

const BotaoPesquisa = styled.button`
    background-color: #fff;
    color: #E66434;
    border: none;
    padding: 10px 15px;
    font-size: 16px;
    cursor: pointer;
    margin-left: 10px;
    border-radius: 5px;
    &:hover {
        background-color: #E69555;
        color: white;
    }
`;

const ResultadoPesquisa = styled.div`
    display: flex;
    justify-content: center;
    margin-bottom: 10px;
    cursor: pointer;
  
`;

const Resultado = styled.div`
    display: flex;
    justify-content: center;
    margin-bottom: 10px;
    padding: 15px 30px;
    cursor: pointer;
    p {
        width: 100px;
    }
    img {
        width: 100px;
    }
    &:hover {
        border: 2px solid #fff;
        border-radius: 50px;
    }
`;

function Pesquisa() {
    const [textoDigitado, setTextoDigitado] = useState('');
    const [ livrosPesquisados, setLivrosPesquisados ] = useState([])
    const [modalOpen, setModalOpen] = useState(false);
    const [livroSelecionado, setLivroSelecionado] = useState(null);

    const buscarLivros = () => {
        const resultadoPesquisa = livros.filter(livro =>
            livro.nome.toLowerCase().includes(textoDigitado.toLowerCase())
        );
        setLivrosPesquisados(resultadoPesquisa);
    };

    return (
        <PesquisaContainer>
            <Titulo cor={"#fff"} >Já sabe por onde começar?</Titulo>
            <Input
                placeholder="Escreva sua próxima leitura"
                    value={textoDigitado}
                    onChange={evento => setTextoDigitado(evento.target.value)}
                />
                <BotaoPesquisa onClick={buscarLivros}>Pesquisar</BotaoPesquisa>
            <ResultadoPesquisa>
              {livrosPesquisados.map(livros => (
                <Resultado 
                    key={livros.nome} 
                    onClick={() => {
                        console.log("Livro selecionado:", livros);
                        setLivroSelecionado(livros);
                        setModalOpen(true);
                    }}
                >
                    <img src={livros.src} alt={livros.nome} />
                    <p>{livros.nome}</p>
                </Resultado>
            ))}
            </ResultadoPesquisa>
            <Modal Aberto={modalOpen} SetFechado={() => setModalOpen(false)} livro={livroSelecionado} />
        </PesquisaContainer>
    )
}

export default Pesquisa;