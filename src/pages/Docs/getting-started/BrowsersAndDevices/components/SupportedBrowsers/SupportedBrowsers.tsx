import { Title } from "../../../../components/Title";
import { BodyContent } from "./BodyContent";
import { LeadContent } from "./LeadContent";
import { Subtitle } from "./Subtitle";
import { SupportedVersions } from "./SupportedVersions";

export const SupportedBrowsers = () => (
  <>
    <Title
      id="supported-browsers"
      aria-label="Link to this section: Supported browsers"
    >
      Supported browsers
    </Title>
    <Subtitle />
    <LeadContent />
    <SupportedVersions />
    <BodyContent />
  </>
);
