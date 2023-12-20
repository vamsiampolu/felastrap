import { ClipboardButton } from "../../../../../Home/components/Content/components/CodeSnippet/ClipboardButton";
import { CodeSnippet } from "../../../../../Home/components/Content/components/CodeSnippet/CodeSnippet";
import { Highlight } from "../../../../../Home/components/Content/components/CodeSnippet/Highlight";

export const Structure = () => (
  <CodeSnippet>
    {" "}
    <ClipboardButton />
    <Highlight
      language="text"
      lines={[
        {
          tokens: [
            {
              token: "bootstrap/",
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
              token: "├──",
            },
            {
              token: " ",
            },
            {
              token: "dist/",
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
              token: "│",
            },
            {
              token: "   ",
            },
            {
              token: "├──",
            },
            {
              token: " ",
            },
            {
              token: "css/",
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
              token: "│   ",
            },
            {
              token: "├──",
            },
            {
              token: " ",
            },
            {
              token: "js/",
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
              token: "├──",
            },
            {
              token: " ",
            },
            {
              token: "site/",
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
              token: "│",
            },
            {
              token: "   ",
            },
            {
              token: "└──",
            },
            {
              token: "content/",
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
              token: "│",
            },
            {
              token: "      ",
            },
            {
              token: "└──",
            },
            {
              token: " ",
            },
            {
              token: "docs/",
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
              token: "│",
            },
            {
              token: "          ",
            },
            {
              token: "└──",
            },
            {
              token: " ",
            },
            {
              token: "5.3/",
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
              token: "│",
            },
            {
              token: "              ",
            },
            {
              token: "└──",
            },
            {
              token: " ",
            },
            {
              token: "examples/",
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
              token: "├──",
            },
            {
              token: " ",
            },
            {
              token: "js/",
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
              token: "└──",
            },
            {
              token: " ",
            },
            {
              token: "scss/",
            },
          ],
        },
      ]}
    />
  </CodeSnippet>
);
