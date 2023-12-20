import { ClipboardButton } from "../../../../../../Home/components/Content/components/CodeSnippet/ClipboardButton";
import { CodeSnippet } from "../../../../../../Home/components/Content/components/CodeSnippet/CodeSnippet";
import { Highlight } from "../../../../../../Home/components/Content/components/CodeSnippet/Highlight";

export const DisposeSnippet = () => (
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
              token: "'#myModal'",
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
              token: "myModal",
            },
            {
              token: ".",
            },
            {
              token: "hide",
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
              token: "'shown.bs.hidden'",
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
              token: "  ",
            },
            {
              token: "myModal",
            },
            {
              token: ".",
            },
            {
              token: "dispose",
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
