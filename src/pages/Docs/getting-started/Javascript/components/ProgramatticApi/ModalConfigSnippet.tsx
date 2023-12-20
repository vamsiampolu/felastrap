import { ClipboardButton } from "../../../../../Home/components/Content/components/CodeSnippet/ClipboardButton";
import { CodeSnippet } from "../../../../../Home/components/Content/components/CodeSnippet/CodeSnippet";
import { Highlight } from "../../../../../Home/components/Content/components/CodeSnippet/Highlight";

export const ModalConfigSnippet = () => (
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
              token: "'",
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
              token: "\n",
            },
          ],
        },
        {
          tokens: [
            {
              token: "const",
            },
            {
              token: " ",
            },
            {
              token: "modal",
            },
            {
              token: "=",
            },
            {
              token: " ",
            },
            {
              token: "new",
            },
            {
              token: " ",
            },
            {
              token: "bootstrap",
            },
            {
              token: ".",
            },
            {
              token: "Modal",
            },
            {
              token: "(",
            },
            {
              token: "myModalEl",
            },
            {
              token: ")",
            },
            {
              token: " ",
            },
            {
              token: "// initialized with defaults",
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
              token: "const",
            },
            {
              token: " ",
            },
            {
              token: "configObject",
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
            {
              token: " ",
            },
            {
              token: "keyboard",
            },
            {
              token: ":",
            },
            {
              token: " ",
            },
            {
              token: "false",
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
              token: "const",
            },
            {
              token: " ",
            },
            {
              token: "modal1",
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
              token: "new",
            },
            {
              token: " ",
            },
            {
              token: "bootstrap",
            },
            {
              token: ".",
            },
            {
              token: "Modal",
            },
            {
              token: "(",
            },
            {
              token: "myModalEl",
            },
            {
              token: ",",
            },
            {
              token: " ",
            },
            {
              token: "configObjectEl",
            },
            {
              token: ")",
            },
            {
              token: " ",
            },
            {
              token: "// initialized with no keyboard",
            },
          ],
        },
      ]}
    />
  </CodeSnippet>
);
