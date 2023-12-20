import { ClipboardButton } from "../../../../../Home/components/Content/components/CodeSnippet/ClipboardButton";
import { CodeSnippet } from "../../../../../Home/components/Content/components/CodeSnippet/CodeSnippet";
import { Highlight } from "../../../../../Home/components/Content/components/CodeSnippet/Highlight";

export const HtmlImportMapSnippet = () => (
  <CodeSnippet>
    {" "}
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
              token: "\n",
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
            {
              token: ">",
              isAttrValue: false,
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
              token: "\n",
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
              token: " ",
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
              token: "link",
              isAttrValue: false,
            },
            {
              token: "\n",
              isAttrValue: false,
            },
            {
              token: "      ",
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
              token: "\n",
              isAttrValue: false,
            },
            {
              token: "      ",
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
              token: "\n",
              isAttrValue: false,
            },
            {
              token: "      ",
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
              token: "\n",
              isAttrValue: false,
            },
            {
              token: "      ",
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
              token: "\n",
              isAttrValue: false,
            },
            {
              token: "    ",
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
              token: "\n",
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
              token: "Hello, modularity!",
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
              token: "\n",
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
            },
          ],
        },
        {
          tokens: [
            {
              token: "\n",
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
              token: "\n",
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
              token: "Hello, modularity!",
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
              token: "\n",
              isAttrValue: false,
            },
          ],
        },
        {
          tokens: [
            {
              token: "      ",
              isAttrValue: false,
            },
            {
              token: "<",
              isAttrValue: false,
            },
            {
              token: "button",
              isAttrValue: false,
            },
            {
              token: " ",
              isAttrValue: false,
            },
            {
              token: "id",
              isAttrValue: false,
            },
            {
              token: "=",
              isAttrValue: false,
            },
            {
              token: '"popoverButton"',
              isAttrValue: true,
            },
            {
              token: "\n",
              isAttrValue: false,
            },
            {
              token: "      ",
            },
            {
              token: "type",
              isAttrValue: false,
            },
            {
              token: "=",
              isAttrValue: false,
            },
            {
              token: '"button"',
              isAttrValue: true,
            },
            {
              token: "class",
              isAttrValue: false,
            },
            {
              token: "=",
              isAttrValue: false,
            },
            {
              token: '"btn btn-primary btn-lg"',
              isAttrValue: true,
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
              token: "      ",
              isAttrValue: false,
            },
            {
              token: "data-bs-toggle",
              isAttrValue: false,
            },
            {
              token: "=",
              isAttrValue: false,
            },
            {
              token: '"popover"',
              isAttrValue: false,
            },
          ],
        },
        {
          tokens: [
            {
              token: "\n",
              isAttrValue: false,
            },
          ],
        },
        {
          tokens: [
            {
              token: "      ",
              isAttrValue: false,
            },
            {
              token: "title",
              isAttrValue: false,
            },
            {
              token: "=",
              isAttrValue: false,
            },
            {
              token: '"ESM in Browser"',
              isAttrValue: false,
            },
          ],
        },
        {
          tokens: [
            {
              token: "\n",
              isAttrValue: false,
            },
          ],
        },
        {
          tokens: [
            {
              token: "      ",
              isAttrValue: false,
            },
            {
              token: "title",
              isAttrValue: false,
            },
            {
              token: "=",
              isAttrValue: false,
            },
            {
              token: '"Bang!"',
              isAttrValue: false,
            },
          ],
        },
        {
          tokens: [
            {
              token: "\n",
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
              token: ">",
              isAttrValue: false,
            },
            {
              token: "Custom popover",
              isAttrValue: false,
            },
          ],
        },
        {
          tokens: [
            {
              token: "\n",
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
              token: "</",
              isAttrValue: false,
            },
            {
              token: "button",
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
              token: "\n",
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
              token: "type",
              isAttrValue: false,
            },
            {
              token: "=",
              isAttrValue: false,
            },
            {
              token: '"importmap"',
              isAttrValue: true,
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
              token: "\n",
              isAttrValue: false,
            },
          ],
        },
      ]}
    />
    <Highlight
      language="js"
      lines={[
        {
          tokens: [
            {
              token: "    ",
              isAttrValue: false,
            },
            {
              token: "{",
              isAttrValue: false,
            },
          ],
        },
        {
          tokens: [
            {
              token: "\n",
              isAttrValue: false,
            },
          ],
        },
        {
          tokens: [
            {
              token: "      ",
              isAttrValue: false,
            },
            {
              token: '"imports"',
              isAttrValue: false,
            },
            {
              token: " ",
              isAttrValue: false,
            },
            {
              token: "{",
              isAttrValue: false,
            },
          ],
        },
        {
          tokens: [
            {
              token: "\n",
              isAttrValue: false,
            },
          ],
        },
        {
          tokens: [
            {
              token: "        ",
              isAttrValue: false,
            },
            {
              token: '"@popperjs/core"',
              isAttrValue: false,
            },
            {
              token: ":",
              isAttrValue: false,
            },
            {
              token: " ",
              isAttrValue: false,
            },
            {
              token:
                '"https://cdn.jsdelivr.net/npm/@popperjs/core@2.11.8/dist/esm/popper.min.js"',
              isAttrValue: false,
            },
            {
              token: ",",
              isAttrValue: false,
            },
          ],
        },
        {
          tokens: [
            {
              token: "\n",
              isAttrValue: false,
            },
          ],
        },
        {
          tokens: [
            {
              token: "        ",
              isAttrValue: false,
            },
            {
              token: '"bootstrap"',
              isAttrValue: false,
            },
            {
              token: ":",
              isAttrValue: false,
            },
            {
              token: " ",
              isAttrValue: false,
            },
            {
              token:
                '"https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/js/bootstrap.esm.min.js"',
              isAttrValue: false,
            },
          ],
        },
        {
          tokens: [
            {
              token: "\n",
              isAttrValue: false,
            },
          ],
        },
        {
          tokens: [
            {
              token: "\n",
              isAttrValue: false,
            },
          ],
        },
        {
          tokens: [
            {
              token: "      ",
              isAttrValue: false,
            },
            {
              token: "}",
            },
          ],
        },
        {
          tokens: [
            {
              token: "\n",
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
              token: "}",
            },
          ],
        },
      ]}
    />
    <Highlight
      language="html"
      lines={[
        {
          tokens: [
            {
              token: "\n",
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
              token: "\n",
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
              token: "type",
              isAttrValue: false,
            },
            {
              token: "=",
              isAttrValue: false,
            },
            {
              token: '"module"',
              isAttrValue: true,
            },
          ],
        },
      ]}
    />
    <Highlight
      language="js"
      lines={[
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
              token: "      ",
            },
            {
              token: "import",
            },
            {
              token: " ",
            },
            {
              token: "*",
            },
            {
              token: " ",
            },
            {
              token: "as",
            },
            {
              token: " ",
            },
            {
              token: "bootstrap",
            },
            {
              token: " ",
            },
            {
              token: "bootstrap",
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
              token: "      ",
            },
            {
              token: "new",
            },
            {
              token: " ",
            },
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
              token: "(",
            },
            {
              token: "document",
            },
            {
              token: ".",
            },
            {
              token: "getElementById",
            },
            {
              token: "(",
            },
            {
              token: "'popoverButton'",
            },
            {
              token: ")",
            },
            {
              token: ")",
            },
          ],
        },
      ]}
    />
    <Highlight
      language="html"
      lines={[
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
              token: "    ",
            },
            {
              token: "</",
            },
            {
              token: "script",
            },
            {
              token: ">",
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
              token: "</",
            },
            {
              token: "body",
            },
            {
              token: ">",
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
              token: "</",
            },
            {
              token: "html",
            },
            {
              token: ">",
            },
          ],
        },
      ]}
    />
  </CodeSnippet>
);
