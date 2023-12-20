import { ClipboardButton } from "../../../../../Home/components/Content/components/CodeSnippet/ClipboardButton";
import { CodeSnippet } from "../../../../../Home/components/Content/components/CodeSnippet/CodeSnippet";
import { Highlight } from "../../../../../Home/components/Content/components/CodeSnippet/Highlight";

export const GetInstanceSnippet = () => (
  <CodeSnippet>
    {" "}
    <ClipboardButton />
    <Highlight
      language="js"
      lines={[
        {
          tokens: [
            {
              token: "bootstrap",
            },
            {
              token: ".",
            },
            {
              token: "Popover",
            },
            {
              token: ".",
            },
            {
              token: "getInstance",
            },
            {
              token: "(",
            },
            {
              token: "myPopoverEl",
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
