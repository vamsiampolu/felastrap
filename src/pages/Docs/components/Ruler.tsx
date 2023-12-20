import { useFela } from "react-fela";

const rule = () => ({
  border: "0",
  borderTop: "1px solid",
  color: "inherit",
  opacity: 0.25,
  marginTop: "3rem",
  marginBottom: "3rem",
});

export const Ruler = ({ className = "" }: { className?: string }) => {
  const { css } = useFela();
  const cx = `${css(rule)} endnote-divider ${className}`.trim();
  return <hr className={cx} />;
};
