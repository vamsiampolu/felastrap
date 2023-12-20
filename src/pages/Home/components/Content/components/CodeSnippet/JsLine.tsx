import { useFela } from "react-fela";

const importRule = ({ token = "" }) =>
  ["import", "new", "const"].includes(token) ? { color: "#ab296a" } : {};
const starRule = ({ token = "" }) =>
  ["*", ".", "(", "document", ")"].includes(token) ? { color: "#333" } : {};
const symbolRule = ({ token = "" }) =>
  [
    "as",
    "Popper",
    "from",
    "bootstrap",
    "Popover",
    "getElementById",
    "querySelector",
    "myModalEl",
    "addEventListener",
    "event",
    "preventDefault",
  ].includes(token)
    ? { color: "#6f42c1" }
    : {};
const nameRule = ({ token = "" }) =>
  [
    '"@popperjs/core"',
    "'popoverButton'",
    "#myModal",
    "'show.bs.modal'",
  ].includes(token)
    ? { color: "#084298" }
    : {};

const commentsRule = ({ token = "" }) =>
  token.slice(0, 3) === "// " ? { color: "#565c64" } : {};

export type JsTokenProps = {
  token: string;
};

export const JsToken = ({ token }: JsTokenProps) => {
  const { css } = useFela({ token });
  const cx = `${css([
    importRule,
    starRule,
    symbolRule,
    nameRule,
    commentsRule,
  ])} js-token`;
  return <span className={cx}>{token}</span>;
};

export type JsLineProps = { tokens: JsTokenProps[] };
export const JsLine = ({ tokens = [] }: JsLineProps) => {
  const mapper = ({ token }: JsTokenProps, index: number) => {
    const key = `js-token-${index}`;
    return <JsToken token={token} key={key} />;
  };

  return (
    <span className="line">
      <span className="cl">{tokens.map(mapper)}</span>
    </span>
  );
};
