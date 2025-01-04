import styled from "styled-components";
import GlobalStyles from "./styles/GlobalStyles";
import Button from "./ui/Button";
import Heading from "./ui/Heading";
import Input from "./ui/Input";

function App() {
  return (
    <>
      <GlobalStyles />
      <StyledApp>
        <Heading as="h1">Heloo</Heading>
        <Heading as="h2">Heloo</Heading>
        <Button>Click me</Button>
        <Button>Click me</Button>
        <Heading as="h3">Heloo</Heading>
        <Input type="number" />
        <Input type="number" />
      </StyledApp>
    </>
  );
}

const StyledApp = styled.main`
  background-color: lightblue;
  width: 100%;
  max-width: 500px;
  margin-inline: auto;
`;

export default App;
