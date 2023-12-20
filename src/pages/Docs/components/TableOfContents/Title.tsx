import { ReactNode } from "react";
import { useFela } from "react-fela";

const strongRule = {
  display: "none",
  "@media (min-width: 768px)": {
    display: "block",
  },
  marginLeft: "1rem",
  marginTop: "0.5rem",
  marginBottom: "0.5rem",
};

export const Title = ({ children }: { children: ReactNode }) => {
  const { css } = useFela();
  return <strong className={css(strongRule)}>{children}</strong>;
};
