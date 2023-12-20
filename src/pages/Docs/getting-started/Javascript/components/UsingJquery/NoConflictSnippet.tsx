import { ClipboardButton } from "../../../../../Home/components/Content/components/CodeSnippet/ClipboardButton";
import { CodeSnippet } from "../../../../../Home/components/Content/components/CodeSnippet/CodeSnippet";
import { Highlight } from "../../../../../Home/components/Content/components/CodeSnippet/Highlight";

export const NoConflictSnippet = () => (
  <CodeSnippet>
    {" "}
    <ClipboardButton />
    <Highlight
      language="js"
      lines={[
        {
          tokens: [
            {
              token: "const",
            },
            {
              token: " ",
            },
            {
              token: "bootstrapButton",
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
              token: "$",
            },
            {
              token: ".",
            },
            {
              token: "fn",
            },
            {
              token: ".",
            },
            {
              token: "button",
            },
            {
              token: ".",
            },
            {
              token: "noConflict",
            },
            {
              token: "(",
            },
            {
              token: ")",
            },
            {
              token: "// return $.fn.button to previously assigned value",
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
              token: ".",
            },
            {
              token: "fn",
            },
            {
              token: ".",
            },
            {
              token: "bootstrapBtn",
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
              token: "bootstrapButton",
            },
            {
              token: "// give $().bootstrapBtn the Bootstrap functionality",
            },
          ],
        },
      ]}
    />
  </CodeSnippet>
);
