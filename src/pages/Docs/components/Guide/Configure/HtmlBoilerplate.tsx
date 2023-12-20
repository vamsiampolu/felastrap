import { PropsWithChildren } from "react";
import * as CodeSnippets from "../CodeSnippets";

export const HtmlBoilerplate = ({
  name,
  children,
}: PropsWithChildren<{ name: string }>) => {
  const container = <code>div className=&quot;container&quot;</code>;
  const btn = (
    <code>
      {"<"}button{">"}
    </code>
  );
  const html = <code>index.html</code>;
  return (
    <li>
      <p>
        <strong>
          Fill in the <code>src/index.html</code> file.
        </strong>{" "}
        {name} needs a page to render, so we use our {html} page to set up some
        basic HTML, including our CSS and JavaScript files.
      </p>
      <CodeSnippets.HtmlBoilerplate name={name} />
      <p>
        We{"'"}re including a little bit of Bootstrap styling here with the{" "}
        {container} and {btn} so that we see when Bootstrap{"'"}s CSS is loaded
        by {name}.
      </p>
      {children}
    </li>
  );
};
