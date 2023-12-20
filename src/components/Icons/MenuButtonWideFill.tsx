import { ComponentPropsWithoutRef } from "react";
import { useFela } from "react-fela";

export type IconProps = ComponentPropsWithoutRef<"svg">;

const rule = () => ({
  filter: "drop-shadow(0 1px 1px #fff)",
  color: "rgba(220,53,69, 1)",
  width: "1em",
  height: "1em",
  verticalAlign: "-.125em",
  fill: "currentcolor",
  "@media (min-width: 1200px)": {
    fontSize: "2rem !important",
  },
  fontSize: "calc(1.375rem + 1.5vw)",
});

export const MenuButtonWideFill = ({ className = "", ...props }: IconProps) => {
  const { css } = useFela();
  const cx = `${css(rule)} menu-button-wide-fill-icon ${className}`.trim();
  return (
    <svg
      className={cx}
      id="menu-button-wide-fill"
      viewBox="0 0 16 16"
      width={16}
      height={16}
      {...props}
    >
      <path d="M1.5 0A1.5 1.5 0 0 0 0 1.5v2A1.5 1.5 0 0 0 1.5 5h13A1.5 1.5 0 0 0 16 3.5v-2A1.5 1.5 0 0 0 14.5 0h-13zm1 2h3a.5.5 0 0 1 0 1h-3a.5.5 0 0 1 0-1zm9.927.427A.25.25 0 0 1 12.604 2h.792a.25.25 0 0 1 .177.427l-.396.396a.25.25 0 0 1-.354 0l-.396-.396zM0 8a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v5a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V8zm1 3v2a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1v-2H1zm14-1V8a1 1 0 0 0-1-1H2a1 1 0 0 0-1 1v2h14zM2 8.5a.5.5 0 0 1 .5-.5h9a.5.5 0 0 1 0 1h-9a.5.5 0 0 1-.5-.5zm0 4a.5.5 0 0 1 .5-.5h6a.5.5 0 0 1 0 1h-6a.5.5 0 0 1-.5-.5z"></path>
    </svg>
  );
};
