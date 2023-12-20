import { useFela } from "react-fela";
import { DivProps } from "../../../../../../components/common";

const codeSnippetRule = () => ({
  margin: "0 -1.5rem 1rem",
  border: "1px solid #dee2e6",
  "@media (min-width: 768px)": {
    marginRight: 0,
    marginLeft: 0,
    borderWidth: "1px",
    borderRadius: "0.375rem",
  },
});

export const CodeSnippet = ({ className = "", children }: DivProps) => {
  const { css } = useFela();
  const codeSnippetClassName = `${css(
    codeSnippetRule,
  )} code-snippet ${className}`.trim();
  return <div className={codeSnippetClassName}>{children}</div>;
};
