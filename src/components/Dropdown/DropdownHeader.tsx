import { useFela } from "react-fela";
import { Header, type HeaderProps } from "../Header/Header";

export const DropdownHeader = ({
  className = "",
  as = "h6",
  children,
  ...other
}: Partial<HeaderProps>) => {
  const { css } = useFela();
  const cx = `${css({
    color: "#6c757d",
    display: "block",
    fontSize: "0.875rem",
    marginBottom: 0,
    padding: "0.5rem 1rem",
    whiteSpace: "nowrap",
  })} dropdown-header`;

  return (
    <li data-testid="dropdown-header-item">
      <Header
        data-testid="dropdown-header"
        as={as}
        className={`${cx} ${className || ""}`}
        {...other}
      >
        {children}
      </Header>
    </li>
  );
};
