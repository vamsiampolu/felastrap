import { ContentWrapper } from "../../components/ContentWrapper";
import { Page } from "../../components/Page";
import { ExtendedDocumentation } from "./components/ExtendedDocumentation";
import { TableOfContents } from "./components/TableOfContents";
import { UsingRfs } from "./components/UsingRfs";
import { WhatIsRfs } from "./components/WhatIsRfs";

const Rfs = () => (
  <Page
    title="RFS"
    description="Bootstrap's resizing engine responsively scales common CSS properties to better utilize available space across viewports and devices."
    toc={<TableOfContents />}
  >
    <ContentWrapper>
      <WhatIsRfs />
      <UsingRfs />
    </ContentWrapper>
    <ExtendedDocumentation />
  </Page>
);

export default Rfs;
