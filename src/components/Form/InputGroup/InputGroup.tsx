import { useFela } from "react-fela";
import { Size } from "../../common";
import { ComponentPropsWithoutRef } from "react";
import { InputGroupContext } from "./InputGroupContext";

const inputGroupRule = () => ({
  alignItems: "stretch",
  display: "flex",
  flexWrap: "wrap",
  marginBottom: "1rem",
  position: "relative",
  width: "100%",
});

export type Children = ComponentPropsWithoutRef<"div">["children"];

export type InputGroupProps = {
  size?: Size;
  floating?: boolean;
  children: Children;
  className?: string;
};

export const InputGroup = ({
  size = "medium",
  className = "",
  children,
}: InputGroupProps) => {
  const { css } = useFela({ size });
  return (
    <InputGroupContext.Provider value={{ size, group: true }}>
      <div
        data-testid="input-group"
        className={`${css(inputGroupRule)} input-group ${className}`}
      >
        {children}
      </div>
    </InputGroupContext.Provider>
  );
};
