import { Wrapper, Title, Logo, Description, Illustration } from "./styles";

const Main = () => (
  <Wrapper>
    <Logo
      src="img/logo.svg"
      alt="Imagem de um átomo e react avançado escrito ao lado"
    />
    <Title>React avançado</Title>
    <Description>TypeScript, ReactJS, NextJS e Styled Components</Description>
    <Illustration
      src="img/hero-illustration.svg"
      alt="Desenvolvedor de frente para uma tela com código."
    />
  </Wrapper>
);

export default Main;
