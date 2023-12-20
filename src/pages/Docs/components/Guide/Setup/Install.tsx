import { PropsWithChildren } from "react";
import * as CodeSnippets from "../CodeSnippets";

export type InstallProps = PropsWithChildren<{
  name: string;
  packages: string[];
}>;
export const Install = ({ name, packages, children }: InstallProps) => {
  const saveDev = <code>{"--"}save-dev</code>;

  return (
    <li>
      <p>
        <strong>Install {name}.</strong>
      </p>
      {children}
      <p>
        We use {saveDev} to signal that these dependencies are only for
        development use and not for production.
      </p>

      <CodeSnippets.InstallSnippet packages={packages} />
    </li>
  );
};
