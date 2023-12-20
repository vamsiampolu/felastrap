import { ClipboardButton } from "../../../../../Home/components/Content/components/CodeSnippet/ClipboardButton";
import { CodeSnippet } from "../../../../../Home/components/Content/components/CodeSnippet/CodeSnippet";
import { Highlight } from "../../../../../Home/components/Content/components/CodeSnippet/Highlight";

export const GemFileSnippet = () => (
  <CodeSnippet>
    {" "}
    <ClipboardButton />
    <Highlight
      language="ruby"
      lines={[
        {
          tokens: [
            {
              token: "gem",
            },
            {
              token: " ",
            },
            {
              token: "'bootstrap'",
            },
            {
              token: ",",
            },
            {
              token: " ",
            },
            {
              token: "~ > 5.3.2",
            },
          ],
        },
      ]}
    />
  </CodeSnippet>
);
