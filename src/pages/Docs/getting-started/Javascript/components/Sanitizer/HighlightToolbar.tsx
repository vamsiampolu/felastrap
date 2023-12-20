import { useFela } from "react-fela";
import { SanitizerJsLink } from "./ToolbarLink";
import { ClipboardButton } from "../../../../../Home/components/Content/components/CodeSnippet/ClipboardButton";

const toolbarRule = () => ({
  backgroundColor: "#f8f9fa",
  display: "flex",
  alignItems: "center",
  paddingLeft: "1rem",
  paddingRight: "0.5rem",
  paddingTop: ".25rem!important",
  paddingBottom: ".25rem!important",
  borderBottom: "1px solid #dee2e6",
  "@media (min-width: 768px)": {
    borderTopLeftRadius: "0.375rem",
    borderTopRightRadius: "0.375rem",
  },
});

const clipboardBtnRule = () => ({
  display: "flex",
  marginLeft: "auto !important",
});

export const HighlightToolbar = () => {
  const { css } = useFela();
  return (
    <div className={`${css(toolbarRule)} highlight-toolbar`}>
      <SanitizerJsLink />
      <ClipboardButton className={css(clipboardBtnRule)} />
    </div>
  );
};
