import { ClipboardButton } from "../../../../../Home/components/Content/components/CodeSnippet/ClipboardButton";
import { CodeSnippet } from "../../../../../Home/components/Content/components/CodeSnippet/CodeSnippet";
import { Highlight } from "../../../../../Home/components/Content/components/CodeSnippet/Highlight";

// div className="highlight">
// <pre tabindex="0" className="chroma">
{
  /* <code className="language-js" data-lang="js">
  //  <span className="line"><span className="cl">
      <span className="nx">bootstrap</span><span className="p">.</span><span className="nx">Popover</span><span className="p">.</span><span className="nx">getOrCreateInstance</span><span className="p">(</span><span className="nx">myPopoverEl</span><span className="p">,</span> <span className="nx">configObject</span><span className="p">)</span> */
}
// </span></span></code></pre></div>

export const GetOrCreateInstanceSnippet = () => (
  <CodeSnippet>
    {" "}
    <ClipboardButton />
    <Highlight
      lines={[
        {
          tokens: [
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
              token: ".",
            },
            {
              token: "getOrCreateInstance",
            },
            {
              token: "(",
            },
            {
              token: "myPopoverEl",
            },
            {
              token: ",",
            },
            {
              token: " ",
            },
            {
              token: "configObject",
            },
            {
              token: ")",
            },
          ],
        },
      ]}
      language="js"
    />
  </CodeSnippet>
);
