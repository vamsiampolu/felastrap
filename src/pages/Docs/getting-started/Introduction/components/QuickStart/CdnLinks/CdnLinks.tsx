import { Header } from "../../../../../../../components/Header/Header";
import { Link } from "../../../../../../../components/Link/Link";
import { CdnLinksTable } from "./CdnLinksTable";

export const CdnLinks = () => {
  return (
    <>
      <Header as="h2" id="cdn-links">
        CDN links{" "}
        <a
          className="anchor-link"
          href="#cdn-links"
          aria-label="Link to this section: CDN links"
        ></a>
      </Header>
      <p>As reference, here are our primary CDN links.</p>
      <CdnLinksTable />
      <p>
        You can also use the CDN to fetch any of our{" "}
        <Link href="/docs/5.3/getting-started/contents/">
          additional builds listed in the Contents page
        </Link>
        {"."}
      </p>
    </>
  );
};
