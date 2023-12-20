import { ComponentPropsWithoutRef } from "react";
import { useFela } from "react-fela";

export type IconProps = ComponentPropsWithoutRef<"svg">;

const rule = () => ({
  filter: "drop-shadow(0 1px 1px #fff)",
  color: "rgba(112.520718,44.062154,249.437846, 1)",
});

export const DropletIcon = ({
  fill,
  focusable,
  className,
  ...props
}: IconProps) => {
  const { css } = useFela();
  return (
    <svg
      className={`${css(rule)} droplet-icon ${className ?? ""}`.trim()}
      xmlns="http://www.w3.org/2000/svg"
      width={32}
      height={32}
      fill={fill ?? "currentColor"}
      focusable={focusable ?? "false"}
      viewBox="0 0 16 16"
      {...props}
    >
      <path
        fillRule="evenodd"
        d="M8 16a6 6 0 006-6c0-1.655-1.122-2.904-2.432-4.362C10.254 4.176 8.75 2.503 8 0c0 0-6 5.686-6 10a6 6 0 006 6zM6.646 4.646c-.376.377-1.272 1.489-2.093 3.13l.894.448c.78-1.559 1.616-2.58 1.907-2.87l-.708-.708z"
        clipRule="evenodd"
      />
    </svg>
  );
};
