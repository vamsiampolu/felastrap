import { useFela } from "react-fela";
import { Header, HeaderProps } from "../../../../../components/Header/Header";

export const ColumnHeader = ({
  className = "",
  as = "h3",
  children,
  ...props
}: HeaderProps) => {
  const { css } = useFela();
  const cx = `${css({ fontWeight: 600 })} column-header ${className}`;

  return (
    <Header as={as} className={cx} {...props}>
      {children}
    </Header>
  );
};
