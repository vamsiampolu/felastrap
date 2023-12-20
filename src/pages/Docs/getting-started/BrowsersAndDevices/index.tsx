import { ContentWrapper } from "../../components/ContentWrapper";
import { Page } from "../../components/Page";
import { BrowserZooming } from "./components/BrowserZooming";
import { DesktopBrowsers } from "./components/DesktopBrowsers/DesktopBrowsers";
import { IESupport } from "./components/DesktopBrowsers/IESupport";
import { MobileDevices } from "./components/MobileDevices/MobileDevices";
import { ModalsAndDropdowns } from "./components/ModalsAndDropdowns";
import { SupportedBrowsers } from "./components/SupportedBrowsers/SupportedBrowsers";
import { TableOfContents } from "./components/TableOfContents";
import { Validators } from "./components/Validators";

const BrowsersAndDevices = () => (
  <Page
    title="Browsers and devices"
    description="Learn about the browsers and devices, from modern to old, that are supported by Bootstrap, including known quirks and bugs for each."
    toc={<TableOfContents />}
  >
    <ContentWrapper>
      <SupportedBrowsers />
      <MobileDevices />
      <DesktopBrowsers />
      <IESupport />
      <ModalsAndDropdowns />
      <BrowserZooming />
      <Validators />
    </ContentWrapper>
  </Page>
);

export default BrowsersAndDevices;
