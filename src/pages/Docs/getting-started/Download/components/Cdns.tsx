import { JsDelivrLink } from "../../../components/Links";
import { Title } from "../../../components/Title";
import { AlternativeCdns } from "./AlternativeCdns";
import { Callout } from "./Callout";
import * as CodeSnippets from "./CodeSnippets";

export const LeadContent = () => (
  <p>
    Skip the download with <JsDelivrLink /> to deliver cached version of
    Bootstrap{"'"}s compiled CSS and JS to your project.
  </p>
);

export const BodyContent = () => (
  <p>
    If you{"'"}re using our compiled JavaScript and prefer to include Popper
    separately{","} add Popper before our JS{","} via a CDN preferably.
  </p>
);

export const Cdns = () => (
  <>
    <Title
      id="cdn-via-jsdelivr"
      aria-label="Link to this section: CDN via jsDelivr"
    >
      CDN via jsDelivr
    </Title>
    <LeadContent />
    <CodeSnippets.StylesSnippet />
    <LeadContent />
    <CodeSnippets.ScriptsSnippet />
    <AlternativeCdns />
    <Callout variant="warning">
      <strong>
        If the SRI hashes differ for a given file{","} you shouldn{"'"}t use the
        files from that CDN{","} because it means that the file was modified by
        someone else.
      </strong>
    </Callout>
  </>
);
