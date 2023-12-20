import { useFela } from "react-fela";
import { Button, ButtonProps } from "../../Button";
import { ElementType, useContext } from "react";
import { InputGroupContext } from "./InputGroupContext";
import { Size, StyleProps } from "../../common";

type RuleProps = StyleProps<{ size: Size }>;

const rule = () => ({
  position: "relative",
  zIndex: 2,
  ":focus": {
    zIndex: 5,
  },
});

const largeRule = ({ size }: RuleProps) =>
  size === "large"
    ? {
        padding: "0.5rem 1rem",
        fontSize: "1.25rem",
        borderRadius: "0.5rem",
      }
    : {};

const smallRule = ({ size }: RuleProps) =>
  size === "small"
    ? {
        padding: "0.25rem 0.5rem",
        fontSize: "0.875rem",
        borderRadius: "0.25rem",
      }
    : {};

export type GroupButtonProps<T extends ElementType> = Omit<
  ButtonProps<T>,
  "outline" | "variant" | "size"
>;

export const GroupButton = ({
  className = "",
  children,
  ...props
}: GroupButtonProps<"button">) => {
  const { size } = useContext(InputGroupContext);
  const { css } = useFela({ size });
  const cx = `${css([
    rule,
    smallRule,
    largeRule,
  ])} input-group-btn ${className}`.trim();

  return (
    <Button
      data-testid="input-group-btn"
      outline
      size={size ?? "medium"}
      variant="secondary"
      className={cx}
      {...props}
    >
      {children}
    </Button>
  );
};
