import {
  LibmanLink,
  NugetCssLink,
  NugetLink,
  NugetSassLink,
} from "../../../../components/Links";
import { Title } from "../../../../components/Title";
import * as CodeSnippets from "../CodeSnippets/";

export const LeadContent = () => (
  <p>
    If you develop in {"."}NET Framework{","} you can also install and manage
    Bootstrap{"'"}s <NugetCssLink /> or <NugetSassLink /> and JavaScript using{" "}
    <NugetLink />. Newer projects should use <LibmanLink /> or another method as
    NuGet is designed for compiled code{","} not frontend assets.
  </p>
);

export const UseNuget = () => (
  <>
    <Title small id="nuget" aria-label="Link to this section: NuGet">
      NuGet
    </Title>
    <LeadContent />
    <CodeSnippets.NugetInstallSnippet />
    <CodeSnippets.LibmanInstallSnippet />
  </>
);
