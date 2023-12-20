import { useFela } from "react-fela";
import { Header, HeaderProps } from "../../../../../components/Header/Header";

const rule = () => ({
  color: "#000",
  fontWeight: 600,
  lineHeight: 1.25,
  marginBottom: "1rem",
  marginTop: 0,
  fontSize: "calc(1.425rem + 2.1vw)",
  "@media (min-width: 1200px)": {
    fontSize: "3rem",
  },
});

export const SectionHeader = ({
  as = "h2",
  className = "",
  children,
  ...props
}: HeaderProps) => {
  const { css } = useFela();
  const cx = `${css(rule)} section-header ${className}`.trim();
  return (
    <Header as={as} className={cx} {...props}>
      {children}
    </Header>
  );
};
