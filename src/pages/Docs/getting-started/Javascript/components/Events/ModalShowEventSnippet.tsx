import { ClipboardButton } from "../../../../../Home/components/Content/components/CodeSnippet/ClipboardButton";
import { CodeSnippet } from "../../../../../Home/components/Content/components/CodeSnippet/CodeSnippet";
import { Highlight } from "../../../../../Home/components/Content/components/CodeSnippet/Highlight";

export const ModalShowEventSnippet = () => (
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
              token: "myModal",
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
              token: "#myModal",
            },
            {
              token: ")",
            },
          ],
        },
        {
          tokens: [
            {
              token: "myModal",
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
              token: "'",
            },
            {
              token: "'show.bs.modal'",
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
              token: "return",
            },
            {
              token: " ",
            },
            {
              token: "event",
            },
            {
              token: ".",
            },
            {
              token: "preventDefault",
            },
            {
              token: "(",
            },
            {
              token: ")",
            },
            {
              token: "// stops modal from being shown",
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
