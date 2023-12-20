import { Link } from "../../../../../components/Link/Link";
import * as CodeSnippets from "../CodeSnippets";

const ReadScssImportDocs = () => (
  <Link href="/docs/5.3/customize/sass/#importing">
    Read our Sass import docs
  </Link>
);

export const StyleImport = () => {
  const styles = <code>src/scss/styles.scss</code>;

  return (
    <li>
      <p>
        <strong>Import Bootstrap{"'"}s CSS.</strong> Add the following to{" "}
        {styles} to import all of Bootstrap{"'"}s source Sass.
      </p>
      <CodeSnippets.ImportScssStyles />
      <p>
        <em>
          You can also import our stylesheets individually if you want.{" "}
          <ReadScssImportDocs /> for details.
        </em>
      </p>
    </li>
  );
};
