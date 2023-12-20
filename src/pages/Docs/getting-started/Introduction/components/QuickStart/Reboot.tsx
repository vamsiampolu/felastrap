import { Link } from "../../../../../../components/Link/Link";

export const Reboot = () => (
  <>
    <h3 id="reboot">
      Reboot{" "}
      <Link
        className="anchor-link"
        href="#reboot"
        aria-label="Link to this section: Reboot"
      ></Link>
    </h3>
    <p>
      For improved cross-browser rendering, we use{" "}
      <Link href="/docs/5.3/content/reboot/">Reboot</Link> to correct
      inconsistencies across browsers and devices while providing slightly more
      opinionated resets to common HTML elements.
    </p>
  </>
);
