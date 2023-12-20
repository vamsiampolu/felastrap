import { ComponentPropsWithoutRef } from "react";

export type IconProps = ComponentPropsWithoutRef<"svg">;

export const HamburgerIcon = ({ stroke, ...props }: IconProps) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={30}
      height={30}
      viewBox="0 0 30 30"
      {...props}
    >
      <path
        stroke={stroke ?? "rgba(33, 37, 41, 0.75)"}
        strokeLinecap="round"
        strokeMiterlimit="10"
        strokeWidth="2"
        d="M4 7h22M4 15h22M4 23h22"
      />
    </svg>
  );
};
