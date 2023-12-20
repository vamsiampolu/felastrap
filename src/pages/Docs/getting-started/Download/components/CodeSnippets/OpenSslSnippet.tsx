import { ClipboardButton } from "../../../../../Home/components/Content/components/CodeSnippet/ClipboardButton";
import { CodeSnippet } from "../../../../../Home/components/Content/components/CodeSnippet/CodeSnippet";
import { Highlight } from "../../../../../Home/components/Content/components/CodeSnippet/Highlight";

export const OpenSslSnippet = () => (
  <CodeSnippet>
    {" "}
    <ClipboardButton />
    <Highlight
      language="sh"
      lines={[
        {
          tokens: [
            {
              token: " openssl dgst -sha384 -binary bootstrap.min.js ",
            },
            {
              token: "|",
            },
            {
              token: " openssl base64 -A",
            },
          ],
        },
      ]}
    />
  </CodeSnippet>
);
