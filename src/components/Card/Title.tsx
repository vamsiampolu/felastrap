import { useFela } from "react-fela";
import { Header, type HeaderProps } from "../Header/Header";
import { StyleProps } from "../common";

export type CardTitleProps = HeaderProps & { color?: string };

const rule = ({ color }: StyleProps<CardTitleProps>) => {
  return {
    color,
    marginBottom: "1rem",
  };
};

export const CardTitle = ({
  as = "h5",
  className = "",
  color = "#000",
  children,
  ...other
}: CardTitleProps) => {
  const { css } = useFela({ color });
  const cx = `${css(rule)} ${className || ""}`.trim();

  return (
    <Header data-testid="card-title" as={as} className={cx} {...other}>
      {children}
    </Header>
  );
};
