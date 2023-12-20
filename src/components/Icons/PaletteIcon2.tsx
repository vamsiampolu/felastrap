import { useFela } from "react-fela";
import { StyleProps } from "../common";
import { ComponentPropsWithoutRef } from "react";

export type IconProps = ComponentPropsWithoutRef<"svg">;

const followupRule = ({ followUp }: StyleProps<{ followUp: boolean }>) =>
  followUp
    ? {
        filter: "drop-shadow(0 1px 1px #fff)",
        fontSize: "calc(1.375rem + 1.5vw)",
      }
    : {};

const rule = () => ({
  width: "1em",
  height: "1em",
  verticalAlign: "-.125em",
  fill: "currentcolor",
  "@media (min-width: 1200px)": {
    fontSize: "2.5rem !important",
  },
});

export const PaletteIcon2 = ({
  className = "",
  followUp = false,
  ...props
}: IconProps & {
  followUp?: boolean;
}) => {
  const { css } = useFela({ followUp });
  return (
    <svg
      className={`${css([
        rule,
        followupRule,
      ])} palette-icon2 ${className}`.trim()}
      xmlns="http://www.w3.org/2000/svg"
      width={16}
      height={16}
      viewBox="0 0 16 16"
      role="img"
      {...props}
    >
      <path d="M0 .5A.5.5 0 0 1 .5 0h5a.5.5 0 0 1 .5.5v5.277l4.147-4.131a.5.5 0 0 1 .707 0l3.535 3.536a.5.5 0 0 1 0 .708L10.261 10H15.5a.5.5 0 0 1 .5.5v5a.5.5 0 0 1-.5.5H3a2.99 2.99 0 0 1-2.121-.879A2.99 2.99 0 0 1 0 13.044m6-.21 7.328-7.3-2.829-2.828L6 7.188v5.647zM4.5 13a1.5 1.5 0 1 0-3 0 1.5 1.5 0 0 0 3 0zM15 15v-4H9.258l-4.015 4H15zM0 .5v12.495V.5z" />
      <path d="M0 12.995V13a3.07 3.07 0 0 0 0-.005z" />
    </svg>
  );
};
