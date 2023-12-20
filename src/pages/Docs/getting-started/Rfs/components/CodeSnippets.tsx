import { ClipboardButton } from "../../../../Home/components/Content/components/CodeSnippet/ClipboardButton";
import { CodeSnippet } from "../../../../Home/components/Content/components/CodeSnippet/CodeSnippet";
import { Highlight } from "../../../../Home/components/Content/components/CodeSnippet/Highlight";

export const FontSizeMixin = () => (
  <CodeSnippet>
    {" "}
    <ClipboardButton />
    <Highlight
      language="scss"
      lines={[
        {
          tokens: [
            {
              token: ".title",
            },
            {
              token: " ",
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
              token: "@include",
            },
            {
              token: " ",
            },
            {
              token: "font-size",
            },
            {
              token: "(",
            },
            {
              token: "4rem",
            },
            {
              token: ")",
            },
            {
              token: ";",
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
          ],
        },
      ]}
    />
  </CodeSnippet>
);

export const CompiledMixin = () => (
  <CodeSnippet>
    {" "}
    <ClipboardButton />
    <Highlight
      language="scss"
      lines={[
        {
          tokens: [
            {
              token: ".",
            },
            {
              token: "title",
            },
            {
              token: " ",
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
              token: "font-size",
            },
            {
              token: ":",
            },
            {
              token: " ",
            },
            {
              token: "calc",
            },
            {
              token: "(",
            },
            {
              token: "1.525",
            },
            {
              token: "rem",
            },
            {
              token: " ",
            },
            {
              token: "+",
            },
            {
              token: " ",
            },
            {
              token: "3.3",
            },
            {
              token: "vw",
            },
            {
              token: ")",
            },
            {
              token: ";",
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
              token: "\n",
            },
          ],
        },
        {
          tokens: [
            {
              token: "@",
            },
            {
              token: "media",
            },
            {
              token: " ",
            },
            {
              token: "(",
            },
            {
              token: "min-width",
            },
            {
              token: ":",
            },
            {
              token: " ",
            },
            {
              token: "1280",
            },
            {
              token: "px",
            },
            {
              token: ")",
            },
            {
              token: " ",
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
              token: ".",
            },
            {
              token: "title",
            },
            {
              token: " ",
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
              token: "    ",
            },
            {
              token: "font-size",
            },
            {
              token: ":",
            },
            {
              token: " ",
            },
            {
              token: "4",
            },
            {
              token: "rem",
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
              token: "}",
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
          ],
        },
      ]}
    />
  </CodeSnippet>
);

export const RfsMixin = () => (
  <CodeSnippet>
    {" "}
    <ClipboardButton />
    <Highlight
      language="scss"
      lines={[
        {
          tokens: [
            {
              token: ".",
            },
            {
              token: "selector",
            },
            {
              token: " ",
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
              token: "@include",
            },
            {
              token: " ",
            },
            {
              token: "rfs",
            },
            {
              token: "(",
            },
            {
              token: "4",
            },
            {
              token: "rem",
            },
            {
              token: ",",
            },
            {
              token: " ",
            },
            {
              token: "border-radius",
            },
            {
              token: ")",
            },
            {
              token: ";",
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
          ],
        },
      ]}
    />
  </CodeSnippet>
);

export const MixinImportant = () => (
  <CodeSnippet>
    {" "}
    <ClipboardButton />
    <Highlight
      language="scss"
      lines={[
        {
          tokens: [
            {
              token: ".",
            },
            {
              token: "selector",
            },
            {
              token: " ",
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
              token: "@include",
            },
            {
              token: " ",
            },
            {
              token: "padding",
            },
            {
              token: "(",
            },
            {
              token: "2.5",
            },
            {
              token: "rem",
            },
            {
              token: " ",
            },
            {
              token: "!important",
            },
            {
              token: ")",
            },
            {
              token: ";",
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
          ],
        },
      ]}
    />
  </CodeSnippet>
);

export const LgBreakpointMixin = () => (
  <CodeSnippet>
    {" "}
    <ClipboardButton />
    <Highlight
      language="scss"
      lines={[
        {
          tokens: [
            {
              token: ".",
            },
            {
              token: "selector",
            },
            {
              token: " ",
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
              token: " ",
            },
            {
              token: "@include",
            },
            {
              token: " ",
            },
            {
              token: "media-breakpoint-down",
            },
            {
              token: "(",
            },
            {
              token: "lg",
            },
            {
              token: ")",
            },
            {
              token: " ",
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
              token: "    ",
            },
            {
              token: "padding",
            },
            {
              token: ":",
            },
            {
              token: " ",
            },
            {
              token: "rfs-fluid-value",
            },
            {
              token: "(",
            },
            {
              token: "2rem",
            },
            {
              token: ")",
            },
            {
              token: ";",
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
              token: "    ",
            },
            {
              token: "font-size",
            },
            {
              token: ":",
            },
            {
              token: " ",
            },
            {
              token: "rfs-fluid-value",
            },
            {
              token: "(",
            },
            {
              token: "1.125rem",
            },
            {
              token: ")",
            },
            {
              token: ";",
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
              token: "}",
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
          ],
        },
      ]}
    />
  </CodeSnippet>
);

export const LgBreakpointCompiled = () => (
  <CodeSnippet>
    {" "}
    <ClipboardButton />
    <Highlight
      language="scss"
      lines={[
        {
          tokens: [
            {
              token: "@",
            },
            {
              token: "media",
            },
            {
              token: " ",
            },
            {
              token: "(",
            },
            {
              token: "max-width",
            },
            {
              token: ":",
            },
            {
              token: " ",
            },
            {
              token: "991.98px",
            },
            {
              token: ")",
            },
            {
              token: " ",
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
              token: ".",
            },
            {
              token: "selector",
            },
            {
              token: " ",
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
              token: "padding",
            },
            {
              token: ":",
            },
            {
              token: " ",
            },
            {
              token: "calc",
            },
            {
              token: "(",
            },
            {
              token: "1.325",
            },
            {
              token: "rem",
            },
            {
              token: " ",
            },
            {
              token: "+",
            },
            {
              token: " ",
            },
            {
              token: "0.9",
            },
            {
              token: "vw",
            },
            {
              token: ")",
            },
            {
              token: ";",
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
              token: "    ",
            },
            {
              token: "font-size",
            },
            {
              token: ":",
            },
            {
              token: " ",
            },
            {
              token: "1.125rem",
            },
            {
              token: ";",
            },
            {
              token:
                "/* 1.125rem is small enough, so RFS won't rescale this */",
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
              token: "}",
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
          ],
        },
      ]}
    />
  </CodeSnippet>
);
