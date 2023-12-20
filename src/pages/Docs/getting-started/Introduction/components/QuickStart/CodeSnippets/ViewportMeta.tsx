import { ClipboardButton } from "../../../../../../Home/components/Content/components/CodeSnippet/ClipboardButton";
import { CodeSnippet } from "../../../../../../Home/components/Content/components/CodeSnippet/CodeSnippet";
import { Highlight } from "../../../../../../Home/components/Content/components/CodeSnippet/Highlight";

export const ViewportMeta = () => (
  <CodeSnippet className="bd-code-snippet">
    <ClipboardButton />
    <Highlight
      language="html"
      lines={[
        {
          tokens: [
            {
              token: "<",
              isAttrValue: false,
            },
            {
              token: "meta",
              isAttrValue: false,
            },
            {
              token: " ",
              isAttrValue: false,
            },
            {
              token: "name",
              isAttrValue: false,
            },
            {
              token: "=",
              isAttrValue: false,
            },
            {
              token: '"viewport"',
              isAttrValue: true,
            },
            {
              token: " ",
              isAttrValue: false,
            },
            {
              token: "content",
              isAttrValue: false,
            },
            {
              token: "=",
              isAttrValue: false,
            },
            {
              token: '"width=device-width, initial-scale=1"',
              isAttrValue: true,
            },
            {
              token: ">",
              isAttrValue: false,
            },
          ],
        },
      ]}
    />
  </CodeSnippet>
);
