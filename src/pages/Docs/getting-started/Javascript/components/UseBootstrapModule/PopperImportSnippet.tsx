import { ClipboardButton } from "../../../../../Home/components/Content/components/CodeSnippet/ClipboardButton";
import { CodeSnippet } from "../../../../../Home/components/Content/components/CodeSnippet/CodeSnippet";
import { Highlight } from "../../../../../Home/components/Content/components/CodeSnippet/Highlight";
<p>
  If you try this as-is, you’ll see an error in the console like the following:
</p>;

export const Note = () => (
  <p>
    If you try this as{"-"}is, you{"'"}ll see an error in the console like the
    following{":"}
  </p>
);

export const PopperImportEsmSnippet = () => (
  <CodeSnippet>
    {" "}
    <ClipboardButton />
    <Highlight
      language="js"
      lines={[
        {
          tokens: [
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
              token: "Popper",
            },
            {
              token: " ",
            },
            {
              token: "from",
            },
            {
              token: " ",
            },
            {
              token: '"@popperjs/core"',
            },
          ],
        },
      ]}
    />
  </CodeSnippet>
);

export const ErrorMessageSnippet = () => (
  <CodeSnippet>
    <ClipboardButton />
    <Highlight
      language="text"
      lines={[
        {
          tokens: [
            {
              token:
                'Uncaught TypeError: Failed to resolve module specifier "@popperjs/core". Relative references must start with either "/", "./", or "../".',
            },
          ],
        },
      ]}
    />
  </CodeSnippet>
);

export const PopperImportSnippet = () => (
  <>
    <PopperImportEsmSnippet />
    <Note />
    <ErrorMessageSnippet />
  </>
);
