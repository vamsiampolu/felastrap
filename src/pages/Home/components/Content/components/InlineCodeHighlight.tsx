import { ReactNode } from "react";
import { useFela } from "react-fela";

const codeRule = () => ({
  display: "inline",
  fontSize: "0.875em",
  color: "#d63384",
  wordWrap: "break-word",
});

export const InlineCodeHighlight = ({ children }: { children: ReactNode }) => {
  const { css } = useFela();
  return (
    <span className={`${css(codeRule)} inline-code-highlight`}>{children}</span>
  );
};
