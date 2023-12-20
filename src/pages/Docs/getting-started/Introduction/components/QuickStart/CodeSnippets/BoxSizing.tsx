import { ClipboardButton } from "../../../../../../Home/components/Content/components/CodeSnippet/ClipboardButton";
import { CodeSnippet } from "../../../../../../Home/components/Content/components/CodeSnippet/CodeSnippet";
import { Highlight } from "../../../../../../Home/components/Content/components/CodeSnippet/Highlight";

export const BoxSizing = () => (
  <CodeSnippet className="bd-code-snippet">
    <ClipboardButton />
    <Highlight
      language="scss"
      lines={[
        {
          tokens: [
            {
              token: ".",
              isKey: false,
              isValue: false,
            },
            {
              token: "selector-for-some-widget",
              isKey: false,
              isValue: false,
            },
            {
              token: "  ",
              isKey: false,
              isValue: false,
            },
            {
              token: "{",
              isKey: false,
              isValue: false,
            },
          ],
        },
        {
          tokens: [
            {
              token: "\n",
              isKey: false,
              isValue: false,
            },
          ],
        },
        {
          tokens: [
            {
              token: "    ",
              isKey: false,
              isValue: false,
            },
            {
              token: "box-sizing",
              isKey: true,
              isValue: false,
            },
            {
              token: ":",
              isKey: false,
              isValue: false,
            },
            {
              token: " ",
              isKey: false,
              isValue: false,
            },
            {
              token: "content-box",
              isKey: false,
              isValue: true,
            },
            {
              token: ";",
              isKey: false,
              isValue: false,
            },
          ],
        },
        {
          tokens: [
            {
              token: "\n",
              isKey: false,
              isValue: false,
            },
          ],
        },
        {
          tokens: [
            {
              token: "}",
              isKey: false,
              isValue: false,
            },
          ],
        },
      ]}
    />
  </CodeSnippet>
);
