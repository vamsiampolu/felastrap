import { ClipboardButton } from "../../../Home/components/Content/components/CodeSnippet/ClipboardButton";
import { CodeSnippet } from "../../../Home/components/Content/components/CodeSnippet/CodeSnippet";
import { Highlight } from "../../../Home/components/Content/components/CodeSnippet/Highlight";

export const VisuallyHidden = () => (
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
            },
            {
              token: "p",
            },
            {
              token: " ",
            },
            {
              token: "class",
            },
            {
              token: "=",
            },
            {
              token: '"text-danger"',
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
              token: "<",
            },
            {
              token: "span",
            },
            {
              token: " ",
            },
            {
              token: "class",
            },
            {
              token: "=",
            },
            {
              token: '"visually-hidden"',
            },
            {
              token: ">",
            },
            {
              token: "Danger:",
            },
            {
              token: " ",
            },
            {
              token: "</",
            },
            {
              token: "span",
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
              token: "This action is not reversible",
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
              token: "p",
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

export const VisuallyHiddenFocusable = () => (
  <CodeSnippet className="bd-code-snippet">
    {" "}
    <ClipboardButton />
    <Highlight
      language="html"
      lines={[
        {
          tokens: [
            {
              token: "<",
            },
            {
              token: "a",
            },
            {
              token: " ",
            },
            {
              token: "class",
            },
            {
              token: "=",
            },
            {
              token: '"visually-hidden-focusable"',
            },
            {
              token: " ",
            },
            {
              token: "href",
            },
            {
              token: "=",
            },
            {
              token: '"#content"',
            },
            {
              token: ">",
            },
            {
              token: "Skip to main content",
            },
            {
              token: "</",
            },
            {
              token: "a",
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
