import { ContentWrapper } from "../../components/ContentWrapper";
import { Page } from "../../components/Page";
import { CompiledBootstrap } from "./components/CompiledBootstrap/CompiledBootstrap";
import { CssFiles } from "./components/CssFiles/CssFiles";
import { JsFiles } from "./components/JsFiles/JsFiles";
import { SourceCode } from "./components/SourceCode/SourceCode";
import { TableOfContents } from "./components/TableOfContents";

const Contents = () => (
  <Page
    title="Contents"
    description="Discover what's included in Bootstrap, including our compiled and source code flavors."
    toc={<TableOfContents />}
  >
    <ContentWrapper>
      <CompiledBootstrap />
      <CssFiles />
      <JsFiles />
      <SourceCode />
    </ContentWrapper>
  </Page>
);

export default Contents;
