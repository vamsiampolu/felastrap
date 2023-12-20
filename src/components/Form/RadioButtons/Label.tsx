import { useFela } from "react-fela";
import { Label, type LabelProps } from "../Controls/Label";
import { StyleProps } from "../../common";

const disabledRule = ({ disabled }: StyleProps<{ disabled: boolean }>) =>
  disabled ? { cursor: "default", opacity: "0.5" } : {};

export type RadioLabelProps = LabelProps & { disabled?: boolean };

export const RadioLabel = ({
  className = "",
  children,
  htmlFor,
  disabled = false,
}: RadioLabelProps) => {
  const { css } = useFela({ disabled });
  const cx = `${css(disabledRule)} form-check-label ${className}`.trim();
  return (
    <Label className={cx} htmlFor={htmlFor}>
      {children}
    </Label>
  );
};
