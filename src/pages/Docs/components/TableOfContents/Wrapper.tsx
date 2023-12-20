import { useFela } from "react-fela";
import { DivProps } from "../../../../components/common";

const rule = () => ({
  color: "rgba(33, 37, 41, 0.75)",
  gridArea: "toc",
  marginTop: "1rem",
  opacity: 1,
  "@media (min-width: 576px)": {
    paddingRight: "0.25rem",
    paddingLeft: "0.25rem",
  },
  "@media (min-width: 992px)": {
    position: "sticky",
    top: "5rem",
    right: "0",
    zIndex: "2",
    height: "calc(100vh - 7rem)",
    overflowY: "auto",
    marginBottom: "3rem",
    marginTop: 0,
  },
});

export const Wrapper = ({ className = "", children }: DivProps) => {
  const { css } = useFela();
  return (
    <div className={`${css(rule)} toc ${className}`.trim()}>{children}</div>
  );
};
