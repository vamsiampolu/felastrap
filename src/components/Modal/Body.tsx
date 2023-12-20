import { useFela } from "react-fela";
import { DivProps } from "../common";

const rule = () => ({
  position: "relative",
  padding: "15px",
  borderBottom: "1px solid #dee2e6",
});

const scrollableRule = ({ scrollable = false }) =>
  scrollable
    ? {
        overflowY: "auto !important",
        minHeight: "1500px",
      }
    : {};

export const ModalBody = ({
  className = "",
  children,
  scrollable = false,
  ...props
}: DivProps & { scrollable?: boolean }) => {
  const { css } = useFela({ scrollable });
  const cx = `${css([rule, scrollableRule])} bs-modal-body ${className}`.trim();
  return (
    <div data-testid="modal-body" className={cx} {...props}>
      {children}
    </div>
  );
};
