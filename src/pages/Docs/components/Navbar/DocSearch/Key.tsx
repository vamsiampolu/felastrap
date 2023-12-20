import { ReactNode } from "react";
import { useFela } from "react-fela";

const docSearchKey = () => ({
  top: 0,
  width: "auto",
  height: "1.25rem",
  paddingRight: "0.125rem",
  paddingLeft: "0.125rem",
  marginRight: 0,
  fontSize: "0.875rem",
  background: "none",
  boxShadow: "none",
});

export const DocSearchKey = ({ children }: { children: ReactNode }) => {
  const { css } = useFela();
  return (
    <kbd className={`${css(docSearchKey)} DocSearch-Button-Key`}>
      {children}
    </kbd>
  );
};
