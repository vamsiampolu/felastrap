import { ClipboardButton } from "../../../../../../Home/components/Content/components/CodeSnippet/ClipboardButton";
import { CodeSnippet } from "../../../../../../Home/components/Content/components/CodeSnippet/CodeSnippet";
import { Highlight } from "../../../../../../Home/components/Content/components/CodeSnippet/Highlight";

export const CreateHtmlFile = () => (
  <CodeSnippet>
    <ClipboardButton />
    <Highlight
      language="html"
      lines={[
        {
          tokens: [
            {
              token: "<!doctype html>",
              isAttrValue: false,
            },
          ],
        },
        {
          tokens: [
            {
              token: "<",
              isAttrValue: false,
            },
            {
              token: "html",
              isAttrValue: false,
            },
            {
              token: " ",
              isAttrValue: false,
            },
            {
              token: "lang",
              isAttrValue: false,
            },
            {
              token: "=",
              isAttrValue: false,
            },
            {
              token: '"en"',
              isAttrValue: true,
            },
          ],
        },
        {
          tokens: [
            {
              token: "  ",
              isAttrValue: false,
            },
            {
              token: "<",
              isAttrValue: false,
            },
            {
              token: "head",
              isAttrValue: false,
            },
            {
              token: ">",
              isAttrValue: false,
            },
          ],
        },
        {
          tokens: [
            {
              token: "    ",
              isAttrValue: false,
            },
            {
              token: "<",
              isAttrValue: false,
            },
            {
              token: "meta",
              isAttrValue: false,
            },
            {
              token: "  ",
              isAttrValue: false,
            },
            {
              token: "charset",
              isAttrValue: false,
            },
            {
              token: "=",
              isAttrValue: false,
            },
            {
              token: '"utf-8"',
              isAttrValue: true,
            },
            {
              token: "/>",
              isAttrValue: false,
            },
          ],
        },
        {
          tokens: [
            {
              token: "    ",
              isAttrValue: false,
            },
            {
              token: "<",
              isAttrValue: false,
            },
            {
              token: "meta",
              isAttrValue: false,
            },
            {
              token: "  ",
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
              token: '"width=device-width, initial-scale=1"',
              isAttrValue: true,
            },
            {
              token: "/>",
              isAttrValue: false,
            },
          ],
        },
        {
          tokens: [
            {
              token: "    ",
              isAttrValue: false,
            },
            {
              token: "<",
              isAttrValue: false,
            },
            {
              token: "title",
              isAttrValue: false,
            },
            {
              token: ">",
              isAttrValue: false,
            },
            {
              token: "Bootstrap Demo",
              isAttrValue: false,
            },
            {
              token: "</",
              isAttrValue: false,
            },
            {
              token: "title",
              isAttrValue: false,
            },
            {
              token: ">",
              isAttrValue: false,
            },
          ],
        },
        {
          tokens: [
            {
              token: "  ",
              isAttrValue: false,
            },
            {
              token: "</",
              isAttrValue: false,
            },
            {
              token: "head",
              isAttrValue: false,
            },
            {
              token: ">",
              isAttrValue: false,
            },
          ],
        },
        {
          tokens: [
            {
              token: "  ",
              isAttrValue: false,
            },
            {
              token: "<",
              isAttrValue: false,
            },
            {
              token: "body",
              isAttrValue: false,
            },
            {
              token: ">",
              isAttrValue: false,
            },
          ],
        },
        {
          tokens: [
            {
              token: "    ",
              isAttrValue: false,
            },
            {
              token: "<",
              isAttrValue: false,
            },
            {
              token: "h1",
              isAttrValue: false,
            },
            {
              token: ">",
              isAttrValue: false,
            },
            {
              token: "Hello, world!",
              isAttrValue: false,
            },
            {
              token: "</",
              isAttrValue: false,
            },
            {
              token: "h1",
              isAttrValue: false,
            },
            {
              token: ">",
              isAttrValue: false,
            },
          ],
        },
        {
          tokens: [
            {
              token: "  ",
              isAttrValue: false,
            },
            {
              token: "</",
              isAttrValue: false,
            },
            {
              token: "body",
              isAttrValue: false,
            },
            {
              token: ">",
              isAttrValue: false,
            },
          ],
        },
        {
          tokens: [
            {
              token: "</",
              isAttrValue: false,
            },
            {
              token: "html",
              isAttrValue: false,
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
