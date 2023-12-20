import { ComponentPropsWithoutRef, ReactNode } from "react";
import { useFela } from "react-fela";
import { IconLink } from "./IconLink";
import { ArrowRightIcon } from "../../../../../components/Icons/ArrowRightIcon";

const articleBody = () => ({
  display: "flex",
  fontSize: "1rem",
  fontWeight: 400,
  "@media((min-width: 768px)": {
    fontSize: "1.25rem",
  },
  marginBottom: 0,
  justifyContent: "flex-start",
  "@media (min-width: 768px)": {
    fontSize: "1.25rem",
  },
});

export const BodyParagraph = ({
  className = "",
  children,
  linkText,
  href,
  ...props
}: ComponentPropsWithoutRef<"p"> & { href: string; linkText: ReactNode }) => {
  const { css } = useFela();
  const cx = `${css(articleBody)} column-body ${className}`.trim();
  return (
    <p className={cx} {...props}>
      <IconLink href={href}>
        {linkText}
        <ArrowRightIcon />
      </IconLink>
      {children}
    </p>
  );
};
