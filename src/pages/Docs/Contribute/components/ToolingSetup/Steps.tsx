import { Link } from "../../../../../components/Link/Link";
import { Manifest } from "../utils";
import { inlineBlock } from "../inlineBlock";

export const DownloadAndInstallNodejs = () => (
  <li>
    <Link href="https://nodejs.org/en/download/">
      Download and install Node.js
    </Link>
    {" , "}which we use to manage our dependencies.
  </li>
);

export const DownloadSourceCode = () => (
  <li>
    Either{" "}
    <Link href="https://github.com/twbs/bootstrap/archive/v5.3.2.zip">
      download Bootstrap{"'"}s sources
    </Link>{" "}
    or fork and clone{" "}
    <Link href="https://github.com/twbs/bootstrap">
      Bootstrap{"'"}s repository
    </Link>
    {"."}
  </li>
);

export const InstallDependencies = () => (
  <li>
    Navigate to the root {inlineBlock.bootstrapDir} directory and run{" "}
    {inlineBlock.npmInstall} to install our local dependencies listed in{" "}
    <Manifest />
    {"."}
  </li>
);

export const Steps = () => (
  <ol>
    <DownloadAndInstallNodejs />
    <DownloadSourceCode />
    <InstallDependencies />
  </ol>
);
