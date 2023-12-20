import {
  NpmBootstrapLink,
  SassAndJsExampleLink,
  SassLangLink,
} from "../../../../components/Links";
import { Title } from "../../../../components/Title";
import { Callout } from "../Callout";
import * as CodeSnippets from "../CodeSnippets";
import * as Highlighted from "./utils";

export const LeadContent = () => (
  <p>
    <Highlighted.CommonJsRequire /> or <Highlighted.EsmImport /> will load all
    of Bootstrap
    {"'"}s plugins onto a <Highlighted.BootstrapObject /> object. The{" "}
    <Highlighted.BootstrapObject /> module itself exports all of our plugins.
    You can manually load Bootstrap{"'"}s plugins individually by loading the{" "}
    <Highlighted.DistJsGlob /> files under the package{"'"}s top-level
    directory.
  </p>
);

export const BodyContent = () => (
  <p>
    Bootstrap{"'"}s <Highlighted.ManifestFile /> contains some additional
    metadata under the following keys{":"}
  </p>
);

export const Subtitle = () => (
  <p>
    Install Bootstrap in your Node.js powered apps with <NpmBootstrapLink />
    {":"}
  </p>
);

export const BulletList = () => (
  <ul>
    <li>
      <code>sass</code> - path to Bootstrap{"'"}s main <SassLangLink /> source
      file
    </li>
    <li>
      <code>style</code> - path to Bootstrap{"'"}s non-minified CSS that{"'"}s
      been compiled using the default settings (no customization)
    </li>
  </ul>
);

export const UseNpm = () => (
  <>
    <Title small id="npm" aria-label="Link to this section: npm">
      npm
    </Title>
    <Subtitle />
    <CodeSnippets.NpmCodeSnippet />
    <LeadContent />
    <BodyContent />
    <BulletList />
    <Callout variant="info">
      <strong>
        Get started with Bootstrap via npm with our starter project!
      </strong>{" "}
      Head to the <SassAndJsExampleLink /> template repository to see how to
      build and customize Bootstrap in your own npm project. Includes Sass
      compiler{","} Autoprefixer{","} Stylelint
      {","}
      PurgeCSS{","} and Bootstrap Icons.
    </Callout>
  </>
);
