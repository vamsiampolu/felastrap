import { ReactNode } from "react";
import * as CodeSnippets from "../CodeSnippets";

export const Start = ({ name, image }: { name: string; image: ReactNode }) => (
  <li>
    <p>
      <strong>And finally, we can start {name}.</strong> From the{" "}
      <code>my-project</code> folder in your terminal, run that newly added npm
      script:
    </p>
    <CodeSnippets.NpmStart />
    {image}
  </li>
);
