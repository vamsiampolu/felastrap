import { ComponentPropsWithoutRef } from "react";
import { useFela } from "react-fela";

export type IconProps = ComponentPropsWithoutRef<"svg">;

const iconRule = () => ({
  width: "1em",
  height: "1em",
  verticalAlign: "-0.3em",
  fill: "currentcolor",
  marginRight: "0.5rem !important",
});

export const GridFillIcon = ({ className = "", ...props }: IconProps) => {
  const { css } = useFela();
  const cx = `${css(iconRule)} grid-fill-icon ${className}`.trim();
  return (
    <svg className={cx} aria-hidden={true} {...props}>
      <path d="M1 2.5A1.5 1.5 0 0 1 2.5 1h3A1.5 1.5 0 0 1 7 2.5v3A1.5 1.5 0 0 1 5.5 7h-3A1.5 1.5 0 0 1 1 5.5v-3zm8 0A1.5 1.5 0 0 1 10.5 1h3A1.5 1.5 0 0 1 15 2.5v3A1.5 1.5 0 0 1 13.5 7h-3A1.5 1.5 0 0 1 9 5.5v-3zm-8 8A1.5 1.5 0 0 1 2.5 9h3A1.5 1.5 0 0 1 7 10.5v3A1.5 1.5 0 0 1 5.5 15h-3A1.5 1.5 0 0 1 1 13.5v-3zm8 0A1.5 1.5 0 0 1 10.5 9h3a1.5 1.5 0 0 1 1.5 1.5v3a1.5 1.5 0 0 1-1.5 1.5h-3A1.5 1.5 0 0 1 9 13.5v-3z"></path>
    </svg>
  );
};
