import { ClipboardButton } from "../../../../../Home/components/Content/components/CodeSnippet/ClipboardButton";
import { CodeSnippet } from "../../../../../Home/components/Content/components/CodeSnippet/CodeSnippet";
import { Highlight } from "../../../../../Home/components/Content/components/CodeSnippet/Highlight";

export const YarnCodeSnippet = () => (
  <CodeSnippet>
    {" "}
    <ClipboardButton />
    <Highlight
      language="sh"
      lines={[
        {
          tokens: [
            {
              token: " ",
            },
            {
              token: "yarn add bootstrap@5.3.2",
            },
          ],
        },
      ]}
    />
  </CodeSnippet>
);
