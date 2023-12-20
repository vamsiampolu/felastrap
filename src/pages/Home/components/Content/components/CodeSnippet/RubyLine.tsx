import { useFela } from "react-fela";

const gemRule = ({ token = "" }) =>
  token === "gem"
    ? {
        color: "#c6303e",
      }
    : {};

const valueRule = ({ token = "" }) =>
  token === "'bootstrap'" || token === "''~> 5.3.2'"
    ? {
        color: "#084298",
      }
    : {};

const punctuationRule = ({ token = "" }) =>
  token === "," ? { color: "#333" } : {};

export type RubyTokenProps = { token: string };
const Token = ({ token }: RubyTokenProps) => {
  const { css } = useFela({ token });
  const cx = `${css([gemRule, valueRule, punctuationRule])} bd-ruby-token`;
  return <span className={cx}>{token}</span>;
};

export type RubyLineProps = { tokens: RubyTokenProps[] };

export const RubyLine = ({ tokens = [] }: { tokens: RubyTokenProps[] }) => (
  <span className="line">
    <span className="cl">
      {tokens.map(({ token }, index) => (
        <Token token={token} key={`ruby-token-${index}`} />
      ))}
    </span>
  </span>
);
