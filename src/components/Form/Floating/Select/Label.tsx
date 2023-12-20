import { useFela } from "react-fela";
import { Label, LabelProps } from "../../Controls/Label";
import { StyleProps } from "../../../common";

const rule = () => ({
  position: "absolute",
  top: 0,
  left: 0,
  zIndex: 2,
  height: "100%",
  padding: "1rem 0.75rem",
  overflow: "hidden",
  textAlign: "start",
  textOverflow: "ellipsis",
  whiteSpace: "nowrap",
  pointerEvents: "none",
  border: "1px solid transparent",
  transformOrigin: "0 0",
  transition: "opacity 0.1s ease-in-out, transform 0.1s ease-in-out",
  color: "rgba(33, 37, 41, 0.65)",
  transform: "scale(0.85) translateY(-0.5rem) translateX(0.15rem)",
  "@media (prefers-reduced-motion: reduce)": {
    transition: "none",
  },
  "::after": {
    position: "absolute",
    inset: "1rem 0.375rem",
    zIndex: -1,
    height: "1.5em",
    content: "",
    backgroundColor: "#fff",
    borderRadius: "0.375rem",
  },
});

const disabledRule = ({ disabled }: StyleProps<{ disabled: boolean }>) =>
  disabled
    ? {
        color: "#6c757d",
      }
    : {};

export type FloatingSelectLabelProps = LabelProps & { disabled?: boolean };

export const FloatingSelectLabel = ({
  disabled = false,
  children,
  className = "",
  ...props
}: FloatingSelectLabelProps) => {
  const { css } = useFela({ disabled });
  const cx = `${css([
    rule,
    disabledRule,
  ])} floating-select-label ${className}`.trim();
  return (
    <Label className={cx} {...props}>
      {children}
    </Label>
  );
};
