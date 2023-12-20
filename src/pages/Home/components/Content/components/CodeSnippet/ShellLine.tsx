import { useFela } from "react-fela";

const rule = () => ({
  fontSize: "inherit",
  color: "#212529",
  wordWrap: "normal",
});

const promptRule = () => ({
  color: "#565c64",
  userSelect: "none",
});

export type ShellToken = {
  token: string;
};

export type ShellTokenProps = {
  tokens: ShellToken[];
};

export const ShellLine = ({ tokens = [] }: ShellTokenProps) => {
  const { css } = useFela();
  const cx = `${css(rule)} line`;
  return (
    <span className={cx}>
      <span className={css(promptRule)}>$</span>
      {tokens.map(({ token }, index) => (
        <span key={`sh-token-${index}`}>{token}</span>
      ))}
    </span>
  );
};
