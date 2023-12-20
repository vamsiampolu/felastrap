import { ComponentPropsWithoutRef } from "react";

export type SvgProps = ComponentPropsWithoutRef<"svg">;

const CheckIcon = (props: SvgProps) => {
  const { fill, stroke, strokeWidth, ...rest } = props;
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={20}
      height={20}
      viewBox="0 0 20 20"
      {...rest}
    >
      <path
        fill={fill ?? "none"}
        stroke={stroke ?? "#fff"}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={strokeWidth ?? "3"}
        d="m6 10 3 3 6-6"
      />
    </svg>
  );
};

export { CheckIcon };
