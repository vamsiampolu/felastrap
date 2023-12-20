import { ContentWrapper } from "../components/ContentWrapper";
import { Page } from "../components/Page";
import { Autoprefixer } from "./components/Autoprefixer";
import { LocalDocumentation } from "./components/LocalDocumentation";
import { Rtlcss } from "./components/Rtlcss";
import { TableOfContents } from "./components/TableOfContents";
import { ToolingSetup } from "./components/ToolingSetup";
import { Troubleshooting } from "./components/Troubleshooting";
import { UsingNpmScripts } from "./components/UsingNpmScripts";
import { Sass } from "./components/Sass";

const Contribute = () => {
  return (
    <Page
      title="Contribute"
      description="Help develop Bootstrap with our documentation build scripts and tests."
      toc={<TableOfContents />}
    >
      <ContentWrapper>
        <ToolingSetup />
        <UsingNpmScripts />
        <Sass />
        <Autoprefixer />
        <Rtlcss />
        <LocalDocumentation />
        <Troubleshooting />
      </ContentWrapper>
    </Page>
  );
};

export default Contribute;
