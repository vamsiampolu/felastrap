import { useFela } from "react-fela";
import { OffcanvasTitle } from "./Title";
import { ReactNode } from "react";
import { CloseButton } from "./CloseButton";
import { CSSProperties } from "fela";

const rule = ({ isOpen = false }) => ({
  display: isOpen ? "flex" : "none",
  alignItems: "center",
  justifyContent: "space-between",
  padding: "1rem 1rem",
});

export type OffcanvasHeaderProps = {
  className?: string;
  isOpen?: boolean;
  titleId: string;
  title: ReactNode;
  style: CSSProperties;
  onClose: () => void;
  showCloseButton?: boolean;
};

export const OffcanvasHeader = ({
  className = "",
  isOpen = false,
  showCloseButton = true,
  titleId,
  style,
  title,
  onClose,
}: OffcanvasHeaderProps) => {
  const { css } = useFela({ isOpen });
  const cx = `${css(rule)} offcanvas-header ${className}`.trim();
  return (
    <div data-testid="offcanvas-header" style={style} className={cx}>
      <OffcanvasTitle id={titleId}>{title}</OffcanvasTitle>
      {showCloseButton && <CloseButton onClick={onClose} />}
    </div>
  );
};
