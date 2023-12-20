import { ComponentPropsWithoutRef, useContext } from "react";
import { useFela } from "react-fela";
import { InputGroupContext } from "./InputGroupContext";
import { Size, StyleProps } from "../../common";

type RuleProps = StyleProps<{ size: Size }>;

const inputGroupTextRule = () => ({
  display: "flex",
  alignItems: "center",
  padding: "0.375rem 0.75rem",
  fontSize: "1rem",
  fontWeight: 400,
  lineHeight: 1.5,
  color: "#212529",
  textAlign: "center",
  whiteSpace: "nowrap",
  backgroundColor: "#f8f9fa",
  border: "1px solid #dee2e6",
  borderRadius: "0.375rem",
});

const inputGroupSmallTextRule = ({ size }: RuleProps) =>
  size === "small"
    ? {
        padding: "0.25rem 0.5rem",
        fontSize: "0.875rem",
        borderRadius: "0.25rem",
      }
    : {};

const inputGroupLargeTextRule = ({ size }: RuleProps) =>
  size === "large"
    ? {
        padding: "0.5rem 1rem",
        fontSize: "1.25rem",
        borderRadius: "0.5rem",
      }
    : {};

export type Children = ComponentPropsWithoutRef<"span">["children"];
export type SpanProps = Omit<
  ComponentPropsWithoutRef<"span">,
  "children" | "className"
>;

export type GroupTextProps = {
  children: Children;
  className?: string;
} & SpanProps;

export const GroupText = ({
  className = "",
  children,
  ...props
}: GroupTextProps) => {
  const { size = "medium" } = useContext(InputGroupContext);
  const { css } = useFela({ size });

  return (
    <span
      data-testid="input-group-text"
      className={`${css([
        inputGroupTextRule,
        inputGroupSmallTextRule,
        inputGroupLargeTextRule,
      ])} input-group-text ${className}`}
      {...props}
    >
      {children}
    </span>
  );
};
