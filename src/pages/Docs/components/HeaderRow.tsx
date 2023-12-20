import { useFela } from "react-fela";
import { ReactNode } from "react";
import { ViewOnGithub } from "./ViewOnGithub";
import { Header } from "../../../components/Header/Header";

const headerRule = () => ({
  fontSize: "calc(1.425rem + 2.1vw)",
  marginBottom: 0,
  "@media (min-width: 1200px)": {
    fontSize: "3rem",
  },
});

const headerRowRule = () => ({
  alignItems: "center",
  justifyContent: "space-between",
  "@media (min-width: 768px)": {
    display: "flex",
    flexDirection: "row-reverse",
  },
});

export const HeaderRow = ({
  className = "",
  children,
}: {
  className?: string;
  children: ReactNode;
}) => {
  const { css } = useFela();
  const cx = `${css(headerRowRule)} bd-intro-header-row ${className}`.trim();

  return (
    <div className={cx}>
      <ViewOnGithub />
      <Header as="h1" className={css(headerRule)} id="content">
        {children}
      </Header>
    </div>
  );
};
