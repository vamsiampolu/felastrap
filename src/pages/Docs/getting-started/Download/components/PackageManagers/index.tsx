import {
  AutoprefixerLink,
  SassCompilerLink,
} from "../../../../components/Links";
import { Title } from "../../../../components/Title";
import { UseComposer } from "./Composer";
import { UseNpm } from "./Npm";
import { UseRubyGems } from "./RubyGems";
import { UseNuget } from "./UseNuget";
import { UseYarn } from "./Yarn";

export const LeadContent = () => (
  <p>
    Pull in Bootstrap{"'"}s <strong>source files</strong> into nearly any
    project with some of the most popular package managers. No matter the
    package manager{","} Bootstrap will{" "}
    <strong>
      require a
      <SassCompilerLink /> and <AutoprefixerLink />
    </strong>{" "}
    for a setup that matches our official compiled versions.
  </p>
);

export const PackageManagers = () => (
  <>
    <Title
      id="package-managers"
      aria-label="Link to this section: Package managers"
    >
      Package managers
    </Title>
    <LeadContent />
    <UseNpm />
    <UseYarn />
    <UseRubyGems />
    <UseComposer />
    <UseNuget />
  </>
);
