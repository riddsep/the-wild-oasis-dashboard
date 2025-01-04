import styled from "styled-components";
import GlobalStyles from "./styles/GlobalStyles";

function App() {
  return (
    <>
      <GlobalStyles />
      <div>
        <H1>Heloo</H1>
      </div>
    </>
  );
}

const H1 = styled.h1`
  font-size: 50px;
  color: var(--color-brand-900);
`;

export default App;
