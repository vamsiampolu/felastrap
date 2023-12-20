import { ClipboardButton } from "../../../../../Home/components/Content/components/CodeSnippet/ClipboardButton";
import { CodeSnippet } from "../../../../../Home/components/Content/components/CodeSnippet/CodeSnippet";
import { Highlight } from "../../../../../Home/components/Content/components/CodeSnippet/Highlight";

export const ScriptsSnippet = () => (
  <CodeSnippet>
    {" "}
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
              token: "script",
              isAttrValue: false,
            },
            {
              token: "\n",
              isAttrValue: false,
            },
            {
              token: "  ",
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
                '"https://cdn.jsdelivr.net/npm/@popperjs/core@2.11.8/dist/umd/popper.min.js"',
              isAttrValue: true,
            },
            {
              token: "\n",
              isAttrValue: false,
            },
            {
              token: "  ",
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
                '"sha384-I7E8VVD/ismYTF4hNIPjVp/Zjvgyol6VFvRkX/vR+Vc4jQkC+hVqc2pM8ODewa9r"',
              isAttrValue: true,
            },
            {
              token: "\n",
              isAttrValue: false,
            },
            {
              token: "  ",
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
              isAttrValue: true,
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
              token: "<",
              isAttrValue: false,
            },
            {
              token: "script",
              isAttrValue: false,
            },
            {
              token: "\n",
              isAttrValue: false,
            },
            {
              token: "  ",
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
                '"https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/js/bootstrap.min.js"',
              isAttrValue: true,
            },
            {
              token: "\n",
              isAttrValue: false,
            },
            {
              token: "  ",
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
                '"sha384-BBtl+eGJRgqQAUMxJ7pMwbEyER4l1g+O15P+16Ep7Q9Q+zqX6gSbd85u4mG4QzX+"',
              isAttrValue: true,
            },
            {
              token: "\n",
              isAttrValue: false,
            },
            {
              token: "  ",
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
              isAttrValue: true,
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
      ]}
    />
  </CodeSnippet>
);
