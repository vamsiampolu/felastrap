import { useFela } from "react-fela";
import { LabelProps, Label } from "../Controls/Label";
import { StyleProps } from "../../common";

export type CheckboxLabelProps = LabelProps & { disabled?: boolean };

const disabledRule = ({ disabled }: StyleProps<{ disabled: boolean }>) =>
  disabled
    ? {
        cursor: "default",
        opacity: 0.5,
      }
    : {};

export const CheckboxLabel = ({
  disabled = false,
  className = "",
  htmlFor,
  children,
}: CheckboxLabelProps) => {
  const { css } = useFela({ disabled });
  const cx = `${css(disabledRule)} form-check-label ${className}`.trim();
  return (
    <Label htmlFor={htmlFor} className={cx}>
      {children}
    </Label>
  );
};
