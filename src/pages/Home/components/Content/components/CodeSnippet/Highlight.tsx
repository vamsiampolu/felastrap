import { useFela } from "react-fela";
import { DivProps } from "../../../../../../components/common";
import { Line, type LineProps } from "./Line";

const rule = () => ({
  position: "relative",
  backgroundColor: "#f8f9fa",
  padding: "0.75rem 1.5rem",
  marginTop: 0,
  "@media (min-width: 768px)": {
    padding: ".75rem 1.25rem",
    borderRadius: "calc(0.375rem - 1px)",
  },
});

const chromaRule = () => ({
  backgroundColor: "transparent",
  border: "0",
  display: "block",
  fontFamily:
    'SFMono-Regular,Menlo,Monaco,Consolas,"Liberation Mono","Courier New",monospace',
  fontSize: ".875em",
  marginBottom: "0",
  marginTop: ".8125rem",
  overflow: "overlay",
  padding: ".25rem 0 .875rem",
  scrollMarginBottom: "100px",
  scrollMarginTop: "80px",
  whiteSpace: "pre",
  "@media (min-width: 992px)": {
    marginRight: "1.875rem",
  },
});

const codeRule = () => ({
  color: "#212529",
  fontSize: "inherit",
  fontFamily:
    'SFMono-Regular,Menlo,Monaco,Consolas,"Liberation Mono","Courier New",monospace',
  wordWrap: "normal",
  wordBreak: "normal",
});

export type LanguageTypes = "html" | "scss" | "sh" | "ruby" | "text" | "js";

export type HighlightProps = DivProps & {
  language?: LanguageTypes;
  lines: Omit<LineProps, "language">[];
};
export const Highlight = (props: HighlightProps) => {
  const { className = "", tabIndex, language = "text", lines } = props;
  const { css } = useFela();
  const cx = `${css(rule)} highlight ${className}`.trim();
  const preClassName = `${css(chromaRule)} chroma`;
  const codeClassName = `${css(codeRule)} language-${language}`;
  return (
    <div className={cx}>
      <pre tabIndex={tabIndex} className={preClassName}>
        <code className={codeClassName} data-language={language}>
          {lines.map(({ tokens = [] }, index) => {
            return (
              <Line
                language={language}
                // eslint-disable-next-line  @typescript-eslint/no-explicit-any
                tokens={tokens as any}
                key={`line-${index}`}
              />
            );
          })}
        </code>
      </pre>
    </div>
  );
};
