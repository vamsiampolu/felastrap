import { ComponentPropsWithoutRef } from "react";
import { useFela } from "react-fela";

export type IconProps = ComponentPropsWithoutRef<"svg">;

const iconRule = () => ({
  width: "1em",
  height: "1em",
  verticalAlign: "-0.3em",
  fill: "currentcolor",
  marginLeft: "0.5rem !important",
});

export const UnfoldIcon = ({ className = "", ...props }: IconProps) => {
  const { css } = useFela();
  const cx = `${css(iconRule)} ${className}`.trim();
  return (
    <svg className={cx} aria-hidden={true} {...props}>
      <path
        fillRule="evenodd"
        d="M3.646 9.146a.5.5 0 0 1 .708 0L8 12.793l3.646-3.647a.5.5 0 0 1 .708.708l-4 4a.5.5 0 0 1-.708 0l-4-4a.5.5 0 0 1 0-.708zm0-2.292a.5.5 0 0 0 .708 0L8 3.207l3.646 3.647a.5.5 0 0 0 .708-.708l-4-4a.5.5 0 0 0-.708 0l-4 4a.5.5 0 0 0 0 .708z"
      ></path>
    </svg>
  );
};
