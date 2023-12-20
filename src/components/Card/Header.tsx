import { useFela } from "react-fela";
import { DivProps, StyleProps } from "../common";
import { CSSProperties } from "fela";

export type CardHeaderProps = DivProps & Partial<{ hasImage?: boolean }>;

const rule = ({ hasImage = false }: StyleProps<CardHeaderProps>) => {
  const innerRadius = "calc(0.375rem - 1px)";

  const style: CSSProperties = {
    backgroundColor: "rgba(33, 37, 41, 0.03)",
    borderBottom: "1px solid rgba(0, 0, 0, 0.175)",
    color: "rgb(33,37,41)",
    padding: "0.5rem 1rem",
    marginBottom: 0,
  };

  if (!hasImage) {
    style.borderRadius = `${innerRadius} ${innerRadius}  0 0`;
  }

  return style;
};

export const CardHeader = ({
  children,
  className = "",
  hasImage = false,
  ...other
}: CardHeaderProps) => {
  const { css } = useFela({ hasImage });
  const cx = `${css([rule])} ${className || ""}`;
  return (
    <div data-testid="card-header" className={cx} {...other}>
      {children}
    </div>
  );
};
