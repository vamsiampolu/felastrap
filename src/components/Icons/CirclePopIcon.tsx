import { ComponentPropsWithoutRef } from "react";
import { useFela } from "react-fela";

export type IconProps = ComponentPropsWithoutRef<"svg">;

const rule = () => ({
  padding: "1rem",
  color: "rgba(32,201,151, 1)",
  backgroundColor: "rgba(32,201,151, 0.1)",
  backgroundBlendMode: "multiple",
  borderRadius: "1rem",
  mixBlendMode: "darken",
  filter: "drop-shadow(0 1px 1px #fff)",
});

export const CirclePopIcon = ({
  className,
  focusable,
  fill,
  ...props
}: IconProps) => {
  const { css } = useFela();
  return (
    <svg
      className={`${css(rule)} circle-pop-icon ${className ?? ""}`.trim()}
      xmlns="http://www.w3.org/2000/svg"
      width={32}
      height={32}
      fill={fill ?? "currentColor"}
      focusable={focusable ?? false}
      viewBox="0 0 16 16"
      {...props}
    >
      <path d="M0 6a6 6 0 1112 0A6 6 0 010 6z"></path>
      <path d="M12.93 5h1.57a.5.5 0 01.5.5v9a.5.5 0 01-.5.5h-9a.5.5 0 01-.5-.5v-1.57a6.953 6.953 0 01-1-.22v1.79A1.5 1.5 0 005.5 16h9a1.5 1.5 0 001.5-1.5v-9A1.5 1.5 0 0014.5 4h-1.79c.097.324.17.658.22 1z"></path>
    </svg>
  );
};
