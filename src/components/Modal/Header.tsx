import { useFela } from "react-fela";
import { DivProps } from "../common";

const rule = () => ({
  display: "flex",
  flexDirection: "row",
  justifyContent: "space-between",
  padding: "15px",
  borderBottom: "1px solid #e5e5e5",
});

export const ModalHeader = ({
  className = "",
  children,
  ...props
}: DivProps) => {
  const { css } = useFela();
  const cx = `${css(rule)} bs-modal-header ${className}`.trim();

  return (
    <div data-testid="modal-header" className={cx} {...props}>
      {children}
    </div>
  );
};
