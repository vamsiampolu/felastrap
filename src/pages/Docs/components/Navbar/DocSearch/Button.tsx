import { useFela } from "react-fela";
import { DocSearchIcon } from "./Icon";
import { DocSearchKeys } from "./Keys";

const docSearchRule = () => ({
  width: "100%",
  height: "38px",
  margin: 0,
  border: "1px solid rgba(255,255,255,0.4)",
  borderRadius: "0.375rem",
  alignItems: "center",
  background: "rgba(0,0,0,0.1)",
  color: "rgba(255,255,255,0.65)",
  cursor: "pointer",
  display: "flex",
  fontWeight: "500",
  justifyContent: "space-between",
  padding: "0 8px",
  userSelect: "none",
});

export const DocSearchButton = () => {
  const { css } = useFela();
  return (
    <button
      type="button"
      className={`${css(docSearchRule)} DocSearch-Button`}
      aria-label="Search"
    >
      <DocSearchIcon />
      <DocSearchKeys />
    </button>
  );
};
