import { ReactNode } from "react";
import { useFela } from "react-fela";

const infoLink = () => ({
  display: "flex",
  flexDirection: "row",
  justifyContent: "center",
  alignItems: "center",
  marginBottom: "1.5rem",
  color: "rgba(33,37,41, 1)",
  lineHeight: 1.25,
  textDecoration: "none",
});

const strongNoticeRule = () => ({
  display: "inline-block",
  padding: "0.5rem",
  marginRight: "0.5rem",
  marginBottom: 0,
  borderRadius: "0.5rem",
  backgroundColor: "#ffe484",
  boxShadow:
    "inset 0 -1px 1px rgba(33,37,41, 0.15),0 0.25rem 1.5rem rgba(33, 37, 41, 0.75)",
});

const noticeRule = () => ({
  color: "rgba(33,37,41,0.75)",
});

export type MastheadProps = {
  title: ReactNode;
  href: string;
  text: ReactNode;
};

/*
<Masthead
  title="New in v5.3"
  href="https://blog.getbootstrap.com/" 
  text="Color mode support, expanded color palette, and more!"
/>
 */

export const Header = ({ title, href, text }: MastheadProps) => {
  const { css } = useFela();
  return (
    <a className={css(infoLink)} href={href}>
      <strong className={`${css(strongNoticeRule)} masthead-notice`}>
        {title}
      </strong>
      <span className={`${css(noticeRule)} masthead-notice`}>{text}</span>
    </a>
  );
};
