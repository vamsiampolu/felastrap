import { Link } from "../../../../../components/Link/Link";
import { Title } from "../../../components/Title";
import * as DownloadButton from "./DownloadButton";

export const LeadContent = () => (
  <p>
    Download ready-to-use compiled code for{" "}
    <strong>Bootstrap {"v5.3.2"}</strong> to easily drop into your project
    {","} which includes{":"}
  </p>
);

export const BulletList = () => (
  <ul>
    <li>
      Compiled and minified CSS bundles (see{" "}
      <Link href="/docs/5.3/getting-started/contents/#css-files">
        CSS files comparison
      </Link>
      )
    </li>
    <li>
      Compiled and minified JavaScript plugins (see{" "}
      <Link href="/docs/5.3/getting-started/contents/#js-files">
        JS files comparison
      </Link>
      )
    </li>
  </ul>
);

export const BodyContent = () => (
  <p>
    This doesn{"'"}t include documentation{","} source files{","} or any
    optional JavaScript dependencies like Popper.
  </p>
);

export const CompiledCssAndJsModules = () => {
  return (
    <>
      <Title
        id="compiled-css-and-js"
        aria-label="Link to this section: Compiled CSS and JS"
      >
        Compiled CSS And JS
      </Title>
      <LeadContent />
      <BulletList />
      <BodyContent />
      <DownloadButton.DistZip />
    </>
  );
};
