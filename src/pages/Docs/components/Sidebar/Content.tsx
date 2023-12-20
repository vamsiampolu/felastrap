import { useFela } from "react-fela";
import { DivProps } from "../../../../components/common";

const rule = () => ({
  flexGrow: 1,
  padding: "1rem 1rem",
  overflowY: "auto",
  "@media (min-width: 992px)": {
    marginTop: "1.5rem",
    display: "flex",
    flexGrow: "0",
    padding: "0",
    overflowY: "visible",
    backgroundColor: "transparent !important",
  },
});

export const Content = ({ children, className = "" }: DivProps) => {
  const { css } = useFela();
  const cx = `${css(rule)} offcanvas-body ${className}`.trim();
  return <div className={cx}>{children}</div>;
};
