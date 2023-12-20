import { useFela } from "react-fela";
import { CodeSnippet } from "../../../../../Home/components/Content/components/CodeSnippet/CodeSnippet";
import { Highlight } from "../../../../../Home/components/Content/components/CodeSnippet/Highlight";
import { HighlightToolbar } from "./HighlightToolbar";

const exampleSnippetRule = () => ({
  margin: "0 -1.5rem 1rem",
  marginBottom: "1rem",
  borderStyle: "solid",
  borderColor: "#dee2e6",
  "@media (min-width: 768px)": {
    marginRight: 0,
    marginLeft: 0,
    borderWidth: "1px",
    borderRadius: "0.375rem",
  },
});

export const SanitizerSnippet = () => {
  const { css } = useFela();
  return (
    <CodeSnippet
      className={`${css(
        exampleSnippetRule,
      )} bd-file-ref bd-example-snippet bd-code-snippet`}
    >
      <HighlightToolbar />
      <Highlight
        className={css({ borderTopLeftRadius: 0, borderTopRightRadius: 0 })}
        language="js"
        lines={[
          {
            tokens: [
              {
                token: "const", // ARIA_ATTRIBUTE_PATTERN = /^aria-[\w-]*$/i'
              },
              {
                token: " ",
              },
              {
                token: "ARIA_ATTRIBUTE_PATTERN",
              },
              {
                token: " ",
              },
              {
                token: "=",
              },
              {
                token: " ",
              },
              {
                token: "/^aria-[w-]*$/i",
              },
            ],
          },
          {
            tokens: [
              {
                token: "export",
              },
              {
                token: " ",
              },
              {
                token: "const",
              },
              {
                token: "DefaultAllowlist",
              },
              {
                token: " ",
              },
              {
                token: "=",
              },
              {
                token: " ",
              },
              {
                token: "{",
              },
            ],
          },
          {
            tokens: [
              {
                token: "\n",
              },
            ],
          },
          {
            tokens: [
              {
                token: "  ",
              },
              {
                token:
                  "// Global attributes allowed on any supplied element below.",
              },
              {
                token: "*",
              },
              {
                token: ":",
              },
              {
                token: " ",
              },
              {
                token: "[",
                // class', 'dir', 'id', 'lang', 'role', ARIA_ATTRIBUTE_PATTERN],'
              },
              {
                token: "'class'",
              },
              {
                token: " ",
              },
              {
                token: "'dir'",
              },
              {
                token: " ",
              },
              {
                token: "'id'",
              },
              {
                token: " ",
              },
              {
                token: "'lang'",
              },
              {
                token: " ",
              },
              {
                token: "'role'",
              },
              {
                token: " ",
              },
              {
                token: "ARIA_ATTRIBUTE_PATTERN",
              },
            ],
          },
          {
            tokens: [
              {
                token: "\n",
              },
            ],
          },
          {
            tokens: [
              {
                token: "a",
              },
              {
                token: ":",
              },
              {
                token: " ",
              },
              {
                token: "[",
              },
              {
                token: "'target'",
              },
              {
                token: ",",
              },
              {
                token: " ",
              },
              {
                token: "'href'",
              },
              {
                token: ",",
              },
              {
                token: " ",
              },
              {
                token: "'title'",
              },
              {
                token: ",",
              },
              {
                token: " ",
              },
              {
                token: "'rel'",
              },
            ],
          },
          {
            tokens: [
              {
                token: "\n",
              },
            ],
          },
          {
            tokens: [
              {
                token: "area",
              },
              {
                token: ":",
              },
              {
                token: " ",
              },
              {
                token: "[",
              },
              {
                token: "]",
              },
            ],
          },
          {
            tokens: [
              {
                token: "\n",
              },
            ],
          },
          {
            tokens: [
              {
                token: "b",
              },
              {
                token: ":",
              },
              {
                token: " ",
              },
              {
                token: "[",
              },
              {
                token: "]",
              },
            ],
          },
          {
            tokens: [
              {
                token: "\n",
              },
            ],
          },
          {
            tokens: [
              {
                token: "br",
              },
              {
                token: ":",
              },
              {
                token: " ",
              },
              {
                token: "[",
              },
              {
                token: "]",
              },
            ],
          },
          {
            tokens: [
              {
                token: "\n",
              },
            ],
          },
          {
            tokens: [
              {
                token: "col",
              },
              {
                token: ":",
              },
              {
                token: " ",
              },
              {
                token: "[",
              },
              {
                token: "]",
              },
            ],
          },
          {
            tokens: [
              {
                token: "\n",
              },
            ],
          },
          {
            tokens: [
              {
                token: "code",
              },
              {
                token: ":",
              },
              {
                token: " ",
              },
              {
                token: "[",
              },
              {
                token: "]",
              },
            ],
          },
          {
            tokens: [
              {
                token: "\n",
              },
            ],
          },
          {
            tokens: [
              {
                token: "div",
              },
              {
                token: ":",
              },
              {
                token: " ",
              },
              {
                token: "[",
              },
              {
                token: "]",
              },
            ],
          },
          {
            tokens: [
              {
                token: "\n",
              },
            ],
          },
          {
            tokens: [
              {
                token: "em",
              },
              {
                token: ":",
              },
              {
                token: " ",
              },
              {
                token: "[",
              },
              {
                token: "]",
              },
            ],
          },
          {
            tokens: [
              {
                token: "\n",
              },
            ],
          },
          {
            tokens: [
              {
                token: "hr",
              },
              {
                token: ":",
              },
              {
                token: " ",
              },
              {
                token: "[",
              },
              {
                token: "]",
              },
            ],
          },
          {
            tokens: [
              {
                token: "\n",
              },
            ],
          },
          {
            tokens: [
              {
                token: "h1",
              },
              {
                token: ":",
              },
              {
                token: " ",
              },
              {
                token: "[",
              },
              {
                token: "]",
              },
            ],
          },
          {
            tokens: [
              {
                token: "\n",
              },
            ],
          },
          {
            tokens: [
              {
                token: "h2",
              },
              {
                token: ":",
              },
              {
                token: " ",
              },
              {
                token: "[",
              },
              {
                token: "]",
              },
            ],
          },
          {
            tokens: [
              {
                token: "\n",
              },
            ],
          },
          {
            tokens: [
              {
                token: "h3",
              },
              {
                token: ":",
              },
              {
                token: " ",
              },
              {
                token: "[",
              },
              {
                token: "]",
              },
            ],
          },
          {
            tokens: [
              {
                token: "\n",
              },
            ],
          },
          {
            tokens: [
              {
                token: "h4",
              },
              {
                token: ":",
              },
              {
                token: " ",
              },
              {
                token: "[",
              },
              {
                token: "]",
              },
            ],
          },
          {
            tokens: [
              {
                token: "\n",
              },
            ],
          },
          {
            tokens: [
              {
                token: "h5",
              },
              {
                token: ":",
              },
              {
                token: " ",
              },
              {
                token: "[",
              },
              {
                token: "]",
              },
            ],
          },
          {
            tokens: [
              {
                token: "\n",
              },
            ],
          },
          {
            tokens: [
              {
                token: "h6",
              },
              {
                token: ":",
              },
              {
                token: " ",
              },
              {
                token: "[",
              },
              {
                token: "]",
              },
            ],
          },
          {
            tokens: [
              {
                token: "\n",
              },
            ],
          },
          {
            tokens: [
              {
                token: "i",
              },
              {
                token: ":",
              },
              {
                token: " ",
              },
              {
                token: "[",
              },
              {
                token: "]",
              },
            ],
          },
          {
            tokens: [
              {
                token: "\n",
              },
            ],
          },
          {
            tokens: [
              {
                token: "img",
              },
              {
                token: ":",
              },
              {
                token: " ",
              },
              {
                token: "[",
              },
              {
                token: "'src'",
              },
              {
                token: ",",
              },
              {
                token: " ",
              },
              {
                token: "'srcset'",
              },
              {
                token: ",",
              },
              {
                token: " ",
              },
              {
                token: "'alt'",
              },
              {
                token: ",",
              },
              {
                token: " ",
              },
              {
                token: " ",
              },
              {
                token: "'title'",
              },
              {
                token: ",",
              },
              {
                token: " ",
              },
              {
                token: " ",
              },
              {
                token: "'width'",
              },
              {
                token: ",",
              },
              {
                token: " ",
              },
              {
                token: " ",
              },
              {
                token: "'height'",
              },
              {
                token: "]",
              },
            ],
          },
          {
            tokens: [
              {
                token: "li",
              },
              {
                token: ":",
              },
              {
                token: " ",
              },
              {
                token: "[",
              },
              {
                token: "]",
              },
            ],
          },
          {
            tokens: [
              {
                token: "ol",
              },
              {
                token: ":",
              },
              {
                token: " ",
              },
              {
                token: "[",
              },
              {
                token: "]",
              },
            ],
          },
          {
            tokens: [
              {
                token: "p",
              },
              {
                token: ":",
              },
              {
                token: " ",
              },
              {
                token: "[",
              },
              {
                token: "]",
              },
            ],
          },
          {
            tokens: [
              {
                token: "pre",
              },
              {
                token: ":",
              },
              {
                token: " ",
              },
              {
                token: "[",
              },
              {
                token: "]",
              },
            ],
          },
          {
            tokens: [
              {
                token: "s",
              },
              {
                token: ":",
              },
              {
                token: " ",
              },
              {
                token: "[",
              },
              {
                token: "]",
              },
            ],
          },
          {
            tokens: [
              {
                token: "small",
              },
              {
                token: ":",
              },
              {
                token: " ",
              },
              {
                token: "[",
              },
              {
                token: "]",
              },
            ],
          },
          {
            tokens: [
              {
                token: "span",
              },
              {
                token: ":",
              },
              {
                token: " ",
              },
              {
                token: "[",
              },
              {
                token: "]",
              },
            ],
          },
          {
            tokens: [
              {
                token: "sub",
              },
              {
                token: ":",
              },
              {
                token: " ",
              },
              {
                token: "[",
              },
              {
                token: "]",
              },
            ],
          },
          {
            tokens: [
              {
                token: "sup",
              },
              {
                token: ":",
              },
              {
                token: " ",
              },
              {
                token: "[",
              },
              {
                token: "]",
              },
            ],
          },
          {
            tokens: [
              {
                token: "strong",
              },
              {
                token: ":",
              },
              {
                token: " ",
              },
              {
                token: "[",
              },
              {
                token: "]",
              },
            ],
          },
          {
            tokens: [
              {
                token: "u",
              },
              {
                token: ":",
              },
              {
                token: " ",
              },
              {
                token: "[",
              },
              {
                token: "]",
              },
            ],
          },
          {
            tokens: [
              {
                token: "ul",
              },
              {
                token: ":",
              },
              {
                token: " ",
              },
              {
                token: "[",
              },
              {
                token: "]",
              },
            ],
          },
        ]}
      />
    </CodeSnippet>
  );
};
