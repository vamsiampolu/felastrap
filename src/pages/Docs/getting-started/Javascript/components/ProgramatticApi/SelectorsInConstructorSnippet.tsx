import { ClipboardButton } from "../../../../../Home/components/Content/components/CodeSnippet/ClipboardButton";
import { CodeSnippet } from "../../../../../Home/components/Content/components/CodeSnippet/CodeSnippet";
import { Highlight } from "../../../../../Home/components/Content/components/CodeSnippet/Highlight";

export const SelectorsInConstructorsSnippet = () => (
  <CodeSnippet>
    {" "}
    <ClipboardButton />
    <Highlight
      language="js"
      lines={[
        {
          tokens: [
            {
              token: "const",
            },
            {
              token: " ",
            },
            {
              token: "modal",
            },
            {
              token: " ",
            },
            {
              token: "=",
            },
            {
              token: " ",
            },
            {
              token: "=",
            },
            {
              token: " ",
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
              token: "Modal",
            },
            {
              token: "(",
            },
            {
              token: "#",
            },
            {
              token: "myModal",
            },
            {
              token: ")",
            },
          ],
        },
        {
          tokens: [
            {
              token: "const",
            },
            {
              token: " ",
            },
            {
              token: "dropdown",
            },
            {
              token: "=",
            },
            {
              token: " ",
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
              token: "Dropdown",
            },
            {
              token: "(",
            },
            {
              token: "'",
            },
            {
              token: '[data-bs-toggle="dropdown"]',
            },
            {
              token: "'",
            },
            {
              token: ")",
            },
          ],
        },
        {
          tokens: [
            {
              token: "const",
            },
            {
              token: " ",
            },
            {
              token: "offcanvas",
            },
            {
              token: " ",
            },
            {
              token: "=",
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
              token: "Offcanvas",
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
              token: "'#myOffcanvas'",
            },
            {
              token: ")",
            },
          ],
        },
        {
          tokens: [
            {
              token: "const",
            },
            {
              token: " ",
            },
            {
              token: "alert",
            },
            {
              token: " ",
            },
            {
              token: "=",
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
              token: "Alert",
            },
            {
              token: ".",
            },
            {
              token: "getOrCreateInstance",
            },
            {
              token: "(",
            },
            {
              token: "'#myAlert'",
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
