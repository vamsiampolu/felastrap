import { ClipboardButton } from "../../../../../Home/components/Content/components/CodeSnippet/ClipboardButton";
import { CodeSnippet } from "../../../../../Home/components/Content/components/CodeSnippet/CodeSnippet";
import { Highlight } from "../../../../../Home/components/Content/components/CodeSnippet/Highlight";

export const DefaultSettingsSnippet = () => (
  <CodeSnippet>
    {" "}
    <ClipboardButton />
    <Highlight
      language="js"
      lines={[
        {
          tokens: [
            {
              token: `// changes default for the modal plugin's \`keyboard\` option to false`,
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
              token: "bootstrap",
            },
            {
              token: ".",
            },
            {
              token: "Modal",
            },
            {
              token: ".",
            },
            {
              token: "Default",
            },
            {
              token: ".",
            },
            {
              token: "keyboard",
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
              token: "false",
            },
          ],
        },
      ]}
    />
  </CodeSnippet>
);
