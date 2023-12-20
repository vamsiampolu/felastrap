import { Link } from "../../../../../../components/Link/Link";
import { Title } from "../../../../components/Title";

export const JumpLineList = () => (
  <ul>
    <li>
      Read a bit more about some{" "}
      <Link href="#important-globals">
        important global environment settings
      </Link>{" "}
      that Bootstrap utilizes.
    </li>
    <li>
      Read about what{"'"}s included in Bootstrap in our{" "}
      <Link href="/docs/5.3/getting-started/contents/">contents section</Link>{" "}
      and the list of{" "}
      <Link href="#js-components">components that require JavaScript</Link>{" "}
      below.
    </li>
    <li>
      Need a little more power? Consider building with Bootstrap by{" "}
      <Link href="/docs/5.3/getting-started/download/#package-managers">
        including the source files via package manager
      </Link>
      {"."}
    </li>
    <li>
      Looking to use Bootstrap as a module with{" "}
      <code>{'<script type="module">'}</code>
      {"?"} Please refer to our{" "}
      <Link href="/docs/5.3/getting-started/javascript/#using-bootstrap-as-a-module">
        using Bootstrap as a module
      </Link>{" "}
      section.
    </li>
  </ul>
);

export const NextSteps = () => (
  <>
    <Title id="next-steps" aria-label="Link to this section: Next steps">
      Next steps
    </Title>
    <JumpLineList />
  </>
);
