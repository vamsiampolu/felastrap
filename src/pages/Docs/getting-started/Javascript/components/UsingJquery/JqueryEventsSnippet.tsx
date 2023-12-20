import { ClipboardButton } from "../../../../../Home/components/Content/components/CodeSnippet/ClipboardButton";
import { CodeSnippet } from "../../../../../Home/components/Content/components/CodeSnippet/CodeSnippet";
import { Highlight } from "../../../../../Home/components/Content/components/CodeSnippet/Highlight";

export const JQueryEventsSnippet = () => (
  <CodeSnippet>
    {" "}
    <ClipboardButton />
    <Highlight
      language="js"
      lines={[
        {
          tokens: [
            {
              token: "$",
            },
            {
              token: "(",
            },
            {
              token: "'#myTab a'",
            },
            {
              token: ")",
            },
            {
              token: ".",
            },
            {
              token: "on",
            },
            {
              token: "(",
            },
            {
              token: "'shown.bs.tab'",
            },
            {
              token: ",",
            },
            {
              token: " ",
            },
            {
              token: "(",
            },
            {
              token: ")",
            },
            {
              token: " ",
            },
            {
              token: "=>",
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
              token: "// do something...",
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
