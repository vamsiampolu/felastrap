import { useFela } from "react-fela";
import { DivProps } from "../../../../../components/common";

const rule = () => ({
  borderRadius: "0.5rem",
  padding: "1.5rem",
  marginBottom: "1rem",
  border: "1px solid #dee2e6",
});
export const Preview = ({ className = "", children }: DivProps) => {
  const { css } = useFela();
  const cx = `${css(rule)} preview ${className}`.trim();
  return <div className={cx}>{children}</div>;
};
