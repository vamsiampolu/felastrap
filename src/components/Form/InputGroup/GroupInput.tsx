import { useContext } from "react";
import { useFela } from "react-fela";
import { TextInput, type TextInputProps } from "../TextField/TextInput";
import { InputGroupContext } from "./InputGroupContext";
import { Size, StyleProps } from "../../common";

type RuleProps = StyleProps<{ size: Size }>;

const groupInputRule = () => ({
  position: "relative",
  flex: "1 1 auto",
  width: "1%",
  minWidth: 0,
  ":focus": {
    zIndex: 5,
  },
});

const groupInputLargeRule = ({ size }: RuleProps) =>
  size === "large"
    ? {
        padding: "0.5rem 1rem",
        fontSize: "1.25rem",
        borderRadius: "0.5rem",
      }
    : {};

const groupInputSmallRule = ({ size }: RuleProps) =>
  size === "small"
    ? {
        padding: "0.25rem 0.5rem",
        fontSize: "0.875rem",
        borderRadius: "0.25rem",
      }
    : {};

export type GroupInputProps = Omit<TextInputProps, "size">;

export const GroupInput = ({ className = "", ...props }: GroupInputProps) => {
  const { size = "medium" } = useContext(InputGroupContext);
  const { css } = useFela({ size });

  return (
    <TextInput
      className={`${css([
        groupInputRule,
        groupInputLargeRule,
        groupInputSmallRule,
      ])} ${className}`.trim()}
      size={size}
      {...props}
    />
  );
};
