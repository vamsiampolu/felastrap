import { useFela } from "react-fela";
import { DocSearchKey } from "./Key";

const docSearchKeys = () => ({
  minWidth: 0,
  padding: "0 0.125rem 0 0.25rem",
  backgroundColor: "rgba(0, 0, 0, 0.25)",
  borderRadius: "0.25rem",
  display: "flex",
});

export const DocSearchKeys = () => {
  const { css } = useFela();
  return (
    <span className={`${css(docSearchKeys)} DocSearch-Button-Keys`}>
      <DocSearchKey>⌘</DocSearchKey>
      <DocSearchKey>K</DocSearchKey>
    </span>
  );
};
