import { useFela } from "react-fela";
import { DivProps } from "../common";

const rule = () => ({
  display: "flex",
  flexDirection: "row",
  justifyContent: "flex-end",
  padding: "0.75rem !important",
  paddingRight: "0.75rem",
  "> *": {
    margin: "0.25rem",
  },
  "& button + button": {
    marginBottom: 0,
    marginLeft: "5px",
  },
});

export const ModalFooter = ({
  className = "",
  children,
  ...props
}: DivProps) => {
  const { css } = useFela();
  const cx = `${css(rule)} bs-modal-footer ${className}`.trim();
  return (
    <div data-testid="modal-footer" className={cx} {...props}>
      {children}
    </div>
  );
};
