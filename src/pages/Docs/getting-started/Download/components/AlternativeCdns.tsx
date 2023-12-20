import {
  CdnJsBootstrapLink,
  CdnjsLink,
  JsDelivrLink,
  UnpkgLink,
} from "../../../components/Links";
import { Title } from "../../../components/Title";

export const LeadContent = () => (
  <p>
    We recommend <JsDelivrLink /> and use it ourselves in our documentation.
    However{","} in some cases—like in some specific countries or environments
    {"—"}you may need to use other CDN providers like <CdnjsLink /> or{" "}
    <UnpkgLink />
    {"."}
  </p>
);

export const Jumpline = () => (
  <p>
    You{"'"}ll find the same files on these CDN providers{","} albeit with
    different URLs. With cdnjs{","} you can <CdnJsBootstrapLink /> to copy and
    paste ready-to-use HTML snippets for each dist file from any version of
    Bootstrap{"."}
  </p>
);

export const AlternativeCdns = () => (
  <>
    <Title
      small
      id="alternative-cdns"
      aria-label="Link to this section: Alternative CDNs"
    >
      Alternative CDNs
    </Title>
    <LeadContent />
    <Jumpline />
  </>
);
