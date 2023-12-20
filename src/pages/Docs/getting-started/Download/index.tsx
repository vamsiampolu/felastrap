import { Page } from "../../components/Page";
import { Cdns } from "./components/Cdns";
import { CompiledCssAndJsModules } from "./components/CompiledCssAndJsModules";
import { ContentWrapper } from "../../components/ContentWrapper";
import { Examples } from "./components/Examples";
import { PackageManagers } from "./components/PackageManagers";
import { SourceFiles } from "./components/SourceFiles";
import { TableOfContents } from "./components/TableOfContents";
import { VerifyHash } from "./components/VerifyHash";

const Download = () => (
  <Page
    title="Download"
    description="Download Bootstrap to get the compiled CSS and JavaScript, source code, or include it with your favorite package managers like npm, RubyGems, and more."
    toc={<TableOfContents />}
  >
    <ContentWrapper>
      <CompiledCssAndJsModules />
      <SourceFiles />
      <Examples />
      <Cdns />
      <VerifyHash />
      <PackageManagers />
    </ContentWrapper>
  </Page>
);

export default Download;
