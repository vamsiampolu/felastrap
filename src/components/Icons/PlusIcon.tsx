import { ComponentPropsWithoutRef } from "react";
import { useFela } from "react-fela";

export type IconProps = ComponentPropsWithoutRef<"svg">;

const rule = () => ({
  color: "rgba(33, 37, 41, 0.75)",
  width: "1em",
  height: "1em",
  verticalAlign: "-.125em",
  fill: "currentcolor",
  marginRight: "0.5rem",
  marginLeft: "0.5rem",
  "@media (min-width: 1200px)": {
    fontSize: "2rem !important",
  },
});

export const PlusIcon = ({ className, ...props }: IconProps) => {
  const { css } = useFela();
  const cx = `${css(rule)} plus-icon ${className ?? ""}`.trim();
  return (
    <svg className={cx} id="plus" viewBox="0 0 16 16" {...props}>
      <path d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4z"></path>
    </svg>
  );
};
