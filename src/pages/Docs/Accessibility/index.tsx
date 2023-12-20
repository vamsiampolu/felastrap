import { ContentWrapper } from "../components/ContentWrapper";
import { Page } from "../components/Page";
import { AdditionalResources } from "./components/AdditionalResources";
import { Overview } from "./components/Overview/Overview";
import { TableOfContents } from "./components/TableOfContents";

const Accessibility = () => (
  <Page
    title="Accessibility"
    description="A brief overview of Bootstrap's features and limitations for the creation of accessible content."
    toc={<TableOfContents />}
  >
    <ContentWrapper>
      <Overview />
      <AdditionalResources />
    </ContentWrapper>
  </Page>
);

export default Accessibility;
