import { Link } from "../../../../../components/Link/Link";
import * as CodeSnippets from "../CodeSnippets";

const ReadJsImportDocs = () => (
  <Link href="/docs/5.3/getting-started/javascript/">
    Read our JavaScript docs
  </Link>
);

export const ScriptImport = () => {
  const srcMain = <code>src/js/main.js</code>;
  return (
    <li>
      <p>
        <strong>Import Bootstrap{"'"}s JS.</strong> Add the following to{" "}
        {srcMain} to import all of Bootstrap{"'"}s JS. Popper will be imported
        automatically through Bootstrap.
      </p>
      <CodeSnippets.ImportStar />
      <p>
        You can also import JavaScript plugins individually as needed to keep
        bundle sizes down:
      </p>
      <CodeSnippets.ImportPlugins />
      <p>
        <em>
          <ReadJsImportDocs /> for more information on how to use Bootstrap{"'"}
          s plugins.
        </em>
      </p>
    </li>
  );
};
