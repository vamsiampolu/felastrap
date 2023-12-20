import { useFela } from "react-fela";
import { Button } from "../../../../../components/Button";
import { BookHalfIcon } from "../../../../../components/Icons/BookHalfIcon";

const docsBtnRule = () => ({
  padding: "0.8125rem 2rem",
  display: "flex",
  height: "4rem",
  alignItems: "center",
  justifyContent: "center",
  fontWeight: 600,
  fontSize: "1.25rem",
  lineHeight: 1.25,
  color: "#fff",
  textAlign: "center",
  textDecoration: "none",
  verticalAlign: "center",
  cursor: "pointer",
  userSelect: "none",
  border: "1px solid #712cf9",
  borderRadius: "0.5rem",
  backgroundColor: "#712cf9",
  transition:
    "color .15s ease-in-out,background-color .15s ease-in-out,border-color .15s ease-in-out,box-shadow .15s ease-in-out",
});

export const DocsButton = () => {
  const { css } = useFela();
  const cx = `${css(docsBtnRule)} docs-button-rule`;
  return (
    <Button
      className={cx}
      as="a"
      href="/docs/5.3/getting-started/introduction/"
      size="large"
      variant="primary"
    >
      <BookHalfIcon />
      Read the docs
    </Button>
  );
};
