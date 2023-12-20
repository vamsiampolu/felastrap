import { ComponentPropsWithoutRef } from "react";
import { useFela } from "react-fela";

const rule = () => ({
  verticalAlign: "-0.125em",
  fill: "currentcolor",
});

export type SvgProps = ComponentPropsWithoutRef<"svg">;
export type ArrowRightIconProps = Omit<
  SvgProps,
  "role" | "className" | "xmlns"
>;

export const ArrowRightIcon = (props: ArrowRightIconProps) => {
  const { css } = useFela();
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="16"
      height="16"
      viewBox="0 0 16 16"
      role="img"
      className={`${css(rule)} arrow-right-icon`}
      {...props}
    >
      <path
        fillRule="evenodd"
        d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8z"
      />
    </svg>
  );
};
