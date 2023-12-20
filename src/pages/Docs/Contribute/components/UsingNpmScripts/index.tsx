import { Title } from "../../../components/Title";
import { Callout } from "../../../getting-started/Download/components/Callout";
import { Manifest, SassAndJsExample } from "../utils";
import { inlineBlock } from "../inlineBlock";
import { NpmScriptsTable } from "./NpmScriptsTable";

export const UsingNpmScripts = () => (
  <>
    <Title
      id="using-npm-scripts"
      aria-label="Link to this section: Using npm scripts"
    >
      Using npm scripts{" "}
    </Title>
    <p>
      Our <Manifest /> includes numerous tasks for developing the project. Run{" "}
      {inlineBlock.npmRun} to see all the npm scripts in your terminal.{" "}
      <strong>Primary tasks include{":"}</strong>
    </p>
    <NpmScriptsTable />
    <Callout variant="info">
      <strong>
        Get started with Bootstrap via npm with our starter project{"!"}
      </strong>{" "}
      Head to the <SassAndJsExample /> template repository to see how to build
      and customize Bootstrap in your own npm project. Includes Sass compiler,
      Autoprefixer, Stylelint, PurgeCSS, and Bootstrap Icons.
    </Callout>
  </>
);
