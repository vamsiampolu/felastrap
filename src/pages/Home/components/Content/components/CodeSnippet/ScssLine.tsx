import { useFela } from "react-fela";

export type ScssTokenType = {
  isKey: boolean;
  isValue: boolean;
  token: string;
};

const classNameRule = ({ token = " " }) =>
  token[0] === "."
    ? {
        color: "#13795b",
      }
    : {};

const importRule = ({ token = "" }) =>
  token === "@import"
    ? {
        color: "#ab296a",
      }
    : {};

const variableRule = ({ token = "" }) =>
  token[0] === "$"
    ? {
        color: "#c6303e",
      }
    : {};

const commentRule = ({ token = "" }) =>
  token.trim().slice(0, 2) === "//" || token.trim().slice(0, 2) === "/*"
    ? {
        color: "#565c64",
      }
    : {};

const moduleNameRule = ({ token = "" }) =>
  ["bootstrap/scss/bootstrap", "map-merge", "cursor", "var"].includes(token)
    ? {
        color: "#084298",
      }
    : {};

const propertyRule = ({ isKey = false }) => (isKey ? { color: "#6f42c1" } : {});
const unitRule = ({ token = "" }) =>
  ["px", "rem"].includes(token) ? { color: "#6f42c1" } : {};
const propertyValueRule = ({ isValue = false }) =>
  isValue ? { color: "#c6303e" } : {};

const numericTokenRule = ({ token = "" }) =>
  !isNaN(Number(token))
    ? {
        color: "#087990",
      }
    : {};

const punctuationRule = ({ token = "" }) =>
  [";", ":", "(", ",", ")", ");"].includes(token) ? { color: "#333" } : {};

export const ScssToken = ({
  token = "",
  isKey = false,
  isValue = false,
}: ScssTokenType) => {
  const { css } = useFela({ isKey, isValue, token });
  const cx = `${css([
    commentRule,
    importRule,
    classNameRule,
    unitRule,
    numericTokenRule,
    variableRule,
    propertyRule,
    propertyValueRule,
    moduleNameRule,
    punctuationRule,
  ])} scss-token`;
  return <span className={cx}>{token}</span>;
};

export type ScssLineProps = { tokens: ScssTokenType[] };

export const ScssLine = ({ tokens = [] }: ScssLineProps) => {
  return (
    <span className="line">
      <span className="cl">
        {tokens.map(({ isKey = false, isValue = false, token = "" }, index) => (
          <ScssToken
            key={`scss-token-${index}`}
            isKey={isKey}
            isValue={isValue}
            token={token}
          />
        ))}
      </span>
    </span>
  );
};
