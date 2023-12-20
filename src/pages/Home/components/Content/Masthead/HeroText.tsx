import { ReactNode } from "react";
import { useFela } from "react-fela";

export const HeroText = ({ children }: { children: ReactNode }) => {
  const { css } = useFela();
  const cx = css({
    marginBottom: "1rem",
    fontWeight: 600,
    lineHeight: 1,
  });
  return <h1 className={cx}>{children}</h1>;
};
