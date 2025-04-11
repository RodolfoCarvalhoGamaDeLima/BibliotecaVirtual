import Input from '../input';
import styled from 'styled-components';
import { useEffect, useState } from 'react';
import Modal from '../modal';
import { Titulo } from '../titulo';
import { GetLivros } from '../../servicos/livros';

const PesquisaContainer = styled.section`
    color: #FFF;
    text-align: center;
    padding: 85px 0;
    height: 270px;
    width: 100vw;

    @media (max-width: 760px) {
        gap: 15px;
        height: 570px;
        display: flex;
        flex-direction: column;
        align-items: center;
        padding: 25px;
  }

`;

const PesquisaInput = styled.section`

    @media (max-width: 760px) {
        gap: 15px;
        width: 200px;
        display: flex;
        flex-direction: column;
        align-items: center;
  }

`;


const BotaoPesquisa = styled.button`
    background-color: #fff;
    color: #7471EB;
    border: none;
    padding: 10px 15px;
    font-size: 16px;
    cursor: pointer;
    margin-left: 10px;
    border-radius: 5px;
    &:hover {
        background-color: #7194EB;
        color: white;
    }
`;

const ResultadoPesquisa = styled.div`
    display: flex;
    overflow: auto;
    scroll-snap-type: x mandatory;
    gap: 12px;
    scroll-padding: 10px;


    @media (max-width: 760px) {
        gap: 15px;
        width: 400px;
        align-items: center;
        overflow-y: hidden;
  }

    
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
        border-radius: 16px;
    }

    @media (max-width: 760px) {
        gap: 15px;
        width: 200px;
        display: flex;
        flex-direction: column;
        align-items: center;
    
    &:hover {
        opacity:0.8;
        border: transparent;
    }
  }

`;

function Pesquisa() {
    const [textoDigitado, setTextoDigitado] = useState('');
    const [livrosPesquisados, setLivrosPesquisados ] = useState([])
    const [livros, setLivros] = useState ([])

    async function fetchLivros () {
        const LivrosAPI =  await GetLivros()
        setLivros(LivrosAPI)
    }

    useEffect(() => {
       fetchLivros ()
    }, [])

    const [modalOpen, setModalOpen] = useState(false);
    const [livroSelecionado, setLivroSelecionado] = useState(null);

    const buscarLivros = () => {
        if (!livros || livros.length === 0) {
            console.warn("Lista de livros não carregada ou vazia");
            return;
        }
        const resultadoPesquisa = livros.filter(livro =>
            livro.nome?.toLowerCase().includes(textoDigitado.toLowerCase())
        );
        setLivrosPesquisados(resultadoPesquisa);
    };

    return (
        <PesquisaContainer>
                <Titulo cor={"#fff"} >Já sabe por onde começar?</Titulo>
            <PesquisaInput>
            <Input
                placeholder=""
                    value={textoDigitado}
                    onChange={evento => setTextoDigitado(evento.target.value)}
                />
                <BotaoPesquisa onClick={buscarLivros}>Pesquisar</BotaoPesquisa>
            </PesquisaInput>
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
                    <img src={livros.imagem} alt={livros.nome} /> 
                    <p>{livros.nome}</p>
                </Resultado>
            ))}
            </ResultadoPesquisa>
            <Modal Aberto={modalOpen} SetFechado={() => setModalOpen(false)} livro={livroSelecionado} />
        </PesquisaContainer>
    )
}

export default Pesquisa;