import { ComponentPropsWithoutRef } from "react";
import { useFela } from "react-fela";

const tocListRule = () => ({
  paddingLeft: 0,
  marginBottom: 0,
  listStyle: "none",
});

export const TocList = ({ children }: ComponentPropsWithoutRef<"ul">) => {
  const { css } = useFela();
  return <ul className={css(tocListRule)}>{children}</ul>;
};
