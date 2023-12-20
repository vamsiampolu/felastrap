import { useFela } from "react-fela";
import { StyleProps } from "../common";
import { ComponentPropsWithoutRef } from "react";

export type IconProps = ComponentPropsWithoutRef<"svg">;

const followupRule = ({ followUp }: StyleProps<{ followUp: boolean }>) =>
  followUp
    ? {
        color: "rgba(112.520718,44.062154,249.437846, 1) !important",
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

export const CodeIcon = ({
  followUp = false,
  className,
  ...props
}: IconProps & { followUp?: boolean }) => {
  const { css } = useFela({ followUp });
  const cx = `${css([rule, followupRule])} code-icon ${className ?? ""}`.trim();
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={16}
      height={16}
      viewBox="0 0 16 16"
      role="img"
      className={cx}
      {...props}
    >
      <path d="M5.854 4.854a.5.5 0 1 0-.708-.708l-3.5 3.5a.5.5 0 0 0 0 .708l3.5 3.5a.5.5 0 0 0 .708-.708L2.707 8l3.147-3.146zm4.292 0a.5.5 0 0 1 .708-.708l3.5 3.5a.5.5 0 0 1 0 .708l-3.5 3.5a.5.5 0 0 1-.708-.708L13.293 8l-3.147-3.146z" />
    </svg>
  );
};
