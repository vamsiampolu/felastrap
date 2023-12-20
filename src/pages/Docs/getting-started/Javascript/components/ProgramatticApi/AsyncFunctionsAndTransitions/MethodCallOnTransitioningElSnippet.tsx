import { ClipboardButton } from "../../../../../../Home/components/Content/components/CodeSnippet/ClipboardButton";
import { CodeSnippet } from "../../../../../../Home/components/Content/components/CodeSnippet/CodeSnippet";
import { Highlight } from "../../../../../../Home/components/Content/components/CodeSnippet/Highlight";

export const MethodCallOnTransitioningElSnippet = () => (
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
              token: "myCarouselEl",
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
              token: "'#myCarousel'",
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
              token: "const",
            },
            {
              token: " ",
            },
            {
              token: "carousel",
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
              token: "Carousel",
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
              token: "myCarouselEl",
            },
            {
              token: ")",
            },
            {
              token: "// Retrieve a Carousel instance",
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
              token: "myCarouselEl",
            },
            {
              token: ".",
            },
            {
              token: "addEventListener",
            },
            {
              token: "'slid.bs.carousel'",
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
              token: "carousel",
            },
            {
              token: ".",
            },
            {
              token: "to",
            },
            {
              token: "(",
            },
            {
              token: "'2'",
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
              token: "\n",
            },
          ],
        },
        {
          tokens: [
            {
              token: "carousel",
            },
            {
              token: ".",
            },
            {
              token: "to",
            },
            {
              token: "(",
            },
            {
              token: "'1'",
            },
            {
              token: ")",
            },
          ],
        },
        {
          tokens: [
            {
              token: "carousel",
            },
            {
              token: ".",
            },
            {
              token: "to",
            },
            {
              token: "(",
            },
            {
              token: "'2'",
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
