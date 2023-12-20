import { ClipboardButton } from "../../../../../Home/components/Content/components/CodeSnippet/ClipboardButton";
import { CodeSnippet } from "../../../../../Home/components/Content/components/CodeSnippet/CodeSnippet";
import { Highlight } from "../../../../../Home/components/Content/components/CodeSnippet/Highlight";

export const JquerySnippet = () => (
  <CodeSnippet>
    {" "}
    <ClipboardButton />
    <Highlight
      language="js"
      lines={[
        {
          tokens: [
            {
              token: "// to enable tooltips with the default configuration",
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
              token: "$",
            },
            {
              token: "'",
            },
            {
              token: "(",
            },
            {
              token: '[data-bs-toggle="tooltip"]',
            },
            {
              token: "'",
            },
            {
              token: ")",
            },
            {
              token: ".",
            },
            {
              token: "tooltip",
            },
            {
              token: "(",
            },
            {
              token: ")",
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
              token: "\n",
            },
          ],
        },
        {
          tokens: [
            {
              token: "$",
            },
            {
              token: "(",
            },
            {
              token: "'",
            },
            {
              token: '[data-bs-toggle="tooltip"]',
            },
            {
              token: "'",
            },
            {
              token: ")",
            },
            {
              token: ".",
            },
            {
              token: "tooltip",
            },
            {
              token: "(",
            },
            {
              token: "{",
            },
          ],
        },
        {
          tokens: [
            {
              token: "  ",
            },
            {
              token: "boundary",
            },
            {
              token: ":",
            },
            {
              token: " ",
            },
            {
              token: "'clippingParents'",
            },
            {
              token: ",",
            },
          ],
        },
        {
          tokens: [
            {
              token: "  ",
            },
            {
              token: "customClass",
            },
            {
              token: ":",
            },
            {
              token: " ",
            },
            {
              token: "'myClass'",
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
              token: "}",
            },
            {
              token: ")",
            },
          ],
        },
        {
          tokens: [
            {
              token: "// to trigger the `show` method",
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
              token: "$",
              // ('#myTooltip').tooltip('show')'
            },
            {
              token: "(",
            },
            {
              token: "'#myTooltip'",
            },
            {
              token: ".",
            },
            {
              token: "tooltip",
            },
            {
              token: "'show'",
            },
          ],
        },
      ]}
    />
  </CodeSnippet>
);
