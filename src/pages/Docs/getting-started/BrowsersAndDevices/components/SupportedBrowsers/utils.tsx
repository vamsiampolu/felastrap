import { Link } from "../../../../../../components/Link/Link";

export const LatestStableReleases = () => (
  <strong>latest{","} stable releases</strong>
);
export const BrowserlistrcFile = () => <code>{"."}browserslistrc file</code>;
export const BrowserListrc = () => (
  <Link href="https://github.com/twbs/bootstrap/blob/v5.3.2/.browserslistrc">
    in our <BrowserlistrcFile />
  </Link>
);

export const Autoprefixer = () => (
  <Link href="https://github.com/postcss/autoprefixer">Autoprefixer</Link>
);
export const BrowserList = () => (
  <a href="https://github.com/browserslist/browserslist">Browserslist</a>
);
