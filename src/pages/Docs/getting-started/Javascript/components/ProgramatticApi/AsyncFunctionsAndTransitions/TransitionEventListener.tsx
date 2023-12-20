import { ClipboardButton } from "../../../../../../Home/components/Content/components/CodeSnippet/ClipboardButton";
import { CodeSnippet } from "../../../../../../Home/components/Content/components/CodeSnippet/CodeSnippet";
import { Highlight } from "../../../../../../Home/components/Content/components/CodeSnippet/Highlight";

export const TransitionEventListener = () => (
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
              token: "myCollapseEl",
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
              token: "document",
            },
            {
              token: ".",
            },
            {
              token: "querySelector",
            },
            {
              token: "(",
            },
            {
              token: "'#myCollapse'",
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
              token: "myCollapseEl",
            },
            {
              token: ".",
            },
            {
              token: "addEventListener",
            },
            {
              token: "(",
            },
            {
              token: "'shown.bs.collapse'",
            },
            {
              token: ",",
            },
            {
              token: " ",
            },
            {
              token: "event",
            },
            {
              token: " ",
            },
            {
              token: "=>",
            },
            {
              token: "(",
            },
            {
              token:
                "// Action to execute once the collapsible area is expanded",
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
      ]}
    />
  </CodeSnippet>
);
