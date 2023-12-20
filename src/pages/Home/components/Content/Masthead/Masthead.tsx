import { useFela } from "react-fela";
import { Container } from "../../../../../components/Flex";
import { Content } from "./Content";

const mastheadRule = () => ({
  marginBottom: "1rem",
  padding: "3rem 0",
  backgroundImage:
    "linear-gradient(180deg, rgba(255, 255, 255, 0.01), rgba(255, 255, 255, 1) 85%),radial-gradient(ellipse at top left, rgba(13, 110, 253, 0.5), transparent 50%),radial-gradient(ellipse at top right, rgba(255,228,132, 0.5), transparent 50%),radial-gradient(ellipse at center right, rgba(112.520718,44.062154,249.437846, 0.5), transparent 50%),radial-gradient(ellipse at center left, rgba(214,51,132, 0.5), transparent 50%)",
});

export const Masthead = () => {
  const { css } = useFela();
  return (
    <div id="content" className={`${css(mastheadRule)} bd-masthead`}>
      <Container
        className={css({
          maxWidth: "1320px",
          paddingRight: "1.5rem",
          paddingLeft: "1.5rem",
        })}
      >
        <Content />
      </Container>
    </div>
  );
};
