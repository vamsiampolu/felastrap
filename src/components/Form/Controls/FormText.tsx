import { ComponentPropsWithoutRef } from "react";
import { useFela } from "react-fela";

const textRule = () => ({
  marginTop: "0.25rem",
  fontSize: "0.875em",
  color: "rgba(33, 37, 41, 0.75)",
});

export type Children = ComponentPropsWithoutRef<"div">["children"];

export const FormText = ({
  children,
  className = "",
}: {
  className?: string;
  children: Children;
}) => {
  const { css } = useFela();
  return (
    <div
      data-testid="form-text"
      className={`${css(textRule)} form-text ${className}`.trim()}
    >
      {children}
    </div>
  );
};
