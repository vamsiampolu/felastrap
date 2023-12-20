import { ComponentPropsWithoutRef } from "react";

export type IconProps = ComponentPropsWithoutRef<"svg">;

export const PauseIcon = ({ fill, ...props }: IconProps) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 16 16"
      fill={fill ?? "currentColor"}
      width={16}
      height={16}
      {...props}
    >
      <path d="M5.5 4a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 .5-.5zm4 0a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 .5-.5z"></path>
    </svg>
  );
};
