import styled from "styled-components";
import Pesquisa from "./componentes/pesquisa";


const AppContainer = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background-image: linear-gradient(90deg, #E63F00 35%, #E69555 165%);

`;
function App() {
  return (
    <AppContainer>
      <Pesquisa />
    </AppContainer>
  );
}

export default App;
