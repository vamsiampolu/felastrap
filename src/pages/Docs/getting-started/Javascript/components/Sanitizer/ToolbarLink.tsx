import { useFela } from "react-fela";
import { Link } from "../../../../../../components/Link/Link";

const toolbarLink = () => ({
  textDecorationColor: "rgba(108,117,125, 0)",
  fontFamily:
    'SFMono-Regular,Menlo,Monaco,Consolas,"Liberation Mono","Courier New",monospace',
  color: "rgba(108,117,125, 1)",
  fontSize: "0.875em",
  ":hover": {
    color: "rgba(86,94,100, 1)",
    textDecorationColor: "rgba(86,94,100, 1)",
  },
});

export const SanitizerJsLink = () => {
  const { css } = useFela();
  return (
    <Link
      className={`${css(toolbarLink)} highlight-toolbar-link`}
      href="https://github.com/twbs/bootstrap/blob/v5.3.2/js/src/util/sanitizer.js"
    >
      js{"/"}src{"/"}util{"/"}sanitizer{"."}js
    </Link>
  );
};
