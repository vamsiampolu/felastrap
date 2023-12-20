import { useFela } from "react-fela";
import { DivProps } from "../common";

const rule = () => ({
  position: "relative",
  display: "flex",
  flexWrap: "wrap",
  alignItems: "stretch",
  width: "100%",
  marginBottom: "1rem",
});

export const Wrapper = ({ className = "", children, ...props }: DivProps) => {
  const { css } = useFela();
  const cx = `${css(rule)} segmented-btn-wrapper ${className}`.trim();
  return (
    <div data-testid="segmented-button" className={cx} {...props}>
      {children}
    </div>
  );
};
