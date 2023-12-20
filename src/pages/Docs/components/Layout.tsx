import { useFela } from "react-fela";
import { DivProps } from "../../../components/common";
import { Container } from "../../../components/Flex";

const layout = () => ({
  display: "grid",
  marginTop: "5rem",
  gridTemplateAreas: '"sidebar main"',
  gridTemplateColumns: "1fr 5fr",
  rowGap: "1.5rem",
  columnGap: "1.5rem",

  width: "100%",

  paddingRight: "1.5rem",
  paddingLeft: "1.5rem",

  marginRight: "auto",
  marginLeft: "auto",
  maxWidth: "1320px",

  "@media (min-width: 768px)": {
    marginTop: "1.5rem",
    marginBottom: "1.5rem",
  },

  "@media (min-width: 1400px)": {
    maxWidth: "1320px",
  },
});

export const Layout = ({ children }: DivProps) => {
  const { css } = useFela();
  const cx = `${css([layout])} bd-layout`;

  return <Container className={cx}>{children}</Container>;
};
