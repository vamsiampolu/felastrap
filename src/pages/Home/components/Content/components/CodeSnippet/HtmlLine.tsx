import htmlTags from "html-tags";
import { ariaAttributes } from "aria-attributes";
import { htmlElementAttributes } from "html-element-attributes";
import { useFela } from "react-fela";

const isSymbol = (str: string) =>
  ["<", ">", "</", "/>", "&lt;", "&lt;/", "&gt;", "/&gt;", "="].includes(str);
const isHtmlTag = (str: string) => htmlTags.includes(str as htmlTags.htmlTags);
const isAttribute = (str: string) =>
  ariaAttributes.includes(str) || htmlElementAttributes["*"].includes(str);

const symbolRule = ({ token = "" }) =>
  isSymbol(token)
    ? {
        color: "#333",
      }
    : {};

const tagRule = ({ token = "" }) =>
  isHtmlTag(token)
    ? {
        color: "#c6303e",
      }
    : {};

const attrKeyRule = ({ token = "" }) =>
  isAttribute(token)
    ? {
        color: "#6f42c1",
      }
    : {};

const attrValueRule = ({ isAttrValue = false }) =>
  isAttrValue
    ? {
        color: "#084298",
      }
    : {};

export type HtmlTokenType = {
  token?: string;
  isAttrValue?: boolean;
};
export const HtmlToken = ({
  token = "",
  isAttrValue = false,
}: HtmlTokenType) => {
  const { css } = useFela({ token, isAttrValue });
  const cx = `${css([symbolRule, tagRule, attrKeyRule, attrValueRule])} token`;
  return <span className={cx}>{token}</span>;
};

export type HtmlLineProps = { tokens?: HtmlTokenType[] };
export const HtmlLine = ({ tokens = [] }: HtmlLineProps) => {
  return (
    <span className="line">
      <span className="cl">
        {tokens.map(({ token, isAttrValue }, index) => (
          <HtmlToken
            token={token}
            isAttrValue={isAttrValue}
            key={`token-${index}`}
          />
        ))}
      </span>
    </span>
  );
};
