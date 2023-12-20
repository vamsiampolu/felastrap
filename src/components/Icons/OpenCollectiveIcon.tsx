import { useFela } from "react-fela";
import { ComponentPropsWithoutRef } from "react";

export type IconProps = ComponentPropsWithoutRef<"svg">;

export const OpenCollectiveIcon = ({
  fill,
  fillOpacity,
  className,
  ...props
}: IconProps) => {
  const { css } = useFela();
  const cx = `${css({
    display: "inline-block",
    verticalAlign: "-0.125rem",
  })} navbar-nav-svg ${className ?? ""}`.trim();
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={16}
      height={16}
      fill={fill ?? "currentColor"}
      fillRule="evenodd"
      className={cx}
      viewBox="0 0 40 41"
      role="img"
      {...props}
    >
      <title>Open Collective</title>
      <path
        fillOpacity={fillOpacity ?? "0.4"}
        d="M32.8 21c0 2.4-.8 4.9-2 6.9l5.1 5.1c2.5-3.4 4.1-7.6 4.1-12 0-4.6-1.6-8.8-4-12.2L30.7 14c1.2 2 2 4.3 2 7z"
      ></path>
      <path d="M20 33.7a12.8 12.8 0 0 1 0-25.6c2.6 0 5 .7 7 2.1L32 5a20 20 0 1 0 .1 31.9l-5-5.2a13 13 0 0 1-7 2z"></path>
    </svg>
  );
};
