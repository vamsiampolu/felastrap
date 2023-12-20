import { Header } from "../../../../../../../components/Header/Header";
import { ClipboardButton } from "../../../../../../Home/components/Content/components/CodeSnippet/ClipboardButton";
import { CodeSnippet } from "../../../../../../Home/components/Content/components/CodeSnippet/CodeSnippet";
import { Highlight } from "../../../../../../Home/components/Content/components/CodeSnippet/Highlight";
import { AnchorLink } from "../../../../../components/AnchorLink";

const DisposeSnippet = () => (
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
              token: "myModal",
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
              token: "document",
            },
            {
              token: ".",
            },
            {
              token: "querySelector",
            },
            {
              token: "(",
            },
            {
              token: "'#myModal'",
            },
            {
              token: ")",
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
              token: "myModal",
            },
            {
              token: ".",
            },
            {
              token: "hide",
            },
            {
              token: "(",
            },
            {
              token: ")",
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
              token: "myModal",
            },
            {
              token: ".",
            },
            {
              token: "addEventListener",
            },
            {
              token: "(",
            },
            {
              token: "'shown.bs.hidden'",
            },
            {
              token: ",",
            },
            {
              token: " ",
            },
            {
              token: "event",
            },
            {
              token: " ",
            },
            {
              token: "=>",
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
              token: "  ",
            },
            {
              token: "myModal",
            },
            {
              token: ".",
            },
            {
              token: "dispose",
            },
            {
              token: "(",
            },
            {
              token: ")",
            },
          ],
        },
        {
          tokens: [
            {
              token: "}",
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

const DisposeTitle = () => (
  <Header as="h4" id="dispose-method">
    <code>dispose</code> method{" "}
    <AnchorLink
      href="#dispose-method"
      aria-label="Link to this section: dispose method"
    />
  </Header>
);

const DisposeSubtitle = () => (
  <p>
    While it may seem correct to use the <code>dispose</code> method immediately
    after <code>hide{"()"}</code>, it will lead to incorrect results. Here{"'"}s
    an example of the problem use{":"}
  </p>
);

export const DisposeMethod = () => (
  <>
    <DisposeTitle />
    <DisposeSubtitle />
    <DisposeSnippet />
  </>
);
