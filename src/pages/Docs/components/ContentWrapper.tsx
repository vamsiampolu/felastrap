import { ReactNode } from "react";
import { useFela } from "react-fela";

const rule = () => ({
  gridArea: "content",
  minWidth: "1px",
  display: "block",
  "@media (min-width: 992px)": {
    paddingLeft: "0.5rem",
  },
});

export const ContentWrapper = ({ children }: { children: ReactNode }) => {
  const { css } = useFela();
  const cx = `${css(rule)} bd-content`;
  return <div className={cx}>{children}</div>;
};
