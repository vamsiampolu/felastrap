import { Title } from "../../components/Title";
import { HugoBin, HugoDocs, ToolingSetupLink } from "./utils";
import { inlineBlock } from "./inlineBlock";

const SeeToolingSetup = () => (
  <li>
    Run through the <ToolingSetupLink /> above to install all dependencies.
  </li>
);

const ServeDocs = () => (
  <li>
    From the root {inlineBlock.bootstrap} directory, run{" "}
    {inlineBlock.npmRunDocsServe} in the command line.
  </li>
);

const OpenDocs = () => (
  <li>Open {inlineBlock.localhost9001} in your browser, and voilà.</li>
);

const Steps = () => (
  <ol>
    <SeeToolingSetup />
    <ServeDocs />
    <OpenDocs />
  </ol>
);

export const LocalDocumentation = () => (
  <>
    <Title
      id="local-documentation"
      aria-label="Link to this section: Local documentation"
    >
      Local documentation
    </Title>
    <p>
      Running our documentation locally requires the use of Hugo, which gets
      installed via the <HugoBin /> npm package{"."}
      Hugo is a blazingly fast and quite extensible static site generator that
      provides us: basic includes, Markdown-based files, templates, and more.
      Here{"'"}s how to get it started{":"}
    </p>
    <Steps />
    <p>
      Learn more about using Hugo by reading its <HugoDocs />
      {"."}
    </p>
  </>
);
