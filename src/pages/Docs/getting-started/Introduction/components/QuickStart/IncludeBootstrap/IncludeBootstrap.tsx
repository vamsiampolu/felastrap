import * as CodeSnippets from "../CodeSnippets";
import { Description } from "./Description";
import { UsePopper } from "./UsePopper";

export const IncludeBootstrap = () => (
  <li>
    <Description />
    <CodeSnippets.IncludeStyles />
    <UsePopper />
    <CodeSnippets.IncludeScripts />
  </li>
);
