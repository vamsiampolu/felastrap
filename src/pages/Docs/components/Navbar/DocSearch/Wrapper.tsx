import { ReactNode } from "react";
import { useFela } from "react-fela";

const searchButtonRule = () => ({
  position: "relative",
  "@media (min-width: 1200px)": {
    width: "200px",
    marginLeft: "-140px",
  },
  "@media (min-width: 992px)": {
    position: "absolute !important",
    top: "0.65rem",
    left: "50%",
    width: "200px",
    marginLeft: "100px",
  },
});

export const DocSearchWrapper = ({ children }: { children: ReactNode }) => {
  const { css } = useFela();
  return (
    <div className={`${css({ display: "flex" })}`}>
      <div
        className={`${css(searchButtonRule)} bd-search`}
        id="docsearch"
        data-bd-docs-version="5.3"
      >
        {children}
      </div>
    </div>
  );
};
