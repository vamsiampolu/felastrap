import { PropsWithChildren } from "react";
import { useFela } from "react-fela";

const labelRule = () => ({
  display: "inline-block",
  marginBottom: "0.5rem",
});

export type LabelProps = PropsWithChildren<{
  htmlFor: string;
  className?: string;
}>;

export const Label = ({ htmlFor, children, className = "" }: LabelProps) => {
  const { css } = useFela();
  return (
    <label
      data-testid="form-label"
      htmlFor={htmlFor}
      className={`${css(labelRule)} form-label ${className}`.trim()}
    >
      {children}
    </label>
  );
};
