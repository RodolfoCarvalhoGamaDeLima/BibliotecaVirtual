import Input from '../input';
import styled from 'styled-components';
import { useEffect, useState } from 'react';
import Modal from '../modal';
import { Titulo } from '../titulo';
import { GetLivros } from '../../servicos/livros';
import { MdOutlineSearch } from "react-icons/md";

const PesquisaContainer = styled.section`
    color: #FFF;
    text-align: center;
    padding: 10px;
    width: 100vw;

    @media (max-width: 760px) {
        gap: 15px;
        height: 570px;
        display: flex;
        flex-direction: column;
        align-items: center;
        padding: 10px;
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
    background-color: #6317EB;
    color: #fff;
    border: none;
    padding: 10px 15px;
    font-size: 16px;
    cursor: pointer;
    margin-left: 10px;
    border-radius: 5px;

    &:hover {
        opacity: 0.65;
    }
`;

const ResultadoPesquisa = styled.div`
    display: flex;
    overflow: auto;
    scroll-snap-type: x mandatory;
    gap: 25px;
    padding: 20px 20px;
    scroll-padding: 10px;


    @media (max-width: 760px) {
        gap: 15px;
        width: 250px;
        height: 250px;
        align-items: center;
        overflow-y: hidden;
        padding: 30px 60px;

  }

    
`;

const Resultado = styled.div`
    display: flex;
    justify-content: center;
    margin-bottom: 10px; 
    padding: 15px 30px;
    background-color:#6317EB;
    border-radius: 16px;
    cursor: pointer;
    p {
        width: 100px;
    }
    img {
        width: 100px;
    }
    &:hover {
        scale: 1.1;
    }

    @media (max-width: 760px) {
        gap: 15px;
        width: 200px;
        height: 200px;
        display: flex;
        flex-direction: column;
        align-items: center;
        p {
        width: 100px;
        font-size: 12px;
    }
        img {
        width: 65px;
    }

        &:hover {
        opacity: 0.65;
        scale:1;
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
                <Titulo cor={"#7a7a7a"} >Já sabe por onde começar?</Titulo>
            <PesquisaInput>
            <Input
                placeholder=""
                    value={textoDigitado}
                    onChange={evento => setTextoDigitado(evento.target.value)}
                />
                <BotaoPesquisa onClick={buscarLivros}> <MdOutlineSearch/> Pesquisar</BotaoPesquisa>
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