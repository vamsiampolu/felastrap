import { ClipboardButton } from "../../../../../../Home/components/Content/components/CodeSnippet/ClipboardButton";
import { CodeSnippet } from "../../../../../../Home/components/Content/components/CodeSnippet/CodeSnippet";
import { Highlight } from "../../../../../../Home/components/Content/components/CodeSnippet/Highlight";

export const IncludeStyles = () => (
  <CodeSnippet className="bd-code-snippet">
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
              token: "<",
              isAttrValue: false,
            },
            {
              token: "link",
              isAttrValue: false,
            },
            {
              token: " ",
              isAttrValue: false,
            },
            {
              token: "href",
              isAttrValue: false,
            },
            {
              token: "=",
              isAttrValue: false,
            },
            {
              token:
                '"https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/css/bootstrap.min.css"',
              isAttrValue: true,
            },
            {
              token: " ",
              isAttrValue: false,
            },
            {
              token: "rel",
              isAttrValue: false,
            },
            {
              token: "=",
              isAttrValue: false,
            },
            {
              token: '"stylesheet"',
              isAttrValue: true,
            },
            {
              token: " ",
              isAttrValue: false,
            },
            {
              token: "integrity",
              isAttrValue: false,
            },
            {
              token: "=",
              isAttrValue: false,
            },
            {
              token:
                '"sha384-T3c6CoIi6uLrA9TneNEoa7RxnatzjcDSCmG1MXxSR1GAsXEV/Dwwykc2MPK8M2HN"',
              isAttrValue: true,
            },
            {
              token: "crossorigin",
              isAttrValue: false,
            },
            {
              token: "=",
              isAttrValue: false,
            },
            {
              token: '"anonymous"',
              isAttrValue: false,
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
              token: "    ",
              isAttrValue: false,
            },
            {
              token: "<",
              isAttrValue: false,
            },
            {
              token: "script",
              isAttrValue: false,
            },
            {
              token: " ",
              isAttrValue: false,
            },
            {
              token: "src",
              isAttrValue: false,
            },
            {
              token: "=",
              isAttrValue: false,
            },
            {
              token:
                '"https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/js/bootstrap.bundle.min.js"',
              isAttrValue: false,
            },
            {
              token: " ",
              isAttrValue: false,
            },
            {
              token: "integrity",
              isAttrValue: false,
            },
            {
              token: "=",
              isAttrValue: false,
            },
            {
              token:
                '"sha384-C6RzsynM9kWDrMNeT87bh95OGNyZPhcTNXj1NW7RuBCsyN/o0jlpcV8Qyq46cDfL"',
              isAttrValue: false,
            },
            {
              token: " ",
              isAttrValue: false,
            },
            {
              token: "crossorigin",
              isAttrValue: false,
            },
            {
              token: "=",
              isAttrValue: false,
            },
            {
              token: '"anonymous"',
              isAttrValue: false,
            },
            {
              token: ">",
              isAttrValue: false,
            },
            {
              token: "</",
              isAttrValue: false,
            },
            {
              token: "script",
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
