import { useFela } from "react-fela";
import { DivProps } from "../common";

const rule = () => ({
  flexGrow: 1,
  padding: "1rem 1rem",
  overflowY: "auto",
});

export const OffcanvasBody = ({
  className = "",
  children,
  ...props
}: DivProps) => {
  const { css } = useFela();
  const cx = `${css(rule)} offcanvas-body ${className}`.trim();
  return (
    <div data-testid="offcanvas-body" className={cx} {...props}>
      {children}
    </div>
  );
};
