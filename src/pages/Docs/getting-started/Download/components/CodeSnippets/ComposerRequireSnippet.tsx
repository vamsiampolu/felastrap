import { ClipboardButton } from "../../../../../Home/components/Content/components/CodeSnippet/ClipboardButton";
import { CodeSnippet } from "../../../../../Home/components/Content/components/CodeSnippet/CodeSnippet";
import { Highlight } from "../../../../../Home/components/Content/components/CodeSnippet/Highlight";

export const ComposerRequireSnippet = () => (
  <CodeSnippet>
    {" "}
    <ClipboardButton />
    <Highlight
      language="sh"
      lines={[
        {
          tokens: [
            {
              token: "composer require twbs/bootstrap:5.3.2",
            },
          ],
        },
      ]}
    />
  </CodeSnippet>
);
