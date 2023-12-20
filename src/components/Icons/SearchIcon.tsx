import { ComponentPropsWithoutRef } from "react";

export type IconProps = ComponentPropsWithoutRef<"svg">;

export const SearchIcon = ({
  stroke,
  fill,
  className,
  ...props
}: IconProps) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={20}
      height={20}
      className={className ?? "DocSearch-Search-Icon"}
      viewBox="0 0 32 32"
      {...props}
    >
      <path
        d="M14.386 14.386l4.0877 4.0877-4.0877-4.0877c-2.9418 2.9419-7.7115 2.9419-10.6533 0-2.9419-2.9418-2.9419-7.7115 0-10.6533 2.9418-2.9419 7.7115-2.9419 10.6533 0 2.9419 2.9418 2.9419 7.7115 0 10.6533z"
        stroke={stroke ?? "#000"}
        fill={fill ?? "none"}
        fillRule="evenodd"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};
