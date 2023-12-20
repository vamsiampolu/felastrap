import { Link } from "../../../../../components/Link/Link";
import { Title } from "../../../components/Title";
import * as DownloadButton from "./DownloadButton";

export const LeadContent = () => (
  <p>
    Compile Bootstrap with your own asset pipeline by downloading our source
    Sass{","} JavaScript{","} and documentation files. This option requires some
    additional tooling{":"}
  </p>
);

export const BulletList = () => (
  <ul>
    <li>
      <Link href="/docs/5.3/getting-started/contribute/#sass">
        Sass compiler
      </Link>{" "}
      for compiling Sass source files into CSS files
    </li>
    <li>
      <Link href="https://github.com/postcss/autoprefixer">Autoprefixer</Link>{" "}
      for CSS vendor prefixing
    </li>
  </ul>
);

export const BodyContent = () => (
  <p>
    Should you require our full set of{" "}
    <Link href="/docs/5.3/getting-started/contribute/#tooling-setup">
      build tools
    </Link>
    {","} they are included for developing Bootstrap and its docs{","} but they
    {"'"}re likely unsuitable for your own purposes.
  </p>
);

export const SourceFiles = () => (
  <>
    <Title id="source-files" aria-label="Link to this section: Source files">
      Source files
    </Title>
    <LeadContent />
    <BulletList />
    <BodyContent />
    <DownloadButton.Source />
  </>
);
