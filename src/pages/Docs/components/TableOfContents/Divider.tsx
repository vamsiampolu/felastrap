import { useFela } from "react-fela";

const rule = () => ({
  marginLeft: "1rem",
  marginTop: ".5rem!important",
  marginBottom: ".5rem!important",
  display: "none",
  "@media (min-width: 768px)": {
    display: "block",
  },
});

export const Divider = ({ className = "" }: { className?: string }) => {
  const { css } = useFela();
  const cx = `${css(rule)} toc-divider ${className}`.trim();
  return <hr className={cx} />;
};
